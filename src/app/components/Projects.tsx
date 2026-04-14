"use client";

import { useState } from "react";

const projects = [
    {
        id: 1,
        tag: "Production Scale",
        tagColor: "bg-purple-500/20 text-purple-400",
        title: "Event Management Platform",
        description:
            "Production-scale multi-tenant admin dashboard serving 3,000+ users and 15+ administrators with RBAC, real-time calendar with concurrent scheduling conflict resolution, and SWR-based API caching.",
        metrics: ["3,000+ Users", "30% Faster Rendering", "15+ Admins"],
        tech: ["React.js", "Vite", "TypeScript", "Redux Toolkit", "SWR", "MUI"],
        live: null,
        github: null,
        liveLabel: "Private — Production",
        color: "from-purple-500/10 to-blue-500/10",
        border: "hover:border-purple-500/50",
    },
    {
        id: 2,
        tag: "Full CRUD Dashboard",
        tagColor: "bg-blue-500/20 text-blue-400",
        title: "Product Management Dashboard",
        description:
            "Full CRUD admin dashboard with real-time state updates, product analytics with Recharts, complex form validation with React Hook Form, and search, filtering & pagination for large datasets.",
        metrics: ["Full CRUD", "Charts & Analytics", "React Hook Form"],
        tech: ["Next.js", "TypeScript", "Redux Toolkit", "MUI", "Recharts", "Axios"],
        live: "https://product-management-dashboard-webapp.vercel.app/dashboard",
        github: "https://github.com/Coader-Sasmi/product-management-dashboard",
        liveLabel: "Live Demo",
        color: "from-blue-500/10 to-cyan-500/10",
        border: "hover:border-blue-500/50",
    },
    {
        id: 3,
        tag: "E-Commerce · Client Project",
        tagColor: "bg-orange-500/20 text-orange-400",
        title: "Limited Cart",
        description:
            "Multi-category E-Commerce platform with gender-based sub-filtering, cart state management, and fully responsive UI across 6 product categories including Furniture, Footwear, Bags and more.",
        metrics: ["Client Project", "6 Categories", "Cart System"],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
        live: "https://limited-cart.vercel.app/",
        github: "https://github.com/Coader-Sasmi/limited_cart",
        liveLabel: "Live Demo",
        color: "from-orange-500/10 to-yellow-500/10",
        border: "hover:border-orange-500/50",
    },
    {
        id: 4,
        tag: "Enterprise Dashboard",
        tagColor: "bg-green-500/20 text-green-400",
        title: "HRMS & CRM Dashboard",
        description:
            "End-to-end HRMS and CRM platform built from scratch at Searching Yard Group — multi-role access system, ApexCharts for HR analytics and sales metrics, handling 10,000+ records with pagination, filtering and search.",
        metrics: ["10,000+ Records", "Multi-Role RBAC", "ApexCharts"],
        tech: ["Next.js", "TypeScript", "Axios", "ApexCharts", "Redux", "Vite"],
        live: null,
        github: null,
        liveLabel: "Internal — Company",
        color: "from-green-500/10 to-teal-500/10",
        border: "hover:border-green-500/50",
    },
];

export default function Projects() {
    const [, setHovered] = useState<number | null>(null);

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
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .project-card:hover {
          border-color: rgba(99,216,165,0.25);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .project-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          background: #63d8a5;
          color: #0a0f1a;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .project-btn-primary:hover {
          background: #4fc48f;
          transform: translateY(-1px);
        }

        .project-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          color: #94a3b8;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }
        .project-btn-secondary:hover {
          border-color: rgba(255,255,255,0.25);
          color: #e2e8f0;
        }

        .project-btn-disabled {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.06);
          color: #334155;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: default;
        }
      `}</style>

            <section
                id="projects"
                className="relative w-full lg:pt-28 pt-16 pb-20 overflow-hidden"
                style={{ background: "linear-gradient(180deg, #0d1526 0%, #070c18 100%)" }}
            >
                {/* Background glow */}
                <div className="absolute pointer-events-none" style={{
                    width: 600, height: 400,
                    top: "10%", left: "50%",
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
                    <div className="flex flex-col items-center gap-4 mb-16">
                        <span className="section-label">
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#63d8a5", display: "inline-block" }} />
                            What I&apos;ve Built
                        </span>
                        <h2
                            className="projects-shimmer"
                            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textAlign: "center", margin: 0 }}
                        >
                            Featured Projects
                        </h2>
                        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #63d8a5, transparent)", borderRadius: 2 }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 14, textAlign: "center", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
                            Real-world projects delivered for clients and built for production — showcasing expertise in React, Next.js, TypeScript, and scalable frontend architecture.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`project-card bg-gradient-to-br ${project.color} ${project.border}`}
                                onMouseEnter={() => setHovered(project.id)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ padding: "24px" }}
                            >
                                {/* Tag */}
                                <span
                                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${project.tagColor}`}
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {project.tag}
                                </span>

                                {/* Title */}
                                <h3 style={{
                                    fontFamily: "'Syne', sans-serif",
                                    color: "#e2e8f0",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    margin: "0 0 10px",
                                }}>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#475569",
                                    fontSize: 13.5,
                                    lineHeight: 1.7,
                                    margin: "0 0 14px",
                                    fontWeight: 300,
                                }}>
                                    {project.description}
                                </p>

                                {/* Metrics */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.metrics.map((metric) => (
                                        <span
                                            key={metric}
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: 12,
                                                padding: "3px 10px",
                                                borderRadius: 6,
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                color: "#64748b",
                                            }}
                                        >
                                            ✦ {metric}
                                        </span>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: 12,
                                                padding: "3px 10px",
                                                borderRadius: 6,
                                                background: "rgba(99,216,165,0.06)",
                                                border: "1px solid rgba(99,216,165,0.12)",
                                                color: "#63d8a5",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 flex-wrap">
                                    {project.live ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn-primary"
                                        >
                                            🌐 {project.liveLabel}
                                        </a>
                                    ) : (
                                        <span className="project-btn-disabled">
                                            🔒 {project.liveLabel}
                                        </span>
                                    )}

                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn-secondary"
                                        >
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    ) : (
                                        <span className="project-btn-disabled">
                                            🏢 Internal Project
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </section >
        </>
    );
}