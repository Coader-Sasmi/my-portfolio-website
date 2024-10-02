"use client";
import React from "react";

export const navLink = [
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Skills",
    path: "#skill",
  },
  {
    label: "Experience",
    path: "#experience",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

export const skillsArr = [
  {
    logo: "./html.png",
    title: "HTML",
  },
  {
    logo: "./css.png",
    title: "CSS",
  },
  {
    logo: "./js.png",
    title: "JavaScript",
  },
  {
    logo: "./react.png",
    title: "React.js",
  },
  {
    logo: "./ts.png",
    title: "TypeScript",
  },
  {
    logo: "./next.png",
    title: "Next.js",
  },
  {
    logo: "./node.png",
    title: "Node.js",
  },
  {
    logo: "./github.png",
    title: "Git",
  },
  {
    logo: "./tailwind.png",
    title: "Tailwind",
  },
  {
    logo: "./bootstrap.png",
    title: "Bootstrap",
  },
  {
    logo: "./material.png",
    title: "Material UI",
  },
  {
    logo: "./framer.png",
    title: "Framer Motion",
  },
  {
    logo: "./vite.png",
    title: "Vite",
  },
  {
    logo: "./rest.png",
    title: "Rest API",
  },
  {
    logo: "./redux.png",
    title: "Redux",
  },
  {
    logo: "./context.png",
    title: "Context API",
  },
  {
    logo: "./mongoDB.png",
    title: "MongoDB",
  },
  {
    logo: "./express.png",
    title: "Express",
  },
];

type Experience = {
  title: string;
  company: string;
  description: React.ReactNode;
  date: string;
};

export const experiencesData: Experience[] = [
  {
    title: "Web Developer Trainee",
    company: "Innovex Academy, Bhubaneswar, India",
    description: (
      <ul className="text-white">
        <li className="mb-2">
          🚀 Learn and built responsive UI, optimizing pages for fast response
          using HTML, CSS, JavaScript, ReactJS, Bootstrap 5.
        </li>
        <li className="mb-2">
          🔄 Built reusable components, documented application changes, and
          worked on multiple projects and updates.
        </li>
      </ul>
    ),
    date: "2020 - 2021",
  },
  {
    title: "Software Developer II",
    company: "SearchingYard Software Pvt. Ltd., Bhubaneswar, India",
    description: (
      <ul className="text-white">
        <li className="mb-2">
          🚀 Worked with advanced web development technologies like ReactJS,
          NextJS, TypeScript, ECMAScript6, JavaScript, Tailwind CSS, Material
          UI, Bootstrap 5, CSS, HTML, and JSON.
        </li>
        <li className="mb-2">
          🔄 Worked on updated versions of React, React-RouterDom, React-Hooks,
          and more.
        </li>
        <li className="mb-2">🔗 Worked on REST API and API integration.</li>
        <li className="mb-2">
          🔥 Developed dynamic applications using FIREBASE.
        </li>
        <li className="mb-2">
          🧠 Specialized in building logic for maximum performance across a vast
          array of devices and browsers.
        </li>
        <li className="mb-2">
          🤝 Coordinated with the development team and worked on projects like
          E-COMMERCE, ERP Management System, Inventory Management System, and
          more.
        </li>
      </ul>
    ),
    date: "2021 - 2024",
  },
  {
    title: "Next.js Developer",
    company: "AIS Technolabs Pvt Ltd, Ahemadabad, India",
    description: (
      <ul className="text-white">
        <li className="mb-2">
          🛠️ Specialized in Next.js, Redux, Bootstrap, NextAuth, and Jira Agile
          methodology.
        </li>
        <li className="mb-2">
          🎮 Developed engaging gaming applications using ReactJS,Next.js and
          TypeScript.
        </li>
        <li className="mb-2">
          ⚡ Ensured optimal performance across various devices and browsers.
        </li>
        <li className="mb-2">
          🤝 Collaborated on E-COMMERCE and ERP Management Systems.
        </li>
        <li className="mb-2">
          ✅ Implemented comprehensive unit testing for robust code quality.
        </li>
        <li className="mb-2">
          🔍 Utilized Jira Agile methodology for effective project management.
        </li>
      </ul>
    ),
    date: "2024 - Present",
  },
];
