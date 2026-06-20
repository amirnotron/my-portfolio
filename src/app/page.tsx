import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
}