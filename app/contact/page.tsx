"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, User, Loader2, CheckCircle2 } from "lucide-react";
import { createLead, Lead } from "@/services/leadService";

const AnimatedSection = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "",
    isCompany: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const leadData: Lead = {
      contactPerson: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      notes: formData.message,
      companyName: formData.isCompany ? formData.company : "Individual",
      source: "Contact Form",
      status: "New"
    };

    try {
      await createLead(leadData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        company: "",
        isCompany: false
      });
    } catch (err) {
      console.error("Error creating lead:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 rounded-2xl border border-border/50 bg-muted/30 backdrop-blur-xl text-center"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif font-normal mb-4">Message Sent!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="w-full py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-all font-serif"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://resend.com/static/cube.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-8xl md:text-9xl font-serif font-normal tracking-tight mb-8">
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              We&apos;re here to help you scale your cloud infrastructure and accelerate your growth. Let&apos;s build something together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-serif font-normal mb-8">Get in touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email us at</p>
                      <p className="text-lg font-medium">hello@cloudnexus.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Call us at</p>
                      <p className="text-lg font-medium">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Visit our office</p>
                      <p className="text-lg font-medium leading-relaxed">
                        123 Cloud Avenue, Tech District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="p-8 rounded-2xl border border-border/50 bg-muted/30 backdrop-blur-xl">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  Live Chat Support
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our support team is available 24/7 to handle critical incidents and help with your infrastructure needs.
                </p>
                <button className="text-sm font-medium underline underline-offset-4 hover:text-accent transition-colors">
                  Open Chat Room
                </button>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" /> Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Send className="w-4 h-4 text-muted-foreground" /> Subject
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Cloud Consulting"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div 
                      className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
                        formData.isCompany ? 'bg-foreground border-foreground' : 'border-border group-hover:border-foreground/50'
                      }`}
                      onClick={() => setFormData({ ...formData, isCompany: !formData.isCompany })}
                    >
                      {formData.isCompany && <CheckCircle2 className="w-3.5 h-3.5 text-background" />}
                    </div>
                    <span className="text-sm font-medium">I&apos;m representing a company</span>
                  </label>

                  {formData.isCompany && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground" /> Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="Cloud Nexus Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 font-serif text-lg"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
