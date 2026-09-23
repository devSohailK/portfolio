"use client";

import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-white">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300">
                Sohail Khan
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-4xl font-semibold font-mono text-slate-300">
              {PERSONAL_INFO.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons with Framer Motion Hover & Neon Shadow */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all font-mono text-sm"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900/60 backdrop-blur border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] text-white rounded-xl font-semibold transition-all font-mono text-sm"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com/devSohailK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900/40 backdrop-blur border border-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] text-slate-300 hover:text-white rounded-xl font-semibold transition-all font-mono text-sm"
            >
              <FaGithub size={18} /> GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
