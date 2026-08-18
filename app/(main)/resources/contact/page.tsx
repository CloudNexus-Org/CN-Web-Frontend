"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail, MapPin, Phone, Send, Clock, CheckCircle2,
  ArrowRight, Building2, Globe, MessageSquare, Loader2, AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { submitContactForm } from "@/lib/api/services/contact.service";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import { useTranslation } from "@/lib/i18n/context";

const subjects = [
  "Mobile App Development",
  "Web Development",
  "Software Development",
  "Hire Dedicated Developers",
  "Product Engineering",
  "WordPress Development",
  "UI/UX Design",
  "Digital Transformation",
  "E-Commerce Development",
  "SaaS Development",
  "Digital Marketing",
  "Technology Consulting",
  "MVP Development",
  "Cloud Services",
  "IT Consulting",
  "Partnership Inquiry",
  "Career Opportunity",
  "General Inquiry",
  "Other",
];

const budgets = [
  "Less than $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "work@cloudnexus.in", href: "mailto:work@cloudnexus.in" },
  { icon: Phone, label: "Call Us", value: "+91 9201004208", href: "tel:+919201004208" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9 AM - 7 PM IST", href: null },
];

const offices = [
  { city: "Hyderabad", address: "Hitech City, Hyderabad, Telangana, India" },
  { city: "Bhopal", address: "Plot No 20, Kusturi Arched, Barrai, MP 462042" },
  { city: "Bengaluru", address: "2nd Stage, BTM Layout, Karnataka 560076" },
];

const heardFromOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "LinkedIn",
  "Clutch / GoodFirms",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const translatedSubjects = useTranslatedData(subjects);
  const translatedBudgets = useTranslatedData(budgets);
  const translatedContactInfo = useTranslatedData(contactInfo);
  const translatedOffices = useTranslatedData(offices);
  const translatedHeardFromOptions = useTranslatedData(heardFromOptions);
  const { t } = useTranslation();

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    interestedIn: "",
    estimatedBudget: "",
    projectDetails: "",
    heardFrom: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitContactForm({
        fullName: form.fullName,
        email: form.email,
        interestedIn: form.interestedIn,
        projectDetails: form.projectDetails,
        companyName: form.companyName || undefined,
        phone: form.phone || undefined,
        estimatedBudget: form.estimatedBudget || undefined,
        heardFrom: form.heardFrom || undefined,
      });
      setSubmitted(true);
      setForm({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        interestedIn: "",
        estimatedBudget: "",
        projectDetails: "",
        heardFrom: "",
      });
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response?.data?.message
          : undefined;
      setError(msg || t("contact.form.errorFallback", "Something went wrong. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#4EB3E8] focus:ring-1 focus:ring-[#4EB3E8]/20 transition-all duration-200 placeholder:text-black/30 dark:placeholder:text-white/25";

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-black/[0.05] dark:border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4EB3E8]/[0.03] blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#4EB3E8]/[0.02] blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 relative">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">{t("contact.hero.titleHighlight", "Let's Build")}</span>{" "}
              <span>{t("contact.hero.title", "Something Great")}</span>
            </h1>
            <p className="mt-4 text-base text-black/50 dark:text-white/45 leading-relaxed">
              {t("contact.hero.description", "Tell us about your project and we'll get back to you within 24 hours with a tailored plan and expert recommendations.")}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {[
              { num: t("contact.hero.responseTime", "< 24h"), label: t("contact.hero.responseTimeLabel", "Response Time") },
              { num: t("contact.hero.projectsNum", "100+"), label: t("contact.hero.projectsLabel", "Projects Delivered") },
              { num: t("contact.hero.satisfactionNum", "100%"), label: t("contact.hero.satisfactionLabel", "Client Satisfaction") },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-lg font-bold text-[#4EB3E8]">{s.num}</span>
                <span className="text-sm text-black/40 dark:text-white/35">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                  <CheckCircle2 className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t("contact.success.title", "Message Sent!")}</h3>
                <p className="text-black/50 dark:text-white/45 mb-6 max-w-sm mx-auto">
                  {t("contact.success.description", "Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.")}
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-xl border-black/10 dark:border-white/10"
                >
                  {t("contact.success.sendAnother", "Send Another Message")}
                </Button>
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-[#f8f9fa] dark:bg-[#0c1322] p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                    <MessageSquare className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{t("contact.form.title", "Tell Us About Your Project")}</h2>
                    <p className="text-xs text-black/40 dark:text-white/35">{t("contact.form.subtitle", "All fields marked with * are required")}</p>
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                        {t("contact.form.fullName", "Full Name")} <span className="text-[#4EB3E8]">*</span>
                      </label>
                      <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder={t("contact.form.fullNamePlaceholder", "John Doe")} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                        {t("contact.form.companyName", "Company Name")}
                      </label>
                      <input type="text" name="companyName" value={form.companyName} onChange={handleChange} placeholder={t("contact.form.companyPlaceholder", "Your company")} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                        {t("contact.form.email", "Email Address")} <span className="text-[#4EB3E8]">*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t("contact.form.emailPlaceholder", "john@company.com")} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                        {t("contact.form.phone", "Phone Number")}
                      </label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t("contact.form.phonePlaceholder", "+91 XXXXX XXXXX")} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                        {t("contact.form.interestedIn", "I'm Interested In")} <span className="text-[#4EB3E8]">*</span>
                      </label>
                      <select name="interestedIn" value={form.interestedIn} onChange={handleChange} required className={inputCls}>
                        <option value="" disabled>{t("contact.form.selectService", "Select a service")}</option>
                        {translatedSubjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                        {t("contact.form.budget", "Estimated Budget")}
                      </label>
                      <select name="estimatedBudget" value={form.estimatedBudget} onChange={handleChange} className={inputCls}>
                        <option value="" disabled>{t("contact.form.selectBudget", "Select budget range")}</option>
                        {translatedBudgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                      {t("contact.form.details", "Project Details")} <span className="text-[#4EB3E8]">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      value={form.projectDetails}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder={t("contact.form.detailsPlaceholder", "Tell us about your project, goals, timeline, and any specific requirements...")}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">
                      {t("contact.form.heardFrom", "How Did You Hear About Us?")}
                    </label>
                    <select name="heardFrom" value={form.heardFrom} onChange={handleChange} className={inputCls}>
                      <option value="" disabled>{t("contact.form.selectOption", "Select an option")}</option>
                      {translatedHeardFromOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 rounded-xl h-12 text-sm font-semibold shadow-lg transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("contact.form.sending", "Sending...")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.sendMessage", "Send Message")}
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-black/30 dark:text-white/25">
                    {t("contact.form.privacyNote", "By submitting, you agree to our privacy policy. We'll never share your data.")}
                  </p>
                </form>
              </div>
            )}
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {translatedContactInfo.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + 0.08 * i }}
                  className="group flex items-start gap-4 rounded-2xl p-5 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-0.5 group-hover:text-[#4EB3E8] transition-colors duration-300">{item.label}</h3>
                    <p className="text-sm text-black/50 dark:text-white/45">{item.value}</p>
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a key={i} href={item.href} className="block">{inner}</a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="rounded-2xl p-6 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold">{t("contact.offices.title", "Our Offices")}</h3>
              </div>
              <div className="space-y-3">
                {translatedOffices.map((o, i) => (
                  <div key={i} className="flex items-start gap-2.5 pl-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4EB3E8] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="text-xs font-semibold">{o.city}</span>
                      <p className="text-xs text-black/40 dark:text-white/35 leading-relaxed">{o.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="rounded-2xl p-6 bg-[#4EB3E8]/5 border border-[#4EB3E8]/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                <h3 className="text-sm font-bold">{t("contact.cta.title", "Prefer a Live Conversation?")}</h3>
              </div>
              <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed mb-4">
                {t("contact.cta.description", "Schedule a free 30-minute consultation call with our experts to discuss your project in detail.")}
              </p>
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4EB3E8] hover:gap-2.5 transition-all duration-300"
              >
                {t("contact.cta.bookConsultation", "Book Free Consultation")}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
