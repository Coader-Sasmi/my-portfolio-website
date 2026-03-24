"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Redux Toolkit", level: 88 },
  { name: "Tailwind CSS / MUI", level: 90 },
  { name: "REST APIs & SWR", level: 87 },
  { name: "Node.js / Express", level: 65 },
  { name: "MongoDB", level: 62 },
];

const tags = ["Performance Optimization", "Component Architecture", "RBAC Systems", "Code Splitting", "Agile / Sprints"];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ animationDelay: `${delay}ms` }} className="skill-row">
      <div className="flex justify-between mb-1">
        <span style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>{name}</span>
        <span style={{ color: "#63d8a5", fontSize: 12, fontWeight: 600, fontFamily: "'Syne', sans-serif" }}>{level}%</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 100, height: 4, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: animated ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #63d8a5, #3cb87a)",
            borderRadius: 100,
            transition: `width 1.1s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
            boxShadow: "0 0 8px rgba(99,216,165,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
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

        .about-shimmer {
          background: linear-gradient(100deg, #e2e8f0 0%, #fff 40%, #e2e8f0 60%, #94a3b8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s;
        }
        .glass-card:hover {
          border-color: rgba(99,216,165,0.18);
          transform: translateY(-2px);
        }

        .skill-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 5px 14px;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }
        .skill-tag:hover {
          border-color: rgba(99,216,165,0.3);
          color: #63d8a5;
          background: rgba(99,216,165,0.06);
        }

        .deco-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #63d8a5;
          flex-shrink: 0;
          margin-top: 8px;
        }

        .float-badge {
          animation: float 4s ease-in-out infinite;
        }
        .float-badge-2 {
          animation: float 5s ease-in-out 1s infinite;
        }

        .accent-line {
          width: 2px;
          background: linear-gradient(180deg, #63d8a5, transparent);
          border-radius: 2px;
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-20 overflow-hidden ${visible ? "about-visible" : ""}`}
        style={{ background: "linear-gradient(180deg, #0d1526 0%, #070c18 100%)" }}
      >
        {/* Background decoration */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 500, height: 500,
            top: "10%", right: "-100px",
            background: "radial-gradient(circle, rgba(99,216,165,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16 fade-up-1">
            <span className="section-label">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#63d8a5", display: "inline-block" }} />
              Who I Am
            </span>
            <h2
              className="about-shimmer"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textAlign: "center", margin: 0 }}
            >
              About Me
            </h2>
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #63d8a5, transparent)", borderRadius: 2 }} />
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — story */}
            <div className="flex flex-col gap-6 fade-left">
              <div className="glass-card p-7 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="accent-line" style={{ height: 48 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#94a3b8", fontSize: 15, lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                    After earning my Master of Computer Application from Sambalpur University, I specialised in frontend engineering — building scalable web applications and dashboard platforms with React.js, Next.js, and TypeScript for 3.8+ years.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="accent-line" style={{ height: 48 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 15, lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                    My expertise spans REST API integration, Redux Toolkit state management, performance optimisation (code-splitting, lazy loading, SWR caching), and component-driven architecture. I led an event platform serving 3,000+ users, cutting load time by 20% and improving rendering efficiency by 30%.
                  </p>
                </div>
              </div>

              {/* Floating tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "MCA", label: "Sambalpur Univ." },
                  { val: "3.8+", label: "Years of exp." },
                  { val: "3k+", label: "Users served" },
                ].map((s) => (
                  <div key={s.label} className="glass-card p-4 text-center">
                    <p style={{ fontFamily: "'Syne', sans-serif", color: "#63d8a5", fontSize: 18, fontWeight: 800, margin: 0 }}>{s.val}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", margin: "3px 0 0" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — skills */}
            <div className="flex flex-col gap-6 fade-right">
              <div className="glass-card p-7">
                <p style={{ fontFamily: "'Syne', sans-serif", color: "#e2e8f0", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>
                  Technical Skills
                </p>
                <div className="flex flex-col gap-5">
                  {skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
                  ))}
                </div>
              </div>

              {/* Currently learning */}
              <div
                className="glass-card p-5 flex items-start gap-4"
                style={{ borderColor: "rgba(99,216,165,0.15)" }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: "rgba(99,216,165,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  🚀
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne', sans-serif", color: "#e2e8f0", fontSize: 13, fontWeight: 700, margin: "0 0 4px", letterSpacing: "0.04em" }}>Currently Expanding Into</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    MongoDB · Express · Node.js · Full-stack MERN architecture
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