"use client";

import {
  AboutMe,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Skills
} from "./components";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
