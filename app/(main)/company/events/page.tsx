"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  { title: "Cloud Nexus Tech Meetup", date: "Apr 15, 2026", time: "6:00 PM IST", location: "Virtual", type: "Meetup" },
  { title: "AI & Cloud Summit 2026", date: "May 10, 2026", time: "10:00 AM IST", location: "Bengaluru, India", type: "Conference" },
  { title: "DevOps Workshop: CI/CD Mastery", date: "May 25, 2026", time: "2:00 PM IST", location: "Virtual", type: "Workshop" },
  { title: "Hackathon: Build the Future", date: "Jun 8, 2026", time: "9:00 AM IST", location: "Virtual", type: "Hackathon" },
  { title: "Webinar: Scaling SaaS Platforms", date: "Jun 20, 2026", time: "4:00 PM IST", location: "Virtual", type: "Webinar" },
];

export default function EventsPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
          Events
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          Join us at upcoming meetups, webinars, conferences, and hackathons.
        </motion.p>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-24 lg:px-8 space-y-4">
        {events.map((event, i) => (
          <motion.div key={event.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 dark:border-white/[0.08] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">{event.type}</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-black/45 dark:text-white/45">
              <span className="flex items-center gap-1"><Calendar size={14} />{event.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{event.time}</span>
              <span className="flex items-center gap-1"><MapPin size={14} />{event.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
