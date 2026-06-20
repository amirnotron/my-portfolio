import { FaGithub, FaTelegramPlane, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-8">
          <a href="https://github.com/amirnotron" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
            <FaGithub size={28} />
          </a>
          <a href="https://t.me/amirnotron" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0088cc] hover:scale-110 transition-all">
            <FaTelegramPlane size={28} />
          </a>
          <a href="https://instagram.com/el.amireza" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E1306C] hover:scale-110 transition-all">
            <FaInstagram size={28} />
          </a>
          <a href="https://discord.com/users/634488416771244076" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#5865F2] hover:scale-110 transition-all">
            <FaDiscord size={28} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Notron. All rights reserved.</p>
      </div>
    </footer>
  );
}