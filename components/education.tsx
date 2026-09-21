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
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded"></div>
          </motion.div>

          {/* Education Cards */}
          <motion.div variants={containerVariants} className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 p-8 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {edu.institution}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {edu.startYear} – {edu.endYear}
                      </span>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        CGPA: {edu.gpa}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
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
