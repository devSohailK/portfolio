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
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-block">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
            {project.category}
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          {project.fullDescription}
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Problem */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              The Problem
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              The Solution
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>

          {/* Contribution */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              My Contribution
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.contribution}
            </p>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Technologies */}
          <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-800/80 text-slate-300 rounded-full border border-slate-700/50 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-blue-600 flex-shrink-0 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="space-y-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                <Code2 size={20} /> View on GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
