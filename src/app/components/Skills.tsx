"use client";

import { skillsArr } from "../config";

export default function MySkills() {
  return (
    <section className="w-full md:pt-24 pt-12 " id="skill">
      <div className="main-container text-white flex flex-col gap-6 justify-center items-center ">
        <h5 className="text-primary md:text-4xl text-3xl">MY SKILLS</h5>

        <div className="lg:w-[65%] w-full grid lg:grid-cols-4 place-content-center md:grid-cols-2 grid-cols-1 md:gap-10 gap-5  pt-10">
          {skillsArr.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border rounded-lg hover:shadow-lg bg-tertiary/10 p-3 border-secondary/40"
            >
              <img src={item.logo} className="w-10" />
              <p className=" text-center font-medium pt-5 text-secondary text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
