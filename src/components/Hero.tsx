"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import Snowfall from "./Snowfall";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Hero() {
  const { data } = useSWR("https://api.lanyard.rest/v1/users/634488416771244076", fetcher, { refreshInterval: 5000 });
  const lanyard = data?.data;

  const discordStatusMap: { [key: string]: { text: string; color: string } } = {
    online: { text: "Online", color: "bg-green-500" },
    idle: { text: "Idle", color: "bg-yellow-500" },
    dnd: { text: "Do Not Disturb", color: "bg-red-500" },
    offline: { text: "Offline", color: "bg-gray-500" },
  };

  const discordAvatarUrl = lanyard
    ? `https://cdn.discordapp.com/avatars/${lanyard.discord_user.id}/${lanyard.discord_user.avatar}.webp`
    : "";

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center relative px-6 overflow-hidden">
      <Snowfall />
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Full-Stack Web Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-[var(--font-vazirmatn)]">
            Crafting elegant, modern, and highly interactive digital experiences. Bridging the gap between complex backend logic and seamless frontend design.
          </p>
        </motion.div>

        {lanyard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 w-full max-w-sm mx-auto items-center"
          >
            <div className="glass-card px-8 py-8 w-full flex flex-col items-center gap-6 shadow-xl">
              <p className="text-2xl font-semibold text-white">Discord Status</p>

              <div className="relative">
                <img
                  src={discordAvatarUrl}
                  alt="Discord Avatar"
                  className="w-24 h-24 rounded-full border-[3px] border-accent shadow-[0_0_20px_rgba(96,165,250,0.4)] object-cover"
                />
                <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-4 border-[#1a1d2e] ${discordStatusMap[lanyard.discord_status].color}`} />
              </div>
              
              <p className="text-lg font-medium text-white">{lanyard.discord_user.username}</p>

              <div className="w-full glass px-5 py-3 rounded-xl flex items-center justify-center gap-3">
                <div className={`w-3 h-3 rounded-full ${discordStatusMap[lanyard.discord_status].color}`}></div>
                <p className="text-sm font-medium text-gray-300">
                  {discordStatusMap[lanyard.discord_status].text}
                </p>
              </div>
            </div>

            {lanyard.spotify && (
              <div className="glass-card px-6 py-5 w-full flex items-center gap-4 shadow-xl">
                <FaSpotify className="text-[#1DB954] text-4xl animate-pulse shrink-0" />
                <div className="text-left overflow-hidden flex-1">
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">Listening to Spotify</p>
                  <p className="text-sm font-semibold text-white truncate">{lanyard.spotify.song}</p>
                  <p className="text-xs text-gray-400 truncate">by {lanyard.spotify.artist}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}