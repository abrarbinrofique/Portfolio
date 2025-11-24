import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <WhyMe />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
