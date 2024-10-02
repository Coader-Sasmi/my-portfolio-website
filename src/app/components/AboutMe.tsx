"use client";

export default function AboutMe() {
  return (
    <section className=" w-full lg:pt-24 pt-12" id="about">
      <div className="main-container text-white flex flex-col gap-6 justify-center items-center">
        <h5 className="text-primary md:text-4xl text-3xl">ABOUT ME</h5>
        <p className="text-tertiary text-lg pt-8 text-center md:w-[65%] tracking-widest">
          After earning my master’s degree in Computer Science, I set out on a
          journey fueled by my passion for web and frontend development. I find
          immense satisfaction in tackling complex challenges and coming up with
          innovative solutions that push boundaries. My expertise lies in
          JavaScript, React, TypeScript, Next.js, Tailwind CSS, and Rest APIs,
          allowing me to build dynamic and user-focused applications. I’m always
          eager to stay ahead of industry trends and continuously explore new
          technologies that can enhance my work.
        </p>
        <p className="text-tertiary text-lg text-center md:w-[65%] tracking-wider">
          Currently, I’m diving into backend development with MongoDB, Express,
          and Node.js to broaden my skill set and create more comprehensive
          solutions. The thrill of learning new things keeps me motivated, and I
          am excited to keep growing as a developer while taking on more
          challenges in both frontend and backend development.
        </p>
      </div>
    </section>
  );
}
