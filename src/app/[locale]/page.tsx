import React from "react";
import About from "@/components/About";
import BtnToTop from "@/components/global/BtnToTop";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import OpenToWork from "@/components/OpenToWork";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-mainWhite dark:bg-mainBlack">
        <Hero />
        <OpenToWork />
        <About />
        <Experience />
        <Certificates />
        <Skills />
        <Projects />
      </main>
      <BtnToTop />
      <Footer />
    </>
  );
};

export default Home;
