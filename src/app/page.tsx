"use client";

import {
  AboutMe,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  ResponsiveNavbar,
  Skills,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResponsiveNavbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
