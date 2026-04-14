"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { skillsArr } from "../config";

const categories = [
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
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filteredSkills = activeCategory === "All"
    ? skillsArr
    : skillsArr.filter((item) => {
      const cat = categories.find((c) => c.label === activeCategory);
      return cat?.keys.some(
        (k) => item.title.toLowerCase().includes(k.toLowerCase())
      );
    });

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
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 22px 16px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
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

        .skill-logo-wrap {
          width: 44px;
          height: 44px;
          position: relative;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
          transition: filter 0.3s;
        }
        .skill-card:hover .skill-logo-wrap {
          filter: drop-shadow(0 4px 10px rgba(99,216,165,0.25));
        }

        .skill-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          letter-spacing: 0.03em;
          text-align: center;
          transition: color 0.3s;
          margin: 0;
        }
        .skill-card:hover .skill-name { color: #e2e8f0; }

        .skill-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(99,216,165,0.3);
          transition: background 0.3s;
        }
        .skill-card:hover .skill-dot { background: #63d8a5; }

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
          font-size: 13px;
          font-weight: 500;
          border-radius: 100px;
          padding: 6px 16px;
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
          color: #475569;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 6px 14px;
        }
        .expertise-badge span { color: #63d8a5; font-weight: 600; }
      `}</style>

      <section
        id="skill"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-20 overflow-hidden ${visible ? "skills-visible" : ""}`}
        style={{ background: "linear-gradient(180deg, #070c18 0%, #0d1526 100%)" }}
      >
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{
          width: 600, height: 400, top: "0%", left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(99,216,165,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="skill-header flex flex-col items-center gap-4 mb-10">
            <span className="section-label">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#63d8a5", display: "inline-block" }} />
              What I Work With
            </span>
            <h2
              className="skills-shimmer"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textAlign: "center", margin: 0 }}
            >
              My Skills
            </h2>
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #63d8a5, transparent)", borderRadius: 2 }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 14, textAlign: "center", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
              3.8+ years of hands-on experience with modern frontend technologies — specialising in React.js, Next.js, TypeScript, WordPress, and performance-optimised UI systems
            </p>

            {/* Expertise summary row */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {[
                { label: "Frontend", value: "React · Next.js · TypeScript" },
                { label: "State", value: "Redux Toolkit · SWR" },
                { label: "Perf.", value: "Code Splitting · Lazy Load" },
                { label: "CMS", value: "WordPress · 15+ Sites" },
                { label: "Tools", value: "Git · Vite · Jest" },
              ].map((e) => (
                <div key={e.label} className="expertise-badge">
                  <span>{e.label}</span>
                  {e.value}
                </div>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="filter-bar flex flex-wrap gap-2 justify-center mb-10">
            {["All", ...categories.map((c) => c.label)].map((cat) => {
              const catObj = categories.find((c) => c.label === cat);
              return (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {catObj?.icon} {cat}
                </button>
              );
            })}
          </div>

          {/* Skills grid */}
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
          >
            {filteredSkills.map((item, i) => (
              <div
                key={i}
                className="skill-card"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <div className="skill-dot" />
                <div className="skill-logo-wrap">
                  <Image
                    src={normalizeSrc(item.logo)}
                    alt={item.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="skill-name">{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}