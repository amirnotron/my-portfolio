"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus("Message sent successfully!");
      else setStatus("Failed to send message.");
    } catch (error) {
      setStatus("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Lets Connect
        </motion.h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent/80 text-primary font-bold text-lg py-4 rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="text-center text-sm mt-4 text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}