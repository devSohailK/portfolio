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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded"></div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={containerVariants} className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-[#140f23]"></div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 mt-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Key Responsibilities:
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-slate-600 dark:text-slate-400 flex items-start gap-3"
                        >
                          <span className="text-blue-600 mt-1">→</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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
