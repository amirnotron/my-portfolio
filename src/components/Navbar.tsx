"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-30 glass border-b-0 border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wider text-white cursor-pointer" onClick={() => scrollToSection("hero")}>
          NOTRON<span className="text-accent">.</span>
        </span>
        <div className="flex gap-6 text-sm font-medium">
          <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">About</button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-accent transition-colors">Skills</button>
          <button onClick={() => scrollToSection("interests")} className="hover:text-accent transition-colors">Interests</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-accent transition-colors">Contact</button>
        </div>
      </div>
    </motion.nav>
  );
}