"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  adminLogin as apiAdminLogin,
  getAdminProfile,
  type AdminLoginResponse,
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

  const login = useCallback(async (email: string, password: string) => {
    const res = await apiAdminLogin(email, password);
    if (res.token && typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, res.token);
    }
    if (res.user) setUser(res.user);
    return res;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setTimeout(() => router.replace("/admin/login"), 0);
  }, [router]);

  return (
    <AdminAuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
