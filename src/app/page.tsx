"use client";

import {
  AboutMe,
  ContactUs,
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
      <ContactUs />
      <Footer />
    </>
  );
}
