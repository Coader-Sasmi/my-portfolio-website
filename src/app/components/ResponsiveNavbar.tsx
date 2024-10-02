"use client";

import { Close, Menu } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { navLink } from "../config";

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <section className=" block md:hidden p-2 bg-black sticky -top-1 z-[9000]">
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="flex items-end">
            <img
              src="./logo.png"
              alt="logo"
              className="lg:w-[12%] md:w-[20%] w-[10%]"
            />
            <p className="text-white lg:text-lg font-bold whitespace-nowrap">
              Sasmita.dev
            </p>
          </span>
        </Link>

        <span className="" onClick={() => setOpen(!open)}>
          {open ? (
            <Close className="text-primary text-3xl" />
          ) : (
            <Menu className="text-primary text-3xl" />
          )}
        </span>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <section className="flex flex-col gap-4 my-4">
          {navLink?.map((item, i) => (
            <Link key={i} href={item?.path}>
              <p className=" hover:text-primary text-gray-400 common-transition">
                {item?.label}
              </p>
            </Link>
          ))}
        </section>
      </Collapse>
    </section>
  );
}
