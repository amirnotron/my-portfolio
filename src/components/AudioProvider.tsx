"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function AudioProvider({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="glass px-8 py-4 rounded-2xl text-2xl font-bold tracking-widest text-white shadow-lg"
            >
              CLICK TO ENTER
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {entered && children}

      {entered && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-40 glass p-3 rounded-full flex flex-col-reverse items-center gap-4 group"
        >
          <button onClick={() => setIsMuted(!isMuted)} className="text-white p-2">
            {isMuted || volume === 0 ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
          </button>
          <div className="h-0 overflow-hidden group-hover:h-24 transition-all duration-300 w-full flex justify-center pb-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="h-24 w-1 appearance-none bg-white/20 rounded-full slider-vertical"
              style={{ writingMode: "bt-lr", appearance: "slider-vertical" } as any}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}