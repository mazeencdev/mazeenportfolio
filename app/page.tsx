import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import Links from "@/components/sections/Links";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Tools />
        <Links />
      </main>
    </>
  );
}
