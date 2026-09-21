"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function About() {
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
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded"></div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {PERSONAL_INFO.about.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Foundations
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Data Structures & Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Object-Oriented Programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Database Systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Expertise
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Full-Stack Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>REST APIs & Authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>AI API Integration & RAG</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
