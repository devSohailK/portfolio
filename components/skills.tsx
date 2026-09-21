"use client";

import { SKILLS } from "@/lib/skills";
import {
  Code,
  Palette,
  Terminal,
  Zap,
  Server,
  Smartphone,
  GitBranch,
  Database,
  Globe,
  Brain,
  Cloud,
  Send,
  Box,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Palette: <Palette size={24} />,
  Terminal: <Terminal size={24} />,
  Zap: <Zap size={24} />,
  Server: <Server size={24} />,
  Smartphone: <Smartphone size={24} />,
  GitBranch: <GitBranch size={24} />,
  Database: <Database size={24} />,
  Globe: <Globe size={24} />,
  Brain: <Brain size={24} />,
  Cloud: <Cloud size={24} />,
  Send: <Send size={24} />,
  Box: <Box size={24} />,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              Skills & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded"></div>
          </motion.div>

          {/* Skills by Category */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={categoryVariants}
                className="bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-slate-800"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {skillGroup.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700/60 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group cursor-default"
                    >
                      <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {iconMap[skill.icon]}
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
