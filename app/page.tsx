import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Work from "@/components/Work";
import SideQuests from "@/components/SideQuests";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <Hero />
      <Mission />
      <Work />
      <SideQuests />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
