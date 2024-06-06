import About from "./components/About";
import BtnToTop from "./components/BtnToTop";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import OpenToWork from "./components/OpenToWork";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-mainBlack">
      <Hero />
      <OpenToWork />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <BtnToTop />
    </main>
  );
}
