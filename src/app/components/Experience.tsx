"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  title: string;
  description: string;
  company: string;
  location: string;
  date: string;
  type: string;
  bullets: string[];
}

const experiencesData: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Netsqure",
    location: "Bangalore (Remote)",
    date: "Feb 2025 – Present",
    type: "Full-time",
    description:
      "Architected an Event Management Platform (React.js + Vite) serving 3,000+ users with multi - tenant RBAC — improving rendering by 30% and load time by 20%.Built a Next.js E- Commerce Admin Panel and developed 15 + production WordPress websites for clients.",
    bullets: [
      "Architected Event Management Platform (3,000+ users, 15+ admins) using React.js + Vite + Redux Toolkit + SWR",
      "Designed multi-tenant RBAC dashboard with modular feature isolation",
      "Improved rendering by 30% and load time by 20% via code-splitting, lazy loading & SWR caching",
      "Built real-time calendar with concurrent scheduling conflict handling",
      "Built E-Commerce Admin Panel using Next.js with product management, order tracking and RBAC workflows",
      "Developed and deployed 15+ production WordPress websites including custom theme development and plugin integration"
    ],
  },
  {
    title: "Front-End Developer",
    company: "Freelance & Contract",
    location: "Odisha, India (Remote)",
    date: "Apr 2024 – Feb 2025",
    type: "Freelance",
    description:
      "Delivered production projects for real clients — a multi-category E-Commerce platform and an interior design agency website. Managed end-to-end delivery from client requirements to Vercel deployment.",
    bullets: [
      "Delivered Limited Cart — multi-category E-Commerce platform with cart management, gender-based filtering, and responsive UI",
      "Built Elite Work — production website for Bangalore-based interior design agency serving real clients",
      "Implemented search, filtering & pagination for 10,000+ records",
      "Managed end-to-end delivery from requirement gathering to deployment",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Searching Yard Group",
    location: "Odisha, India",
    date: "Jun 2022 – Mar 2024",
    type: "Full-time",
    description:
      "Built scalable dashboards for HRMS, CRM, and E-Commerce platforms using React & TypeScript. Reduced frontend load time by 20% through performance optimization and designed secure role-based workflows.",
    bullets: [
      "Designed reusable component systems with React & TypeScript",
      "Reduced frontend load time by 20% via performance optimization",
      "Handled large datasets (10k+ records) with pagination, filtering & search",
      "Implemented secure authentication and role-based access across internal systems",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
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
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes line-grow {
          from { height: 0; opacity: 0; }
          to   { height: 100%; opacity: 1; }
        }
        @keyframes dot-pop {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,216,165,0.35); }
          50%       { box-shadow: 0 0 0 7px rgba(99,216,165,0); }
        }

        .exp-visible .exp-header  { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .exp-visible .exp-card    { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) both; }
        .exp-visible .timeline-line { animation: line-grow 1.2s cubic-bezier(.22,.68,0,1.2) 0.3s both; }
        .exp-visible .timeline-dot  { animation: dot-pop 0.5s cubic-bezier(.22,.68,0,1.2) both; }

        .exp-shimmer {
          background: linear-gradient(100deg, #e2e8f0 0%, #fff 40%, #e2e8f0 60%, #94a3b8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
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

        .exp-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 26px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,216,165,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .exp-card:hover {
          border-color: rgba(99,216,165,0.25);
          background: rgba(99,216,165,0.04);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .exp-card:hover::before { opacity: 1; }

        .exp-card .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 0%, rgba(99,216,165,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s;
          pointer-events: none;
        }
        .exp-card:hover .card-glow { opacity: 1; }

        .timeline-dot {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: #63d8a5;
          border: 2px solid #0d1526;
          flex-shrink: 0;
          animation: ring-pulse 2.5s ease-in-out infinite;
          box-shadow: 0 0 0 3px rgba(99,216,165,0.15);
        }

        .date-badge {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #63d8a5;
          background: rgba(99,216,165,0.1);
          border: 1px solid rgba(99,216,165,0.2);
          border-radius: 100px;
          padding: 3px 12px;
          display: inline-block;
        }

        .company-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #475569;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
          padding: 3px 12px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .type-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #64748b;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 2px 8px;
        }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-24 overflow-hidden ${visible ? "exp-visible" : ""}`}
        style={{ background: "linear-gradient(180deg, #0d1526 0%, #070c18 100%)" }}
      >
        {/* Background glow */}
        <div className="absolute pointer-events-none" style={{
          width: 500, height: 400, bottom: "10%", right: "-80px",
          background: "radial-gradient(circle, rgba(99,216,165,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="exp-header flex flex-col items-center gap-4 mb-16">
            <span className="section-label">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#63d8a5", display: "inline-block" }} />
              My Journey
            </span>
            <h2 className="exp-shimmer" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800, textAlign: "center", margin: 0,
            }}>
              Experience
            </h2>
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #63d8a5, transparent)", borderRadius: 2 }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 14, textAlign: "center", maxWidth: 400, lineHeight: 1.7, margin: 0 }}>
              Roles and milestones that have shaped my craft
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div
                className="timeline-line w-full"
                style={{ background: "linear-gradient(180deg, #63d8a5, rgba(99,216,165,0.2))", transformOrigin: "top" }}
              />
            </div>

            <div className="flex flex-col gap-8">
              {experiencesData.map((item, i) => (
                <div
                  key={i}
                  className="exp-card flex gap-5 items-start ml-10"
                  style={{ animationDelay: `${i * 120 + 200}ms` }}
                >
                  {/* Dot — sits over the line */}
                  <div
                    className="timeline-dot absolute"
                    style={{ left: "13px", marginTop: "28px", animationDelay: `${i * 120 + 300}ms` }}
                  />

                  <div className="card-glow" />

                  <div className="flex flex-col gap-3 w-full">
                    {/* Top row */}
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="date-badge">{item.date}</span>
                        <span className="type-pill">{item.type}</span>
                      </div>
                      <span className="company-tag">
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#475569", display: "inline-block" }} />
                        {item.company} · {item.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 17, fontWeight: 700,
                      color: "#e2e8f0", margin: 0, lineHeight: 1.3,
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14, color: "#64748b",
                      lineHeight: 1.75, margin: 0, fontWeight: 300,
                    }}>
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                      {item.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(99,216,165,0.4)", flexShrink: 0, marginTop: 7 }} />
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}