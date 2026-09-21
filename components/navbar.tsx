"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Moon,
  Sun,
  Code2,
  Briefcase,
  Home,
  User,
  Cpu,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

const navIcons: Record<string, React.ReactNode> = {
  Home: <Home size={17} className="stroke-[2.2]" />,
  About: <User size={17} className="stroke-[2.2]" />,
  Skills: <Cpu size={17} className="stroke-[2.2]" />,
  Experience: <Briefcase size={17} className="stroke-[2.2]" />,
  Projects: <FolderGit2 size={17} className="stroke-[2.2]" />,
  Education: <GraduationCap size={17} className="stroke-[2.2]" />,
  Contact: <Mail size={17} className="stroke-[2.2]" />,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#140f23]/85 backdrop-blur-md border-b border-purple-900/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              className="text-2xl font-bold font-mono tracking-wider text-white hover:text-purple-400 transition-colors"
            >
              SK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isUnderlined =
                hoveredPath === item.href ||
                (!hoveredPath && activeSection === item.href);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  onClick={() => setActiveSection(item.href)}
                  className="relative flex flex-col items-center px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    {navIcons[item.label] && (
                      <span className="transition-colors text-slate-400 group-hover:text-purple-300">
                        {navIcons[item.label]}
                      </span>
                    )}
                    <span>{item.label}</span>
                  </div>

                  {/* Neon under bar */}
                  {isUnderlined && (
                    <motion.div
                      layoutId="navbar-neon-underline"
                      className="absolute -bottom-1 left-2 right-2 h-[4px] rounded-full bg-purple-500"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side - Social Links and Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-1">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </motion.a>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-purple-500/20 hover:border-purple-500/40"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#140f23]/95 backdrop-blur-md border-t border-purple-900/30">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "text-white bg-purple-950/40 border-l-4 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                  onClick={() => {
                    setActiveSection(item.href);
                    setIsOpen(false);
                  }}
                >
                  {navIcons[item.label]}
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="px-3 py-3 flex gap-3 border-t border-purple-900/30 mt-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-purple-400"
              >
                <Code2 size={18} /> GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-purple-400"
              >
                <Briefcase size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
