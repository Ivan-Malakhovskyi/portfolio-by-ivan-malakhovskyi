import About from "../components/About";
import BtnToTop from "../components/BtnToTop";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import OpenToWork from "../components/OpenToWork";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="bg-mainBlack">
      <Hero />
      <OpenToWork />
      <About />
      <Experience />
      <Certificates />
      <Skills />
      <Projects />

      <BtnToTop />
    </main>
  );
}
