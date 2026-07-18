"use client";

import {
  FileDownload,
  GitHub,
  LinkedIn,
  TrendingFlat,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

interface StatItem {
  value: string;
  label: string;
}

const TECH_STACK: readonly string[] = [
  "Next.js",
  "TypeScript",
  "React.js",
  "Redux Toolkit",
  "SWR",
  "Tailwind CSS",
  "GSAP"
];

const STATS: readonly StatItem[] = [
  { value: "4+", label: "Years exp." },
  { value: "3,000+", label: "Users served" },
  { value: "30%", label: "Perf. boost" },
];

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: MouseEvent): void => {
    const { clientX, clientY } = e;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    if (orb1.current) {
      orb1.current.style.transform = `translate(${(clientX - cx) * 0.03}px, ${(clientY - cy) * 0.03}px)`;
    }
    if (orb2.current) {
      orb2.current.style.transform = `translate(${(clientX - cx) * -0.02}px, ${(clientY - cy) * -0.02}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section * { font-family: 'DM Sans', sans-serif; }
        .hero-section .display-font { font-family: 'Syne', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes orb-drift {
          0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
          50%       { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,216,165,0.35); }
          50%       { box-shadow: 0 0 0 10px rgba(99,216,165,0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .anim-1 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.1s both; }
        .anim-2 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.25s both; }
        .anim-3 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.4s both; }
        .anim-4 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.55s both; }
        .anim-5 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.7s both; }
        .avatar-anim { animation: scaleIn 0.8s cubic-bezier(.22,.68,0,1.2) both; }

        .avatar-ring { animation: ring-pulse 2.6s ease-in-out infinite; }
        .orb-shape { animation: orb-drift 8s ease-in-out infinite; transition: transform 0.6s ease; }

        .name-shimmer {
          background: linear-gradient(100deg, #63d8a5 0%, #a8f0d0 40%, #63d8a5 60%, #3cb87a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          background: #63d8a5;
          color: #0a0f1a;
          border-radius: 100px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 0 0 rgba(99,216,165,0.5);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%);
          transition: transform 0.35s ease;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,216,165,0.35); }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          position: relative;
          overflow: hidden;
          background: transparent;
          color: #e2e8f0;
          border: 1px solid rgba(226,232,240,0.25);
          border-radius: 100px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, border-color 0.2s, background 0.2s;
          backdrop-filter: blur(6px);
        }
        .btn-outline:hover { border-color: rgba(99,216,165,0.5); background: rgba(99,216,165,0.07); transform: translateY(-2px); }

        .btn-icon {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(148,163,184,0.2);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, border-color 0.2s, color 0.2s, background 0.2s;
          backdrop-filter: blur(6px);
        }
        .btn-icon:hover { border-color: rgba(99,216,165,0.5); color: #63d8a5; background: rgba(99,216,165,0.08); transform: translateY(-2px) scale(1.08); }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #63d8a5;
          background: rgba(99,216,165,0.1);
          border: 1px solid rgba(99,216,165,0.2);
          border-radius: 100px;
        }
        .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #63d8a5; animation: ring-pulse 2s ease-in-out infinite; }

        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: transform 0.2s, border-color 0.2s;
        }
        .stat-card:hover { transform: translateY(-3px); border-color: rgba(99,216,165,0.25); }

        .deco-line { width: 48px; height: 2px; background: linear-gradient(90deg, #63d8a5, transparent); border-radius: 2px; }
        .spin-ring { position: absolute; inset: -10px; border: 1px dashed rgba(99,216,165,0.2); border-radius: 50%; animation: spin-slow 18s linear infinite; pointer-events: none; }
      `}</style>

      <section className="hero-section relative flex flex-col items-center justify-center min-h-screen py-16 sm:py-20 px-4 overflow-hidden bg-[linear-gradient(135deg,#070c18_0%,#0d1526_60%,#081020_100%)]">
        {/* Background orbs */}
        <div
          ref={orb1}
          className="orb-shape absolute pointer-events-none w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] -top-20 sm:-top-24 lg:-top-[120px] -right-16 sm:-right-20 blur-[40px] bg-[radial-gradient(circle,rgba(99,216,165,0.07)_0%,transparent_70%)]"
        />
        <div
          ref={orb2}
          className="orb-shape absolute pointer-events-none w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] -bottom-16 sm:-bottom-20 -left-12 sm:-left-16 blur-[50px] bg-[radial-gradient(circle,rgba(56,130,255,0.06)_0%,transparent_70%)]"
        />

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full text-center gap-5 sm:gap-6 lg:gap-7">
          {/* Badge */}
          <div className="anim-1">
            <span className="badge text-[11px] sm:text-xs px-3.5 sm:px-[14px] py-[5px]">
              <span className="badge-dot" />
              Remote (UTC +5:30 / IST Friendly)
            </span>
          </div>

          {/* Avatar */}
          <div className="avatar-anim relative w-[100px] h-[100px] sm:w-[112px] sm:h-[112px] lg:w-[120px] lg:h-[120px]">
            <div className="spin-ring" />
            <div className="avatar-ring relative mx-auto mt-1 w-[92px] h-[92px] sm:w-[104px] sm:h-[104px] lg:w-[112px] lg:h-[112px] rounded-full overflow-hidden border-[2.5px] border-[rgba(99,216,165,0.5)]">
              <Image src="/profile.jpeg" alt="Sasmita Mahanta" fill className="object-cover" />
            </div>
          </div>

          {/* Greeting */}
          <div className="anim-2 flex items-center gap-3">
            <div className="deco-line" />
            <p className="text-slate-400 text-sm font-normal tracking-[0.06em]">Hi, my name is</p>
            <div className="deco-line scale-x-[-1]" />
          </div>

          {/* Name */}
          <div className="anim-3 display-font leading-[1.1]">
            <h1 className="name-shimmer text-[clamp(2.4rem,6vw,4rem)] font-extrabold m-0">
              Sasmita Mahanta
            </h1>
          </div>

          {/* Headline */}
          <div className="anim-3 display-font">
            <h2 className="text-[clamp(1.5rem,4vw,2.4rem)] font-bold text-slate-200 m-0 leading-[1.25]">
              Frontend Engineer
            </h2>
          </div>

          {/* Tech chips */}
          <div className="anim-3 flex flex-wrap gap-2 justify-center px-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="text-[11px] sm:text-xs font-medium text-slate-500 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 sm:px-[12px] py-1 tracking-[0.03em]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="anim-4">
            <p className="text-slate-500 text-sm sm:text-base leading-[1.75] max-w-[540px] mx-auto font-light tracking-[0.01em] px-2">
              4+ years of professional experience architecting performance-optimized SaaS applications
              and enterprise-grade dashboard systems. Architected an Event Management Platform
              serving{" "}
              <span className="text-slate-400 font-normal">3,000+ active users</span>
              {" "}— successfully improving UI rendering performance metrics by{" "}
              <span className="text-slate-400 font-normal">30%</span> and
              reducing load time thresholds by{" "}
              <span className="text-slate-400 font-normal">20%</span> through custom SWR caching and modular chunk architectures.
            </p>
          </div>

          {/* Stats */}
          <div className="anim-4 flex gap-3 sm:gap-4 flex-wrap justify-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card px-4 sm:px-[22px] py-3 sm:py-4">
                <p className="display-font text-emerald-400 text-lg sm:text-[22px] font-extrabold m-0">
                  {stat.value}
                </p>
                <p className="text-slate-600 text-[11px] sm:text-xs font-medium tracking-[0.06em] uppercase mt-0.5 mb-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="anim-5 flex flex-wrap gap-3 justify-center items-center">
            <button type="button" className="btn-primary text-sm px-5 sm:px-[26px] py-3 sm:py-[12px]">
              Contact me <TrendingFlat fontSize="small" />
            </button>
            <Link href="/Sasmita_Mahanta_4YOE.pdf" download>
              <button type="button" className="btn-outline text-sm px-5 sm:px-[26px] py-3 sm:py-[12px]">
                Download CV <FileDownload fontSize="small" />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/sasmita-mahanta-7b24801a7/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn-icon p-2.5" aria-label="LinkedIn">
                <LinkedIn fontSize="small" />
              </button>
            </Link>
            <Link href="https://github.com/Coader-Sasmi" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn-icon p-2.5" aria-label="GitHub">
                <GitHub fontSize="small" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}