"use client";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="w-full md:pt-24 pt-12" id="contact">
      <div className="main-container text-white flex flex-col gap-6 justify-center items-center">
        <h5 className="text-primary md:text-4xl text-3xl">GET IN TOUCH</h5>
        <div className=" text-white flex flex-col justify-center items-center md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <p className="text-tertiary text-lg text-center md:w-[65%] tracking-widest">
            Thank you for visiting my portfolio. Please fill out the form below
            to inquire about my work. Let’s collaborate and create something
            creative and unique together.
          </p>
          <Link href="mailto:mahantasasmita326@gmail.com">
            <p className="text-blue-600 text-lg pt-8 text-center hover:underline">
              mahantasasmita326@gmail.com
            </p>
          </Link>
          <div className="lg:w-[65%] w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
