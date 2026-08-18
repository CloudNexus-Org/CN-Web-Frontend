"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Loader2, AlertCircle, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
// import { Fingerprint, KeyRound } from "lucide-react"; // 2FA icons — commented out
import Link from "next/link";
import Image from "next/image";
import { useAdminAuth } from "@/lib/admin-auth-context";

function FloatingParticle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#4EB3E8]"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
      animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1], scale: [1, 1.3, 1] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  // const { login, verify2FA } = useAdminAuth(); // 2FA — commented out
  const router = useRouter();

  // const [step, setStep] = useState<"credentials" | "otp">("credentials"); // 2FA step — commented out
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [challengeId, setChallengeId] = useState(""); // 2FA — commented out
  // const [otpCode, setOtpCode] = useState(""); // 2FA — commented out
  // const [devCode, setDevCode] = useState(""); // 2FA — commented out
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      router.replace("/admin");
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { error?: string } } }).response?.data?.error
        : undefined;
      setError(msg || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── 2FA verify handler — commented out ──────────────────────────────────────
  // const handleVerify = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   try {
  //     await verify2FA(challengeId, otpCode);
  //     router.replace("/admin");
  //   } catch (err: unknown) {
  //     const msg = err && typeof err === "object" && "response" in err
  //       ? (err as { response?: { data?: { error?: string } } }).response?.data?.error
  //       : undefined;
  //     setError(msg || "Invalid OTP code. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // ────────────────────────────────────────────────────────────────────────────

  const inputCls = "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] px-4 py-3.5 pl-12 text-sm outline-none focus:border-[#4EB3E8] focus:ring-2 focus:ring-[#4EB3E8]/15 transition-all duration-300 placeholder:text-black/30 dark:placeholder:text-white/25";

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 3,
  }));

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex bg-[#fafafa] dark:bg-[#050505]">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[50%] relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#091420]">
        <div className="absolute inset-0">
          {particles.map((p) => (
            <FloatingParticle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
          ))}
        </div>

        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(78,179,232,0.08) 0%, transparent 60%)" }} />

        <div className="relative z-10 flex flex-col justify-center px-14 xl:px-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="relative w-[140px] h-[40px]">
                <Image src="/asset/cn-logo.png" alt="Cloud Nexus" fill className="object-contain [filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]" sizes="140px" />
              </div>
            </div>
            <div className="text-white/30 text-[10px] font-semibold tracking-[0.15em] uppercase mb-4">Admin Portal</div>

            <h2 className="text-4xl xl:text-5xl font-black text-white leading-[1.15] tracking-tight mb-5">
              Manage Your<br />
              <span className="text-[#4EB3E8]">Digital Empire</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Access your admin dashboard to manage content, monitor analytics, and control every aspect of your platform.
            </p>

            <div className="mt-12 flex items-center gap-8">
              {[
                { value: "180+", label: "Pages" },
                { value: "20+", label: "Services" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-[10px] text-white/30 font-semibold tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-14 xl:left-20 flex items-center gap-2 text-white/20 text-[10px] tracking-wider"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4EB3E8]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <motion.div
          className="w-full max-w-[400px] relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-10">
            <div className="relative w-[160px] h-[45px] mx-auto mb-2">
              <Image src="/asset/cn-logo.png" alt="Cloud Nexus" fill className="object-contain [filter:saturate(1.6)_hue-rotate(-12deg)_brightness(0.7)_contrast(1.15)] dark:[filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]" sizes="160px" />
            </div>
            <p className="text-[10px] text-black/30 dark:text-white/25 font-semibold tracking-[0.15em] uppercase">Admin Portal</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#4EB3E8]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#4EB3E8]" />
                {/* 2FA icon removed — was conditionally showing Fingerprint */}
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Welcome back</h1>
                <p className="text-xs text-black/40 dark:text-white/35">Sign in to your admin account</p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/15 bg-red-500/[0.04] px-4 py-3 text-xs text-red-600 dark:text-red-400"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Credentials form only — OTP step commented out */}
          <motion.form
            onSubmit={handleLogin}
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block text-xs font-semibold mb-2 text-black/60 dark:text-white/50">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 dark:text-white/20 group-focus-within:text-[#4EB3E8] transition-colors" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@cloudnexus.com" className={inputCls} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-black/60 dark:text-white/50">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 dark:text-white/20 group-focus-within:text-[#4EB3E8] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className={`${inputCls} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20 hover:text-black/50 dark:hover:text-white/50 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-all duration-300 disabled:opacity-60 shadow-lg shadow-[#4EB3E8]/20 hover:shadow-xl hover:shadow-[#4EB3E8]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </motion.form>

          {/* ── 2FA / OTP step — commented out ─────────────────────────────────────
          <motion.form
            key="otp"
            onSubmit={handleVerify}
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-4 p-4 rounded-xl bg-[#4EB3E8]/[0.04] border border-[#4EB3E8]/10">
              <p className="text-xs text-black/50 dark:text-white/40">
                A 6-digit code was sent to
              </p>
              <p className="text-sm font-semibold text-black/80 dark:text-white/70 mt-0.5">{email}</p>
              {devCode && (
                <div className="mt-3 text-xs text-amber-600 dark:text-amber-400 bg-amber-500/5 border border-amber-500/20 rounded-lg px-3 py-2 inline-block">
                  Dev code: <span className="font-mono font-bold text-sm">{devCode}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-black/60 dark:text-white/50">Verification Code</label>
              <div className="relative group">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 dark:text-white/20 group-focus-within:text-[#4EB3E8] transition-colors" />
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  required
                  placeholder="000000"
                  maxLength={6}
                  autoFocus
                  className={`${inputCls} text-center tracking-[0.4em] font-mono text-lg`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || otpCode.length < 6}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-all duration-300 disabled:opacity-60 shadow-lg shadow-[#4EB3E8]/20 hover:shadow-xl hover:shadow-[#4EB3E8]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Verify & Sign In <ArrowRight className="w-4 h-4" /></>}
            </button>

            <button
              type="button"
              onClick={() => { setStep("credentials"); setError(""); }}
              className="w-full text-xs text-black/35 dark:text-white/30 hover:text-[#4EB3E8] transition-colors text-center py-2"
            >
              ← Back to login
            </button>
          </motion.form>
          ── end 2FA step ────────────────────────────────────────────────────── */}

          <div className="mt-8 text-center text-[10px] text-black/20 dark:text-white/15 space-x-4">
            {/* <span>Protected by 2FA</span>
            <span>·</span> */}
            <span>256-bit encryption</span>
            <span>·</span>
            <span>SOC 2 compliant</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
