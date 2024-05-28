import About from "./components/About";
import BtnToTop from "./components/BtnToTop";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import OpenToWork from "./components/OpenToWork";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-mainBlack">
      <Hero />
      <OpenToWork />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <BtnToTop />
    </main>
  );
}
