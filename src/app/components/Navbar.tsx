"use client";

import Link from "next/link";
import { navLink } from "../config";

export default function Navbar() {
  return (
    <header className=" body-font hidden md:block sticky top-0 z-[9000] pt-5 backdrop-blur-[2px]">
      <div className="flex justify-center items-center w-full">
        <div className="w-6/12 bg-black flex justify-center items-center px-5 py-3 rounded-full">
          <Link href="/">
            <span className="flex items-end">
              <img
                src="./logo.png"
                alt="logo"
                className="lg:w-[12%] md:w-[20%] "
              />
              <p className="text-white lg:text-lg font-bold whitespace-nowrap">
                Sasmita.dev
              </p>
            </span>
          </Link>
          <nav className="text-white flex flex-col md:flex-row items-center text-base justify-center lg:gap-8 gap-5 font-medium">
            {navLink?.map((item, i) => (
              <Link key={i} href={item?.path}>
                <p className=" hover:text-primary common-transition">
                  {item?.label}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
