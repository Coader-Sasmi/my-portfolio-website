"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { skillsArr } from "../config";

interface Category {
  label: string;
  icon: string;
  keys: string[];
}

interface SkillItem {
  title: string;
  logo: string;
}

interface ExpertiseItem {
  label: string;
  value: string;
}

const CATEGORIES: readonly Category[] = [
  {
    label: "Frontend",
    icon: "🖥️",
    keys: ["React", "Next", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "State & Data",
    icon: "⚡",
    keys: ["Redux", "SWR", "Context", "Hooks"],
  },
  {
    label: "Styling & UI",
    icon: "🎨",
    keys: ["Tailwind", "Material", "MUI", "Responsive"],
  },
  {
    label: "API & Backend",
    icon: "🔗",
    keys: ["REST", "Node", "Express", "Mongo"],
  },
  {
    label: "Build & Tools",
    icon: "🛠️",
    keys: ["Git", "Webpack", "Vite", "npm", "Yarn", "Jest", "Babel"],
  },
  {
    label: "CMS",
    icon: "🌐",
    keys: ["WordPress"],
  },
];

const FILTER_LABELS: readonly string[] = ["All", ...CATEGORIES.map((c) => c.label)];

const EXPERTISE_SUMMARY: readonly ExpertiseItem[] = [
  { label: "Frontend", value: "React · Next.js · TypeScript" },
  { label: "State", value: "Redux Toolkit · SWR" },
  { label: "Perf.", value: "Code Splitting · Lazy Load" },
  { label: "Metrics", value: "30% UI Boost · RBAC" },
  { label: "Tools", value: "Git · Vite · Jest" },
];

// Normalize logo path: ensures it starts with "/" for next/image compatibility
function normalizeSrc(src: string): string {
  if (!src) return src;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return src;
  // Strip leading "./" or "." and prepend "/"
  return "/" + src.replace(/^\.\//, "").replace(/^\./, "");
}

export default function MySkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

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

  const filteredSkills = useMemo<SkillItem[]>(() => {
    if (activeCategory === "All") return skillsArr;
    const cat = CATEGORIES.find((c) => c.label === activeCategory);
    if (!cat) return skillsArr;
    return skillsArr.filter((item: SkillItem) =>
      cat.keys.some((k) => item.title.toLowerCase().includes(k.toLowerCase()))
    );
  }, [activeCategory]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,216,165,0); }
          50%       { box-shadow: 0 0 16px 2px rgba(99,216,165,0.12); }
        }
        @keyframes logo-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-4px) scale(1.05); }
        }

        .skills-visible .skill-header { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .skills-visible .skill-card   { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) both; }
        .skills-visible .filter-bar   { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.2s both; }

        .skills-shimmer {
          background: linear-gradient(100deg, #e2e8f0 0%, #fff 40%, #e2e8f0 60%, #94a3b8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .skill-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: default;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(99,216,165,0.07) 0%, transparent 65%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .skill-card:hover {
          border-color: rgba(99,216,165,0.3);
          background: rgba(99,216,165,0.05);
          transform: translateY(-5px);
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .skill-card:hover::before { opacity: 1; }
        .skill-card:hover .skill-logo-wrap { animation: logo-float 2s ease-in-out infinite; }
        .skill-card:hover .skill-name { color: #e2e8f0; }
        .skill-card:hover .skill-dot {
          background: #63d8a5;
          box-shadow: 0 0 6px #63d8a5;
        }

        .skill-logo-wrap {
          position: relative;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
          transition: filter 0.3s, transform 0.3s;
        }
        .skill-card:hover .skill-logo-wrap {
          filter: drop-shadow(0 4px 10px rgba(99,216,165,0.25));
          transform: scale(1.1);
        }

        .skill-name {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.03em;
          text-align: center;
          transition: color 0.3s;
          margin: 0;
        }

        .skill-dot {
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          transition: background 0.3s, box-shadow 0.3s;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #63d8a5;
          background: rgba(99,216,165,0.08);
          border: 1px solid rgba(99,216,165,0.18);
          border-radius: 100px;
          padding: 5px 16px;
        }

        .filter-btn {
          font-family: 'DM Sans', sans-serif;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .filter-btn:hover {
          border-color: rgba(99,216,165,0.3);
          color: #94a3b8;
          background: rgba(99,216,165,0.04);
        }
        .filter-btn.active {
          border-color: rgba(99,216,165,0.5);
          background: rgba(99,216,165,0.1);
          color: #63d8a5;
        }

        .expertise-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 100px;
          transition: border-color 0.2s;
        }
        .expertise-badge:hover { border-color: rgba(99,216,165,0.25); }
        .expertise-badge .badge-key {
          color: #63d8a5;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .expertise-badge .badge-value { font-weight: 300; }
      `}</style>

      <section
        id="skill"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#070c18] to-[#0d1526] transition-all duration-700 ${
          visible ? "skills-visible opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] lg:h-[400px] pointer-events-none bg-[radial-gradient(ellipse,rgba(99,216,165,0.04)_0%,transparent_70%)] blur-[60px]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="skill-header flex flex-col items-center gap-4 mb-8 sm:mb-10 text-center">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#63d8a5] inline-block shadow-[0_0_8px_#63d8a5]" />
              What I Work With
            </span>

            <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold text-white tracking-tight skills-shimmer m-0">
              My Skills
            </h2>

            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#63d8a5] to-transparent rounded-sm" />

            <p className="font-['DM_Sans'] text-slate-500 text-sm max-w-lg leading-relaxed m-0 font-light px-2">
              4+ years of hands-on experience with modern frontend technologies —
              specializing in React.js, Next.js, TypeScript, performance-optimized UI
              systems, and secure state flows.
            </p>

            {/* Expertise Summary Row */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {EXPERTISE_SUMMARY.map((entry) => (
                <div key={entry.label} className="expertise-badge px-4 py-1.5 backdrop-blur-sm">
                  <span className="badge-key pr-1">{entry.label}</span>
                  <span className="badge-value">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="filter-bar flex flex-wrap gap-2 justify-center mb-8 sm:mb-10">
            {FILTER_LABELS.map((label) => {
              const catObj = CATEGORIES.find((c) => c.label === label);
              const isActive = activeCategory === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={`filter-btn text-xs sm:text-[13px] px-4 sm:px-4 py-1.5 ${isActive ? "active" : ""}`}
                >
                  {catObj?.icon} {label}
                </button>
              );
            })}
          </div>

          {/* Grid Display Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredSkills.map((item: SkillItem, i: number) => (
              <div
                key={item.title}
                className="skill-card p-4 sm:p-5"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {/* Accent dot indicator */}
                <div className="skill-dot absolute top-3 right-3 w-1.5 h-1.5" />

                {/* Logo container wrapper */}
                <div className="skill-logo-wrap w-11 h-11 sm:w-12 sm:h-12 mb-3">
                  <Image src={normalizeSrc(item.logo)} alt={item.title} fill className="object-contain" />
                </div>

                <p className="skill-name text-[11px] sm:text-xs">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}