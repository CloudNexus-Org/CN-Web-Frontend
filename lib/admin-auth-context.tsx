"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  adminLogin as apiAdminLogin,
  // adminVerify2FA as apiAdminVerify2FA, // 2FA — commented out
  getAdminProfile,
  type AdminLoginResponse,
  // type AdminVerify2FAResponse, // 2FA — commented out
} from "@/lib/api/services/admin.service";

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AdminAuthState {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AdminLoginResponse>;
  // verify2FA: (challengeId: string, code: string) => Promise<AdminVerify2FAResponse>; // 2FA — commented out
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthState | null>(null);

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}

const TOKEN_KEY = "admin_token";
const PUBLIC_PATHS = ["/admin/login", "/admin/signup"];

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const safeRedirect = useCallback((path: string) => {
    if (!PUBLIC_PATHS.includes(pathname)) {
      setTimeout(() => {
        if (mounted.current) router.replace(path);
      }, 0);
    }
  }, [pathname, router]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      safeRedirect("/admin/login");
      return;
    }
    getAdminProfile()
      .then((u) => { if (mounted.current) setUser(u); })
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        safeRedirect("/admin/login");
      })
      .finally(() => { if (mounted.current) setLoading(false); });
  }, [safeRedirect]);

  // Login now directly stores the token — no 2FA step
  const login = useCallback(async (email: string, password: string) => {
    const res = await apiAdminLogin(email, password);
    // Store token immediately (2FA skipped)
    if (res.token && typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, res.token);
    }
    if (res.user) setUser(res.user);
    return res;
  }, []);

  // ── 2FA verify — commented out ───────────────────────────────────────────────
  // const verify2FA = useCallback(async (challengeId: string, code: string) => {
  //   const res = await apiAdminVerify2FA(challengeId, code);
  //   setUser(res.user);
  //   return res;
  // }, []);
  // ────────────────────────────────────────────────────────────────────────────

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setTimeout(() => router.replace("/admin/login"), 0);
  }, [router]);

  return (
    <AdminAuthContext.Provider value={{ user, loading, login, logout }}>
      {/* verify2FA removed from value — 2FA commented out */}
      {children}
    </AdminAuthContext.Provider>
  );
}
