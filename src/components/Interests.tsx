"use client";

import { motion } from "framer-motion";

const singers = [
  { name: "Reza Pishro", highlight: true },
  { name: "Yas", highlight: false },
  { name: "Sorena", highlight: false },
  { name: "Naji", highlight: false },
  { name: "Mohammad Reza Shayea", highlight: false },
];

const games = [
  { name: "Minecraft", highlight: true },
  { name: "Valorant", highlight: false },
  { name: "Roblox", highlight: false },
  { name: "Among Us", highlight: false },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Favorites & Interests
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-white/10 pb-2">Music</h3>
            <div className="flex flex-wrap gap-4">
              {singers.map((singer, i) => (
                <motion.div
                  key={singer.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    singer.highlight
                      ? "bg-red-500/20 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.4)] text-white"
                      : "glass text-gray-400"
                  }`}
                >
                  {singer.name}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-white/10 pb-2">Gaming</h3>
            <div className="flex flex-wrap gap-4">
              {games.map((game, i) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                    game.highlight
                      ? "bg-green-500/20 border-2 border-green-400 shadow-[0_0_25px_rgba(74,222,128,0.5)] text-white pixelated-font"
                      : "glass text-gray-400"
                  }`}
                >
                  {game.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}