"use client";

import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../config";

export default function Experience() {
  return (
    <section className="w-full md:pt-24 pt-12 " id="experience">
      <div className="main-container text-white flex flex-col gap-6 justify-center items-center">
        <h5 className="text-primary md:text-4xl text-3xl">EXPERIENCE</h5>

        {/* <VerticalTimeline>
          {experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={<WorkOutline />}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <p className="!mt-1 !font-normal ">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline> */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 text-white py-8">
          {experiencesData.map((item, i) => (
            <div
              key={i}
              className="grid place-items-center hover:-translate-y-2 md:hover:shadow-[rgba(255,_233,_47,_0.3)_0px_28px_30px_-5px] common-transition border border-primary p-5 rounded-3xl"
            >
              <h2 className="md:text-xl py-5">{item.title}</h2>
              <p className=" text-center font-medium text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
