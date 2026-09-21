"use client";

import { Code2, Briefcase, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#140f23]/95 backdrop-blur border-t border-purple-900/30 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold font-mono text-white mb-3">Sohail Khan</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Full-Stack Software Engineer building modern web and AI-powered applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-mono text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold font-mono text-white mb-3">Connect</h3>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-slate-900/60 border border-purple-500/30 rounded-xl text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/60 border border-purple-500/30 rounded-xl text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
                aria-label="GitHub"
              >
                <Code2 size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/60 border border-purple-500/30 rounded-xl text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
                aria-label="LinkedIn"
              >
                <Briefcase size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-900/30 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400 font-mono">
          <p>&copy; {currentYear} Sohail Khan. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed & Built with React & Next.js</p>
        </div>
      </div>
    </footer>
  );
}
