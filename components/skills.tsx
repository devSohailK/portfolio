"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK, TOOLS, SkillItem } from "@/lib/skills";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiNextdotjs,
  SiGit,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiPostman,
  SiApachekafka,
  SiGooglechrome,
  SiIntellijidea,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; color?: string; className?: string }>
> = {
  Cplusplus: SiCplusplus,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  Nodedotjs: SiNodedotjs,
  React: SiReact,
  Mongodb: SiMongodb,
  Nextdotjs: SiNextdotjs,
  Git: SiGit,
  Firebase: SiFirebase,
  Redis: SiRedis,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Postgresql: SiPostgresql,
  Python: SiPython,
  Java: FaJava,
  Tailwind: SiTailwindcss,
  Postman: SiPostman,
  AWS: FaAws,
  Kafka: SiApachekafka,
  Chrome: SiGooglechrome,
  VsCode: TbBrandVscode,
  IntelliJ: SiIntellijidea,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
};

function SkillPill({ item }: { item: SkillItem }) {
  const IconComponent = iconMap[item.iconKey];

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.07, y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0d091b]/85 border-[1.5px] border-[#9333ea]/70 hover:border-purple-400 backdrop-blur-md shadow-[0_0_12px_rgba(147,51,234,0.22)] hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] hover:bg-[#180f33]/90 transition-all duration-300 cursor-pointer select-none"
    >
      <div className="flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {IconComponent ? (
          <IconComponent size={22} color={item.color} />
        ) : (
          <span className="w-5 h-5 rounded-full bg-purple-500/30" />
        )}
      </div>
      <span className="text-white font-mono text-sm sm:text-base font-medium tracking-wide whitespace-nowrap">
        {item.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Professional Skillset */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-wide text-white"
          >
            Professional{" "}
            <span className="text-purple-400">
              Skillset
            </span>
          </motion.h2>
        </div>

        {/* Tech Stack Pills Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto pb-16 md:pb-24"
        >
          {TECH_STACK.map((item) => (
            <SkillPill key={item.name} item={item} />
          ))}
        </motion.div>

        {/* Section 2: Tools I use */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-wide text-white"
          >
            <span className="text-purple-400">
              Tools
            </span>{" "}
            I use
          </motion.h2>
        </div>

        {/* Tools Pills Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 max-w-3xl mx-auto"
        >
          {TOOLS.map((item) => (
            <SkillPill key={item.name} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
