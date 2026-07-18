"use client";

import { memo, useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface MetricItem {
  val: string;
  label: string;
}

const SKILLS: readonly Skill[] = [
  { name: "Next.js", level: 95 },
  { name: "TypeScript", level: 95 },
  { name: "React.js", level: 95 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Redux Toolkit", level: 90 },
  { name: "Tailwind CSS / MUI", level: 90 },
  { name: "REST APIs & SWR", level: 90 },
  { name: "WordPress", level: 85 },
  { name: "Node.js / Express", level: 70 },
];

const TAGS: readonly string[] = [
  "Performance Optimization",
  "Component Architecture",
  "RBAC Systems",
  "Code Splitting",
  "WordPress CMS",
  "Agile / Sprints",
  "Cross-browser Compatibility",
  "Responsive Web Design",
];

const METRICS: readonly MetricItem[] = [
  { val: "MCA", label: "Sambalpur Univ." },
  { val: "4+", label: "Years Exp." },
  { val: "3k+", label: "Users served" },
  { val: "30%", label: "UI Boost" },
];

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar = memo(function SkillBar({ name, level, delay }: SkillBarProps) {
  const [animated, setAnimated] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    const node = ref.current;
    if (node) obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="skill-row"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-['DM_Sans'] text-slate-300 text-[13px] font-medium">
          {name}
        </span>
        <span className="font-['Syne'] text-[#63d8a5] text-xs font-semibold">
          {level}%
        </span>
      </div>
      <div className="bg-white/[0.06] rounded-full h-1 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#63d8a5] to-[#3cb87a] shadow-[0_0_8px_rgba(99,216,165,0.4)]"
          style={{
            width: animated ? `${level}%` : "0%",
            transition: `width 1.1s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
});

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    const node = sectionRef.current;
    if (node) obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        .about-visible .fade-up-1 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .about-visible .fade-up-2 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.2s both; }
        .about-visible .fade-up-3 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.35s both; }
        .about-visible .fade-left  { animation: fadeLeft  0.7s cubic-bezier(.22,.68,0,1.2) 0.15s both; }
        .about-visible .fade-right { animation: fadeRight 0.7s cubic-bezier(.22,.68,0,1.2) 0.25s both; }
        .about-visible .skill-row  { animation: fadeUp 0.5s cubic-bezier(.22,.68,0,1.2) both; }

        .name-shimmer {
          background: linear-gradient(100deg, #e2e8f0 0%, #fff 40%, #e2e8f0 60%, #94a3b8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .float-badge { animation: float 4s ease-in-out infinite; }
        .float-badge-2 { animation: float 5s ease-in-out 1s infinite; }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-20 overflow-hidden transition-all duration-700 bg-gradient-to-b from-[#0d1526] to-[#070c18] ${
          visible ? "about-visible opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background decoration orbs */}
        <div className="absolute top-[10%] -right-[60px] sm:-right-[100px] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,216,165,0.04)_0%,transparent_70%)] blur-[60px]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="fade-up-1 flex flex-col items-center gap-4 mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#63d8a5] uppercase bg-[rgba(99,216,165,0.1)] border border-[rgba(99,216,165,0.2)] rounded-full px-4 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#63d8a5] inline-block shadow-[0_0_8px_#63d8a5]" />
              Who I Am
            </span>
            <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold text-center text-white tracking-tight name-shimmer">
              About Me
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#63d8a5] to-transparent rounded-sm" />
          </div>

          {/* Main Grid Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
            {/* Left Column — Story & Stats */}
            <div className="fade-left flex flex-col gap-5 sm:gap-6">
              {/* Core Description Card */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7 flex flex-col gap-5 backdrop-blur-md shadow-xl hover:border-[rgba(99,216,165,0.2)] transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#63d8a5] to-transparent rounded-sm shrink-0" />
                  <p className="font-['DM_Sans'] text-slate-400 text-sm sm:text-[15px] leading-relaxed font-light m-0">
                    After earning my Master of Computer Applications (MCA) from Sambalpur
                    University, I specialized in frontend system engineering — architecting
                    high-performance dashboards, web applications, and enterprise product
                    systems using React.js, Next.js, and TypeScript for over{" "}
                    <strong className="font-medium text-white">4 years</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#63d8a5] to-transparent rounded-sm shrink-0" />
                  <p className="font-['DM_Sans'] text-slate-500 text-sm sm:text-[15px] leading-relaxed font-light m-0">
                    My development framework heavily prioritizes strict type safety, modular
                    client-side state management via Redux Toolkit, and performance
                    optimization layers including code-splitting, lazy loading, and SWR
                    caching. I architected a multi-tenant Event Management Platform at
                    Netsqure serving over 3,000+ active users — successfully improving core
                    UI rendering performance by 30% and reducing load times by 20%.
                  </p>
                </div>
              </div>

              {/* Floating Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="font-['DM_Sans'] text-xs font-medium text-slate-400 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1 hover:border-[rgba(99,216,165,0.3)] hover:text-white transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* High-Impact Engineering Mini Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm hover:border-[rgba(99,216,165,0.25)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="font-['Syne'] text-[#63d8a5] text-base sm:text-lg font-extrabold m-0">
                      {metric.val}
                    </p>
                    <p className="font-['DM_Sans'] text-slate-600 text-[10px] tracking-widest uppercase mt-1 mb-0 font-medium">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Skill Bars & Future Tech Stack */}
            <div className="fade-right flex flex-col gap-5 sm:gap-6">
              {/* Technical Progress Bars Card */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7 shadow-xl">
                <p className="font-['Syne'] text-slate-200 text-xs font-bold tracking-widest uppercase mb-6">
                  Technical Skills
                </p>
                <div className="flex flex-col gap-5">
                  {SKILLS.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
                  ))}
                </div>
              </div>

              {/* Upskilling Tracker Card */}
              <div className="float-badge bg-white/[0.03] border border-[rgba(99,216,165,0.15)] rounded-2xl p-4 sm:p-5 flex items-start gap-4 shadow-xl backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl shrink-0 bg-[rgba(99,216,165,0.1)] flex items-center justify-center text-base shadow-inner">
                  🚀
                </div>
                <div>
                  <p className="font-['Syne'] text-slate-200 text-[13px] font-bold tracking-wider uppercase m-0 mb-1">
                    Currently Expanding Into
                  </p>
                  <p className="font-['DM_Sans'] text-slate-500 text-[13px] leading-normal m-0 font-light">
                    React Native · Mobile Architecture · Cross-Platform Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}