"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  metrics: string[];
  tech: string[];
  live: string | null;
  github: string | null;
  liveLabel: string;
  color: string;
  border: string;
}

const PROJECTS: readonly Project[] = [
  {
    id: 1,
    tag: "Fintech Platform · Client",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    title: "Dalal Street — SEBI Stock Research",
    description:
      "Production-grade investment web architecture integrating secure third-party payment gateways, strict TypeScript-validated reactive forms, and multi-tier responsive subscription processing pipelines.",
    metrics: ["Production Live", "Payment Gateways", "Strict Typing"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Axios"],
    live: "https://dalal-street-frontend.vercel.app/",
    github: "https://github.com/Coader-Sasmi",
    liveLabel: "Live Demo",
    color: "from-emerald-500/10 to-teal-500/10",
    border: "hover:border-emerald-500/50",
  },
  {
    id: 2,
    tag: "Full CRUD Dashboard",
    tagColor: "bg-blue-500/20 text-blue-400",
    title: "Product Management Analytics Hub",
    description:
      "Comprehensive operational control client featuring complete real-time state synchronization, complex structural form validations via React Hook Form, and metric telemetry dashboards styled natively via MUI.",
    metrics: ["Full CRUD", "Telemetry Charts", "Hook Form State"],
    tech: ["React", "TypeScript", "Redux Toolkit", "MUI", "Recharts", "Axios"],
    live: "https://product-management-dashboard-webapp.vercel.app/dashboard",
    github: "https://github.com/Coader-Sasmi/product-management-dashboard",
    liveLabel: "Live Demo",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-500/50",
  },
  {
    id: 3,
    tag: "Enterprise NDA · Production",
    tagColor: "bg-purple-500/20 text-purple-400",
    title: "Multi-Tenant Event Platform",
    description:
      "Architected core administration dashboards serving 3,000+ active records and 15+ admin portals. Implemented secure RBAC modules and optimistic calendar systems utilizing optimized SWR memory boundaries.",
    metrics: ["3,000+ Records", "30% UI Paint Boost", "Multi-Tenant RBAC"],
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "SWR", "MUI", "Vite"],
    live: null,
    github: null,
    liveLabel: "NDA Verification Ready",
    color: "from-purple-500/10 to-indigo-500/10",
    border: "hover:border-purple-500/50",
  },
  {
    id: 4,
    tag: "E-Commerce Client Ecosystem",
    tagColor: "bg-orange-500/20 text-orange-400",
    title: "Limited Cart Architecture",
    description:
      "Multi-category commercial storefront featuring client-side cart managers, state context bounds, and unified responsive presentation layouts extending across 6 distinct catalog sets.",
    metrics: ["Client Architecture", "6 Core Categories", "Context States"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Context API"],
    live: "https://limited-cart.vercel.app/",
    github: "https://github.com/Coader-Sasmi/limited_cart",
    liveLabel: "Live Demo",
    color: "from-orange-500/10 to-yellow-500/10",
    border: "hover:border-orange-500/50",
  },
  {
    id: 5,
    tag: "Enterprise Internal Dashboard",
    tagColor: "bg-slate-500/20 text-slate-400",
    title: "HRMS & CRM Dashboard Core",
    description:
      "Optimized large-scale analytical data layers handling 10,000+ active record datasets. Integrated debounce search mechanisms, cursor-based pagination structures, and custom ApexCharts dashboards.",
    metrics: ["10,000+ Data Rows", "Granular Access", "ApexCharts Layer"],
    tech: ["React", "TypeScript", "ApexCharts", "Redux", "Axios", "Vite"],
    live: null,
    github: null,
    liveLabel: "Multi-Role Internal Tool",
    color: "from-slate-500/10 to-zinc-500/10",
    border: "hover:border-slate-500/50",
  },
];

export default function Projects() {
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

        .projects-visible .projects-header { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .projects-visible .project-card     { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) both; }

        .projects-shimmer {
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

        .project-card {
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }
        .project-card:hover {
          border-color: rgba(99,216,165,0.25);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .card-hover-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 0%, rgba(255,255,255,0.02) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          border-radius: 20px;
        }
        .project-card:hover .card-hover-glow { opacity: 1; }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#0d1526] to-[#070c18] ${
          visible ? "projects-visible" : ""
        }`}
      >
        {/* Ambient Background Glow Orb */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[500px] lg:w-[600px] h-[280px] sm:h-[350px] lg:h-[400px] pointer-events-none bg-[radial-gradient(ellipse,rgba(99,216,165,0.04)_0%,transparent_70%)] blur-[60px]" />

        {/* Production Grid Texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="projects-header flex flex-col items-center gap-4 mb-12 sm:mb-16 text-center">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#63d8a5] inline-block shadow-[0_0_8px_#63d8a5]" />
              What I&apos;ve Built
            </span>

            <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold text-white tracking-tight projects-shimmer m-0">
              Featured Projects
            </h2>

            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#63d8a5] to-transparent rounded-sm" />

            <p className="font-['DM_Sans'] text-slate-500 text-sm max-w-lg leading-relaxed m-0 font-light px-2">
              Real-world platforms and enterprise architectures built for production —
              showcasing expertise in React, Next.js, strict type safety, and scalable UI
              systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className={`project-card relative flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br backdrop-blur-md shadow-xl ${project.color} ${project.border}`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="card-hover-glow" />

                <div>
                  {/* Meta Category Tag */}
                  <span
                    className={`inline-block font-['DM_Sans'] text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full mb-4 ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-['Syne'] text-lg font-bold text-slate-200 m-0 mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Narrative Summary Description */}
                  <p className="font-['DM_Sans'] text-[13.5px] text-slate-500 leading-relaxed font-light m-0 mb-4">
                    {project.description}
                  </p>

                  {/* Core Quantitative Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="font-['DM_Sans'] text-[11px] font-medium tracking-wide text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-lg px-2.5 py-1 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-200 cursor-default"
                      >
                        ✦ {metric}
                      </span>
                    ))}
                  </div>

                  {/* Framework Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-['DM_Sans'] text-[11px] font-semibold text-[#63d8a5] bg-[rgba(99,216,165,0.04)] border border-[rgba(99,216,165,0.12)] rounded-lg px-2.5 py-1 hover:bg-[rgba(99,216,165,0.08)] hover:border-[rgba(99,216,165,0.25)] transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Functional CTA Actions Layout */}
                <div className="flex gap-3 flex-wrap pt-2 relative z-10">
                  {/* Live Client Verification Check */}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs font-semibold text-[#0a0f1a] bg-[#63d8a5] hover:bg-[#4ed095] px-4 py-2 rounded-full transition-colors duration-200 no-underline shadow-md shadow-[rgba(99,216,165,0.15)] active:scale-95"
                    >
                      🌐 {project.liveLabel}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs font-medium text-slate-600 bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full cursor-not-allowed select-none">
                      🔒 {project.liveLabel}
                    </span>
                  )}

                  {/* GitHub Repository Verification Check */}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs font-medium text-slate-200 bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.2] px-4 py-2 rounded-full transition-all duration-200 no-underline active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs font-medium text-slate-600 bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full cursor-not-allowed select-none">
                      🏢 Secure Core Tool
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}