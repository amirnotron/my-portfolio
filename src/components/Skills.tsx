"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { FaJava, FaNetworkWired } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: SiIcons.SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiIcons.SiCss, color: "#1572B6" },
  { name: "Tailwind", icon: SiIcons.SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiIcons.SiBootstrap, color: "#7952B3" },
  { name: "JavaScript", icon: SiIcons.SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiIcons.SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiIcons.SiReact, color: "#61DAFB" },
  { name: "Express.js", icon: SiIcons.SiExpress, color: "#ffffff" },
  { name: "Node.js", icon: SiIcons.SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiIcons.SiPython, color: "#3776AB" },
  { name: "Scripting", icon: VscTerminalBash, color: "#4EAA25" },
  { name: "C#", icon: SiIcons.SiSharp, color: "#239120" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Network+", icon: FaNetworkWired, color: "#0055A5" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Tech Arsenal
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass w-28 h-28 sm:w-32 sm:h-32 rounded-2xl flex flex-col items-center justify-center p-4 gap-3 cursor-pointer group"
            >
              <skill.icon size={40} style={{ color: skill.color }} className="group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300" />
              <span className="text-xs font-medium text-gray-300 text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}