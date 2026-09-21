"use client";

import { Project } from "@/lib/projects";
import { Code2, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants}>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-block">
          <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/40 rounded-full">
            {project.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-mono text-white">
          {project.title}
        </h1>
        <p className="text-xl text-slate-300 font-sans">
          {project.fullDescription}
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Problem Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/50 backdrop-blur border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300 space-y-3"
          >
            <h2 className="text-2xl font-bold font-mono text-white">
              The Problem
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/50 backdrop-blur border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300 space-y-3"
          >
            <h2 className="text-2xl font-bold font-mono text-white">
              The Solution
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans">
              {project.solution}
            </p>
          </motion.div>

          {/* Contribution Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/50 backdrop-blur border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300 space-y-3"
          >
            <h2 className="text-2xl font-bold font-mono text-white">
              My Contribution
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans">
              {project.contribution}
            </p>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300"
          >
            <h3 className="text-xl font-bold font-mono text-white mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-purple-950/40 text-purple-300 rounded-full border border-purple-500/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Features Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300"
          >
            <h3 className="text-xl font-bold font-mono text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-slate-300 flex items-start gap-2 text-sm font-sans"
                >
                  <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links Card */}
          <motion.div variants={itemVariants} className="space-y-3">
            {project.links.github && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-950/60 text-purple-300 border border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-xl font-semibold transition-all"
              >
                <Code2 size={20} /> View on GitHub
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_22px_rgba(168,85,247,0.7)] transition-all"
              >
                <ExternalLink size={20} /> Live Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
