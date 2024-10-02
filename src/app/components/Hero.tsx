"use client";

import {
  FileDownload,
  GitHub,
  LinkedIn,
  TrendingFlat,
} from "@mui/icons-material";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center py-16">
      <img
        src="./profile.jpeg"
        className="w-28 h-28 rounded-full border-4 border-secondary"
      />
      <div className="py-8 font-medium flex flex-col gap-6 md:w-[65%]">
        <p className="text-white text-xl">Hi, my name is</p>
        <p className="text-primary md:text-5xl text-3xl">Sasmita Mahanta</p>
        <p className="text-white md:text-5xl text-3xl">
          I design & develop web applications
        </p>
        <p className="text-tertiary text-lg tracking-wider">
          {`I'm`} a passionate software developer who loves building innovative
          websites and apps. {`Let's`} collaborate and create something
          extraordinary together!
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn bg-primary rounded-full">
            Contact me here <TrendingFlat />
          </button>
          <Link href="/resume.pdf" download>
            <button className="px-5 py-3 text-white border border-white rounded-full">
              Download CV <FileDownload />
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sasmita-mahanta-7b24801a7/"
            target="_"
          >
            <button className="text-white border border-white rounded-full p-3">
              <LinkedIn />
            </button>
          </Link>
          <Link href="https://github.com/Coader-Sasmi" target="_">
            <button className="text-white border border-white rounded-full p-3">
              <GitHub />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
