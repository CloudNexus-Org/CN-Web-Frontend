"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  Loader2,
  AlertCircle,
  Mail,
  Lock,
  User,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import apiClient from "@/lib/api/axios"
import { ENDPOINTS } from "@/lib/api/endpoints"

function FloatingOrb({
  delay,
  x,
  y,
  size,
}: {
  delay: number
  x: number
  y: number
  size: number
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#4EB3E8]"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -25, 0],
        opacity: [0.08, 0.25, 0.08],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

export default function AdminSignupPage() {
  const router = useRouter()

  const [step, setStep] = useState<"register" | "otp">("register")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [challengeId, setChallengeId] = useState("")
  const [otpCode, setOtpCode] = useState("")
  const [devCode, setDevCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const passwordStrength =
    password.length === 0
      ? 0
      : password.length < 8
        ? 1
        : password.length < 10
          ? 2
          : 3
  const strengthLabels = ["", "Weak", "Medium", "Strong"]
  const strengthColors = ["", "#ef4444", "#f59e0b", "#22c55e"]

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      )
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await apiClient.post(ENDPOINTS.AUTH.ADMIN_SIGNUP, {
        name,
        email,
        password,
      })
      setChallengeId(res.data.challengeId)
      if (res.data.devCode) setDevCode(res.data.devCode)
      setStep("otp")
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error
          : undefined
      setError(msg || "Signup failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await apiClient.post(ENDPOINTS.AUTH.ADMIN_VERIFY_2FA, {
        challengeId,
        code: otpCode,
      })
      if (res.data.token && typeof window !== "undefined") {
        localStorage.setItem("admin_token", res.data.token)
      }
      router.replace("/admin")
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error
          : undefined
      setError(msg || "Invalid OTP code. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const inputCls =
    "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] px-4 py-3.5 pl-12 text-sm outline-none focus:border-[#4EB3E8] focus:ring-2 focus:ring-[#4EB3E8]/15 transition-all duration-300 placeholder:text-black/30 dark:placeholder:text-white/25"

  const orbs = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 5,
    delay: Math.random() * 4,
  }))

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#fafafa] dark:bg-[#050505]">
      {/* Left Panel - Branding */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#091420] lg:flex lg:w-[45%] xl:w-[50%]">
        <div className="absolute inset-0">
          {orbs.map((o) => (
            <FloatingOrb
              key={o.id}
              delay={o.delay}
              x={o.x}
              y={o.y}
              size={o.size}
            />
          ))}
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(78,179,232,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 flex w-full flex-col justify-center px-14 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-10 flex items-center gap-3">
              <div className="relative h-[40px] w-[140px]">
                <Image
                  src="/asset/cn-logo.png"
                  alt="Cloud Nexus"
                  fill
                  className="object-contain [filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]"
                  sizes="140px"
                />
              </div>
            </div>
            <div className="mb-4 text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">
              Admin Portal
            </div>

            <h2 className="mb-5 text-4xl leading-[1.15] font-black tracking-tight text-white xl:text-5xl">
              Join The
              <br />
              <span className="text-[#4EB3E8]">Command Center</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/40">
              Create your admin account to manage content, monitor performance,
              and drive your platform forward.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { icon: Shield, text: "Enterprise-grade security with 2FA" },
                { icon: Sparkles, text: "Full content management suite" },
                { icon: CheckCircle2, text: "Real-time analytics dashboard" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.05]">
                      <Icon
                        className="h-4 w-4 text-[#4EB3E8]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-xs font-medium text-white/45">
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-14 flex items-center gap-2 text-[10px] tracking-wider text-white/20 xl:left-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            All systems operational
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="relative flex flex-1 items-center justify-center px-6 py-12">
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#4EB3E8]/[0.03] blur-3xl" />

        <motion.div
          className="relative w-full max-w-[400px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mobile Logo */}
          <div className="mb-10 text-center lg:hidden">
            <div className="relative mx-auto mb-2 h-[45px] w-[160px]">
              <Image
                src="/asset/cn-logo.png"
                alt="Cloud Nexus"
                fill
                className="object-contain [filter:saturate(1.6)_hue-rotate(-12deg)_brightness(0.7)_contrast(1.15)] dark:[filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]"
                sizes="160px"
              />
            </div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-black/30 uppercase dark:text-white/25">
              Admin Portal
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">
              {step === "register" ? "Create account" : "Verify identity"}
            </h1>
            <p className="mt-1 text-xs text-black/40 dark:text-white/35">
              {step === "register"
                ? "Set up your admin credentials"
                : "Enter the code to complete signup"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/15 bg-red-500/[0.04] px-4 py-3 text-xs text-red-600 dark:text-red-400"
              >
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {step === "register" ? (
              <motion.form
                key="register"
                onSubmit={handleSignup}
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/60 dark:text-white/50">
                    Full Name
                  </label>
                  <div className="group relative">
                    <User className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-black/20 transition-colors group-focus-within:text-[#4EB3E8] dark:text-white/20" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="John Doe"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/60 dark:text-white/50">
                    Email Address
                  </label>
                  <div className="group relative">
                    <Mail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-black/20 transition-colors group-focus-within:text-[#4EB3E8] dark:text-white/20" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="admin@cloudnexus.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/60 dark:text-white/50">
                    Password
                  </label>
                  <div className="group relative">
                    <Lock className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-black/20 transition-colors group-focus-within:text-[#4EB3E8] dark:text-white/20" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      placeholder="Min 6 characters"
                      className={`${inputCls} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-black/20 transition-colors hover:text-black/50 dark:text-white/20 dark:hover:text-white/50"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {password.length > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex flex-1 gap-1">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className="h-1 flex-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor:
                                passwordStrength >= level
                                  ? strengthColors[passwordStrength]
                                  : "rgba(0,0,0,0.06)",
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="text-[10px] font-semibold"
                        style={{ color: strengthColors[passwordStrength] }}
                      >
                        {strengthLabels[passwordStrength]}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4EB3E8] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4EB3E8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3da0d5] hover:shadow-xl hover:shadow-[#4EB3E8]/30 active:translate-y-0 disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Create Account <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <div className="relative my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-black/[0.06] dark:border-white/[0.06]" />
                  </div>
                  <div className="relative flex justify-center text-[10px] tracking-widest uppercase">
                    <span className="bg-[#fafafa] px-3 font-semibold text-black/25 dark:bg-[#050505] dark:text-white/20">
                      or
                    </span>
                  </div>
                </div>

                <p className="text-center text-xs text-black/35 dark:text-white/30">
                  Already have an account?{" "}
                  <Link
                    href="/admin/login"
                    className="font-semibold text-[#4EB3E8] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </motion.form>
            ) : (
              <motion.form
                key="otp"
                onSubmit={handleVerify}
                className="space-y-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 rounded-xl border border-[#4EB3E8]/10 bg-[#4EB3E8]/[0.04] p-4 text-center">
                  <p className="text-xs text-black/50 dark:text-white/40">
                    A 6-digit code was sent to
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-black/80 dark:text-white/70">
                    {email}
                  </p>
                  {devCode && (
                    <div className="mt-3 inline-block rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-600 dark:text-amber-400">
                      Dev code:{" "}
                      <span className="font-mono text-sm font-bold">
                        {devCode}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/60 dark:text-white/50">
                    Verification Code
                  </label>
                  <div className="group relative">
                    <KeyRound className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-black/20 transition-colors group-focus-within:text-[#4EB3E8] dark:text-white/20" />
                    <input
                      type="text"
                      value={otpCode}
                      onChange={(e) =>
                        setOtpCode(
                          e.target.value.replace(/\D/g, "").slice(0, 6)
                        )
                      }
                      required
                      placeholder="000000"
                      maxLength={6}
                      autoFocus
                      className={`${inputCls} text-center font-mono text-lg tracking-[0.4em]`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || otpCode.length < 6}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4EB3E8] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4EB3E8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3da0d5] hover:shadow-xl hover:shadow-[#4EB3E8]/30 active:translate-y-0 disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Verify & Continue <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("register")
                    setError("")
                  }}
                  className="w-full py-2 text-center text-xs text-black/35 transition-colors hover:text-[#4EB3E8] dark:text-white/30"
                >
                  ← Back to signup
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="mt-8 space-x-4 text-center text-[10px] text-black/20 dark:text-white/15">
            <span>Protected by 2FA</span>
            <span>·</span>
            <span>256-bit encryption</span>
            <span>·</span>
            <span>SOC 2 compliant</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
