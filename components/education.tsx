"use client";

import { EDUCATION } from "@/lib/education";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-2">
              Education & <span className="text-purple-400">Academics</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400 rounded"></div>
          </motion.div>

          {/* Education Cards with Framer Motion Hover & Neon Shadow */}
          <motion.div variants={containerVariants} className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-slate-900/50 backdrop-blur p-6 sm:p-8 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                      <BookOpen className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-mono text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-lg font-semibold text-purple-300 mt-1">
                      {edu.institution}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
                      <span className="text-sm font-medium text-slate-400">
                        {edu.startYear} – {edu.endYear}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/40 w-fit">
                        CGPA: {edu.gpa}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="text-slate-300 mt-4 leading-relaxed font-sans text-base">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
