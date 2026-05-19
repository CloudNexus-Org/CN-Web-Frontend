const fs = require('fs');
const path = require('path');

const root = process.cwd();
const servicesRoot = path.join(root, 'app', '(main)', 'services');
const localeRoot = path.join(root, 'lib', 'i18n', 'locales', 'pages');
const locales = ['hi', 'es', 'fr', 'zh'];

function walk(dir, out=[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name === 'data.ts') out.push(full);
  }
  return out;
}

function norm(s) {
  return s
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014\u2212]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractStrings(content) {
  const rx = /(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g;
  const values = [];
  let m;
  while ((m = rx.exec(content)) !== null) {
    const raw = m[2]
      .replace(/\\n/g, ' ')
      .replace(/\\r/g, ' ')
      .replace(/\\t/g, ' ')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\`/g, '`');
    const s = norm(raw);
    if (!s) continue;
    if (s.length < 4) continue;
    if (/^(bg-|text-|from-|to-|via-|w-|h-|p-|m-|z-|rounded|shadow|border|flex|grid|min-|max-|dark:)/.test(s)) continue;
    if (s.startsWith('/')) continue;
    if (s.startsWith('http')) continue;
    if (/^[0-9+%./*-]+$/.test(s)) continue;
    if (/^[A-Za-z0-9_-]+\.(svg|png|jpg|jpeg|webp)$/.test(s)) continue;
    if (/^[A-Z][a-z]?\d*$/.test(s)) continue;
    if (/^(use client|Languages|Frameworks|Backend|Frontend|DevOps|Testing|Databases|Cloud & DevOps|Cloud Platforms|Cloud & Infrastructure|Monitoring|WordPress Core|Themes & Builders|eCommerce|CMS|Development|Data & Analytics|IoT & AR|Our Work|What We Offer|What We Deliver|Our Development Process)$/.test(s)) continue;
    values.push(s);
  }
  return [...new Set(values)];
}

const dataFiles = walk(servicesRoot);
const dicts = {};
for (const loc of locales) {
  const obj = JSON.parse(fs.readFileSync(path.join(localeRoot, loc + '.json'), 'utf8'));
  const map = new Map();
  for (const [k, v] of Object.entries(obj)) map.set(norm(k), v);
  dicts[loc] = map;
}

const report = [];
for (const file of dataFiles) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const strings = extractStrings(fs.readFileSync(file, 'utf8'));
  const misses = {};
  let hasAny = false;
  for (const loc of locales) {
    const missing = strings.filter((s) => !dicts[loc].has(norm(s)));
    if (missing.length) {
      misses[loc] = missing;
      hasAny = true;
    }
  }
  if (hasAny) report.push({ file: rel, misses });
}

report.sort((a,b)=>a.file.localeCompare(b.file));
for (const item of report) {
  console.log('\n# ' + item.file);
  for (const loc of locales) {
    const arr = item.misses[loc] || [];
    console.log('  [' + loc + '] missing: ' + arr.length);
  }
}

const totals = locales.map((loc) => {
  let n = 0;
  for (const item of report) n += (item.misses[loc] || []).length;
  return [loc, n];
});
console.log('\nTOTALS');
for (const [loc, n] of totals) console.log('  ' + loc + ': ' + n);

const top = report.slice(0, 8);
console.log('\nSAMPLE_MISSING_STRINGS');
for (const item of top) {
  console.log('\n- ' + item.file);
  const arr = item.misses.hi || [];
  for (const s of arr.slice(0, 4)) console.log('    * ' + s);
}
