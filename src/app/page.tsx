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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
