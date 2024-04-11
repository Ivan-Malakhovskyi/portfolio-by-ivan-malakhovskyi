import About from "./about/page";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import OpenToWork from "./components/OpenToWork";

export default function Home() {
  return (
    <main className="bg-mainBlack">
      <Hero />
      <MaxWidthWrapper>
        <OpenToWork />
        <About />
        <Experience />
      </MaxWidthWrapper>
    </main>
  );
}
