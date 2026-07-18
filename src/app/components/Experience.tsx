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

const EXPERIENCES: readonly ExperienceItem[] = [
  {
    title: "Frontend Engineer",
    company: "Netsqure",
    location: "Bangalore, India (Remote)",
    date: "Feb 2025 – Present",
    type: "Full-time",
    description:
      "Architected a performance-optimized multi-tenant SaaS dashboard platform, enhancing rendering speed by 30% through optimized caching and lazy-loading.",
    bullets: [
      "Built a scalable SaaS dashboard for 3,000+ users with dynamic layout engines and role-based access.",
      "Developed a Zustand-powered visual editor for in-dashboard layout customization.",
      "Engineered Redux Toolkit authorization with secure token handling.",
      "Improved Core Web Vitals by 30% via code-splitting, SWR caching, and bundle optimization.",
      "Built a real-time responsive scheduler with optimistic updates.",
      "Developed E-Commerce analytics panels using Next.js for inventory and order management.",
      "Led frontend delivery of large-scale responsive Tailwind CSS layouts."
    ],
  },
  {
    title: "Independent Software Consultant",
    company: "Freelance & Contract",
    location: "Odisha, India (Remote)",
    date: "Apr 2024 – Feb 2025",
    type: "Contract",
    description:
      "Delivered production-grade, high-performance apps for fintech and e-commerce, owning the full-stack architecture and automated Vercel deployment.",
    bullets: [
      "Developed 'Dalal Street' (SEBI-registered app) with secure payment gateways and TypeScript validation.",
      "Built 'Limited Cart' e-commerce platform featuring complex state management and product filtering.",
      "Optimized large-scale tables handling 10,000+ rows with debounce search and client-side pagination.",
      "Managed full development lifecycle from architectural design to automated Vercel CI/CD pipelines."
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Searching Yard Group",
    location: "Odisha, India",
    date: "Jun 2022 – Mar 2024",
    type: "Full-time",
    description:
      "Developed high-volume HRMS/CRM dashboards, optimizing performance by 20% through Vite migration and improving data grid handling.",
    bullets: [
      "Created modular, strongly-typed component libraries to enhance reusability.",
      "Improved development speed by 20% via Vite migration and build optimization.",
      "Managed 10,000+ row datasets with memoized filtering and pagination.",
      "Implemented role-based security and cross-domain authentication systems."
    ],
  },
];


export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
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

        .exp-visible .exp-header    { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .exp-visible .exp-card      { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) both; }
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
        className={`relative w-full lg:pt-28 pt-16 pb-24 overflow-hidden bg-gradient-to-b from-[#0d1526] to-[#070c18] ${
          visible ? "exp-visible" : ""
        }`}
      >
        {/* Background glow */}
        <div className="absolute pointer-events-none w-[500px] h-[400px] bottom-[10%] right-[-80px] bg-[radial-gradient(circle,rgba(99,216,165,0.04)_0%,transparent_70%)] blur-[60px]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[size:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="exp-header flex flex-col items-center gap-4 mb-16">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#63d8a5] inline-block" />
              My Journey
            </span>
            <h2 className="exp-shimmer font-['Syne'] text-[clamp(2rem,5vw,3rem)] font-extrabold text-center m-0">
              Experience
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#63d8a5] to-transparent rounded-sm" />
            <p className="font-['DM_Sans'] text-slate-600 text-sm text-center max-w-[400px] leading-[1.7] m-0">
              Roles and milestones that have shaped my craft
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px overflow-hidden bg-white/[0.04]">
              <div className="timeline-line w-full origin-top bg-[linear-gradient(180deg,#63d8a5,rgba(99,216,165,0.2))]" />
            </div>

            <div className="flex flex-col gap-8">
              {EXPERIENCES.map((item, i) => (
                <div
                  key={`${item.company}-${item.title}`}
                  className="exp-card flex gap-5 items-start ml-10"
                  style={{ animationDelay: `${i * 120 + 200}ms` }}
                >
                  {/* Dot — sits over the line */}
                  {/* <div
                    className="timeline-dot absolute left-[13px] mt-7"
                    style={{ animationDelay: `${i * 120 + 300}ms` }}
                  /> */}

                  <div className="card-glow" />

                  <div className="flex flex-col gap-3 w-full">
                    {/* Top row */}
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="date-badge">{item.date}</span>
                        <span className="type-pill">{item.type}</span>
                      </div>
                      <span className="company-tag">
                        <span className="w-1 h-1 rounded-full bg-slate-600 inline-block" />
                        {item.company} · {item.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Syne'] text-[17px] font-bold text-slate-200 m-0 leading-[1.3]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['DM_Sans'] text-sm text-slate-500 leading-[1.75] m-0 font-light">
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-1 p-0 list-none flex flex-col gap-1.5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="w-[5px] h-[5px] rounded-full bg-[rgba(99,216,165,0.4)] shrink-0 mt-[7px]" />
                          <span className="font-['DM_Sans'] text-[13px] text-slate-600 leading-[1.65]">
                            {bullet}
                          </span>
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