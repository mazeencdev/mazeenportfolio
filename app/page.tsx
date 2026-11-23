import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Work from "@/components/Work";
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
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
