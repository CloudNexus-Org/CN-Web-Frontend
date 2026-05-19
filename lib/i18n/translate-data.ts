"use client";

import { useTranslation } from "./context";
import { useMemo, useState, useEffect, useCallback } from "react";

type TranslationDict = Record<string, string>;
type Listener = (dict: TranslationDict) => void;

const pageTranslationsCache: Record<string, TranslationDict> = {};
const loadingPromises: Record<string, Promise<TranslationDict>> = {};
const listeners: Record<string, Set<Listener>> = {};
const normalizedDictCache = new WeakMap<TranslationDict, Map<string, string>>();

const localePageModules: Record<string, () => Promise<{ default: TranslationDict }>> = {
  hi: () => import("./locales/pages/hi.json"),
  fr: () => import("./locales/pages/fr.json"),
  es: () => import("./locales/pages/es.json"),
  zh: () => import("./locales/pages/zh.json"),
};

function loadLocale(locale: string): Promise<TranslationDict> {
  if (pageTranslationsCache[locale]) return Promise.resolve(pageTranslationsCache[locale]);
  if (locale in loadingPromises) return loadingPromises[locale];
  const loader = localePageModules[locale];
  if (!loader) return Promise.resolve({});
  loadingPromises[locale] = loader().then((mod) => {
    pageTranslationsCache[locale] = mod.default;
    delete loadingPromises[locale];
    listeners[locale]?.forEach((fn) => fn(mod.default));
    return mod.default;
  });
  return loadingPromises[locale];
}

function normalizeText(value: string): string {
  return value
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014\u2212]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function getNormalizedDict(dict: TranslationDict): Map<string, string> {
  const cached = normalizedDictCache.get(dict);
  if (cached) return cached;

  const normalized = new Map<string, string>();
  for (const [key, value] of Object.entries(dict)) {
    const normalizedKey = normalizeText(key);
    if (!normalized.has(normalizedKey)) normalized.set(normalizedKey, value);
  }
  normalizedDictCache.set(dict, normalized);
  return normalized;
}

function translateString(str: string, dict: TranslationDict): string {
  const direct = dict[str];
  if (direct) return direct;

  const normalized = getNormalizedDict(dict);
  const normalizedKey = normalizeText(str);
  return normalized.get(normalizedKey) ?? str;
}

function isPlainObject(o: unknown): o is Record<string, unknown> {
  if (!o || typeof o !== "object") return false;
  const proto = Object.getPrototypeOf(o);
  return proto === Object.prototype || proto === null;
}

function deepTranslate<T>(obj: T, dict: TranslationDict): T {
  if (!dict || Object.keys(dict).length === 0) return obj;
  if (typeof obj === "string") return translateString(obj, dict) as T;
  if (Array.isArray(obj)) return obj.map((item) => deepTranslate(item, dict)) as T;
  if (isPlainObject(obj)) {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string") {
        const skip =
          key === "href" || key === "src" || key === "url" || key === "id" ||
          key === "code" || key === "icon" || key === "image" || key === "alt" ||
          key === "heroImage" || key === "heroImageAlt" || key === "backHref" ||
          key === "primaryLink" || key === "secondaryLink" || key === "secondaryCtaHref" ||
          key === "tagColor" || key === "colorClass" || key === "accentColor" ||
          key === "className" || key === "key" || key === "logo" || key === "logos" ||
          value.startsWith("/") || value.startsWith("http") ||
          value.startsWith("#") || value.startsWith("bg-") || value.startsWith("text-");
        result[key] = skip ? value : translateString(value, dict);
      } else if (Array.isArray(value)) {
        result[key] = value.map((item) => deepTranslate(item, dict));
      } else if (isPlainObject(value)) {
        result[key] = deepTranslate(value, dict);
      } else {
        result[key] = value;
      }
    }
    return result as T;
  }
  return obj;
}

export function useTranslatedData<T>(data: T): T {
  const { locale } = useTranslation();
  const [dict, setDict] = useState<TranslationDict | null>(
    pageTranslationsCache[locale] ?? null
  );

  const handleLoaded = useCallback((d: TranslationDict) => setDict(d), []);

  useEffect(() => {
    if (locale === "en") { setDict(null); return; }
    if (pageTranslationsCache[locale]) {
      setDict(pageTranslationsCache[locale]);
      return;
    }
    if (!listeners[locale]) listeners[locale] = new Set();
    listeners[locale].add(handleLoaded);
    loadLocale(locale);
    return () => { listeners[locale]?.delete(handleLoaded); };
  }, [locale, handleLoaded]);

  return useMemo(() => {
    if (locale === "en" || !dict) return data;
    return deepTranslate(data, dict);
  }, [data, locale, dict]);
}
