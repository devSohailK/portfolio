"use client";

import { EXPERIENCES } from "@/lib/experience";
import { motion } from "framer-motion";

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-transparent">
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
              Work <span className="text-purple-400">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400 rounded"></div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={containerVariants} className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-purple-500/50"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-11px] top-4 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#140f23] shadow-[0_0_12px_rgba(168,85,247,0.9)]"></div>

                {/* Card Container with Framer Motion Hover & Neon Shadow */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-slate-900/50 backdrop-blur p-6 sm:p-7 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold font-mono text-white">
                      {exp.position}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/40 w-fit font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-purple-400 mb-3">
                    {exp.company}
                  </p>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-purple-300 font-mono">
                      Key Responsibilities & Achievements:
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-300 flex items-start gap-2 font-sans"
                        >
                          <span className="text-purple-400 mt-1 font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
