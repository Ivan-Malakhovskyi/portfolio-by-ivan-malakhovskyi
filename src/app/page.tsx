import About from "./components/About";
import BtnToTop from "./components/BtnToTop";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import OpenToWork from "./components/OpenToWork";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-mainBlack">
      <Hero />
      <MaxWidthWrapper>
        <OpenToWork />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </MaxWidthWrapper>
      <BtnToTop />
    </main>
  );
}
