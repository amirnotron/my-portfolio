import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import AudioProvider from "@/components/AudioProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" });

export const metadata: Metadata = {
  title: "Amir | Full-Stack Developer",
  description: "Portfolio of Amir, Full-Stack Web Developer. Specializing in Next.js, React, and seamless UI/UX.",
  openGraph: {
    title: "Amir | Full-Stack Developer",
    description: "Explore my skills, projects, and favorite games and music.",
    url: "https://notron.top",
    siteName: "AmirNotron | امیرنوترون",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#2c3040",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${vazirmatn.variable} font-sans bg-primary min-h-screen flex flex-col`}>
        <AudioProvider>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}