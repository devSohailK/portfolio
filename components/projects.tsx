"use client";

import { PROJECTS } from "@/lib/projects";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400 rounded"></div>
          </motion.div>

          {/* Projects Grid with Framer Motion Hover & Neon Shadow */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-slate-900/50 backdrop-blur rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Project Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category Badge */}
                  <div className="inline-block">
                    <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/40 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-mono text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-slate-300 flex items-start gap-2 font-sans"
                        >
                          <span className="text-purple-400 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-purple-950/40 text-purple-300 rounded-full font-medium border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links Footer */}
                <div className="p-6 pt-0">
                  <div className="flex gap-3 pt-4 border-t border-purple-900/30">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold hover:shadow-[0_0_18px_rgba(168,85,247,0.22)] transition-all flex-1 justify-center text-sm"
                    >
                      View Details <ArrowRight size={18} />
                    </Link>
                    {project.links.github && (
                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-slate-300 hover:text-purple-300 border border-purple-500/30 hover:border-purple-400 rounded-lg transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-slate-300 hover:text-purple-300 border border-purple-500/30 hover:border-purple-400 rounded-lg transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
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
