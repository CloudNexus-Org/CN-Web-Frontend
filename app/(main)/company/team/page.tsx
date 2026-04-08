"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Arhan Mansoori", role: "Founder & CEO", image: "/team/arhan-mansoori.jpeg" },
  { name: "Gaurav Tiwari", role: "Co-Founder & CTO", image: "/team/gaurav-tiwari.jpeg" },
  { name: "Ariba", role: "Lead Designer", image: "/team/ariba.jpeg" },
];

export default function TeamPage() {
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-semibold tracking-tight sm:text-5xl text-foreground">
          Our Team
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          Meet the talented people behind Cloud Nexus.
        </motion.p>
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
