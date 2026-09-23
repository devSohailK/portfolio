"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
              Let&apos;s build something <span className="text-purple-400">together</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-sans">
              Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-mono text-white mb-4">
                  Get in touch
                </h3>
                <p className="text-slate-300 leading-relaxed font-sans mb-8">
                  I&apos;m always interested in hearing about new projects, technical challenges, and opportunities. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods Cards with Framer Motion Hover & Neon Shadow */}
              <div className="space-y-5">
                {/* Email Card */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 group-hover:bg-purple-900/70 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider font-mono">Email</p>
                    <p className="text-base text-white font-medium mt-0.5">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 group-hover:bg-purple-900/70 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider font-mono">Phone</p>
                    <p className="text-base text-white font-medium mt-0.5">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-4 font-mono">
                  Also on social media:
                </p>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900/60 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900/60 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={19} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 sm:p-8 rounded-xl bg-slate-900/50 backdrop-blur border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.55)] transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-950/60 backdrop-blur border border-purple-900/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-sans"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-950/60 backdrop-blur border border-purple-900/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-sans"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-mono text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-950/60 backdrop-blur border border-purple-900/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-sans"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 bg-slate-950/60 backdrop-blur border border-purple-900/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none font-sans"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold hover:shadow-[0_0_22px_rgba(168,85,247,0.22)] disabled:bg-green-600 transition-all cursor-pointer font-mono text-sm"
                >
                  {submitted ? (
                    <>✓ Message sent!</>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
