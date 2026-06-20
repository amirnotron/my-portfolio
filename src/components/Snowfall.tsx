"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const NUM_FLAKES = 100; // Number of snowflakes

// Generates an array of flake data with random properties
const generateFlakes = () => {
  return Array.from({ length: NUM_FLAKES }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage of screen width
    size: Math.random() * 3 + 1, // 1px to 4px
    opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 opacity
    duration: Math.random() * 5 + 3, // 3s to 8s for one full fall
    delay: Math.random() * 10, // Stagger starting times
  }));
};

export default function Snowfall() {
  const flakes = useMemo(() => generateFlakes(), []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {flakes.map((flake) => (
        <motion.span
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
          initial={{ y: -50 }}
          animate={{
            y: "110vh", // fall past the screen height
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}