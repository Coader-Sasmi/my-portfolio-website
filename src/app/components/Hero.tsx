"use client";

import {
  FileDownload,
  GitHub,
  LinkedIn,
  TrendingFlat,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      if (orb1.current) {
        orb1.current.style.transform = `translate(${(clientX - cx) * 0.03}px, ${(clientY - cy) * 0.03}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${(clientX - cx) * -0.02}px, ${(clientY - cy) * -0.02}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

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

        .avatar-ring {
          animation: ring-pulse 2.6s ease-in-out infinite;
        }
        .orb-shape {
          animation: orb-drift 8s ease-in-out infinite;
          transition: transform 0.6s ease;
        }
        .name-shimmer {
          background: linear-gradient(
            100deg,
            #63d8a5 0%,
            #a8f0d0 40%,
            #63d8a5 60%,
            #3cb87a 100%
          );
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
          padding: 12px 26px;
          font-weight: 600;
          font-size: 15px;
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
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99,216,165,0.35);
        }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          position: relative;
          overflow: hidden;
          background: transparent;
          color: #e2e8f0;
          border: 1px solid rgba(226,232,240,0.25);
          border-radius: 100px;
          padding: 12px 26px;
          font-weight: 500;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, border-color 0.2s, background 0.2s;
          backdrop-filter: blur(6px);
        }
        .btn-outline:hover {
          border-color: rgba(99,216,165,0.5);
          background: rgba(99,216,165,0.07);
          transform: translateY(-2px);
        }

        .btn-icon {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(148,163,184,0.2);
          border-radius: 100px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, border-color 0.2s, color 0.2s, background 0.2s;
          backdrop-filter: blur(6px);
        }
        .btn-icon:hover {
          border-color: rgba(99,216,165,0.5);
          color: #63d8a5;
          background: rgba(99,216,165,0.08);
          transform: translateY(-2px) scale(1.08);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #63d8a5;
          background: rgba(99,216,165,0.1);
          border: 1px solid rgba(99,216,165,0.2);
          border-radius: 100px;
          padding: 5px 14px;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #63d8a5;
          animation: ring-pulse 2s ease-in-out infinite;
        }

        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 16px 22px;
          backdrop-filter: blur(10px);
          transition: transform 0.2s, border-color 0.2s;
        }
        .stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(99,216,165,0.25);
        }

        .deco-line {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #63d8a5, transparent);
          border-radius: 2px;
        }
        .spin-ring {
          position: absolute; inset: -10px;
          border: 1px dashed rgba(99,216,165,0.2);
          border-radius: 50%;
          animation: spin-slow 18s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <section
        className="hero-section relative flex flex-col items-center justify-center min-h-screen py-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #070c18 0%, #0d1526 60%, #081020 100%)" }}
      >
        {/* Background orbs */}
        <div
          ref={orb1}
          className="orb-shape absolute pointer-events-none"
          style={{
            width: 520, height: 520,
            top: "-120px", right: "-80px",
            background: "radial-gradient(circle, rgba(99,216,165,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          ref={orb2}
          className="orb-shape absolute pointer-events-none"
          style={{
            width: 400, height: 400,
            bottom: "-80px", left: "-60px",
            background: "radial-gradient(circle, rgba(56,130,255,0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full text-center gap-7">
          {/* Badge */}
          <div className="anim-1">
            <span className="badge">
              <span className="badge-dot" />
              Available for work
            </span>
          </div>

          {/* Avatar */}
          {/* Avatar */}
          <div className="avatar-anim relative" style={{ width: 120, height: 120 }}>
            <div className="spin-ring" />
            <div
              className="avatar-ring"
              style={{
                width: 112,
                height: 112,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2.5px solid rgba(99,216,165,0.5)",
                margin: "4px auto",
                position: "relative",
              }}
            >
              <Image
                src="/profile.jpeg"
                alt="Sasmita Mahanta"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="anim-2 flex items-center gap-3">
            <div className="deco-line" />
            <p style={{ color: "#94a3b8", fontSize: 15, fontWeight: 400, letterSpacing: "0.06em" }}>
              Hi, my name is
            </p>
            <div className="deco-line" style={{ transform: "scaleX(-1)" }} />
          </div>

          {/* Name */}
          <div className="anim-3 display-font" style={{ lineHeight: 1.1 }}>
            <h1 className="name-shimmer" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, margin: 0 }}>
              Sasmita Mahanta
            </h1>
          </div>

          {/* Headline */}
          <div className="anim-3 display-font">
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "#e2e8f0",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Product-focused{" "}
              <span style={{ color: "#475569" }}>Frontend Engineer</span>
            </h2>
          </div>

          {/* Tech chips */}
          <div className="anim-3 flex flex-wrap gap-2 justify-center">
            {["React.js", "Next.js", "TypeScript", "Redux Toolkit", "REST APIs"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#64748b",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 100,
                  padding: "4px 12px",
                  letterSpacing: "0.03em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="anim-4">
            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.75,
                maxWidth: 540,
                margin: "0 auto",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              3.8+ years building scalable web applications and dashboard platforms.
              Led development of an event platform serving{" "}
              <span style={{ color: "#94a3b8", fontWeight: 400 }}>3,000+ users</span>,
              improving UI performance by{" "}
              <span style={{ color: "#94a3b8", fontWeight: 400 }}>30%</span> and reducing
              load time by{" "}
              <span style={{ color: "#94a3b8", fontWeight: 400 }}>20%</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="anim-4 flex gap-4 flex-wrap justify-center">
            {[
              { value: "3.8+", label: "Years exp." },
              { value: "3,000+", label: "Users served" },
              { value: "30%", label: "Perf. boost" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <p className="display-font" style={{ color: "#63d8a5", fontSize: 22, fontWeight: 800, margin: 0 }}>{s.value}</p>
                <p style={{ color: "#475569", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", margin: "2px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="anim-5 flex flex-wrap gap-3 justify-center items-center">
            <button className="btn-primary">
              Contact me <TrendingFlat fontSize="small" />
            </button>
            <Link href="/Sasmita_Mahanta_Frontend_Engineer_3.8yrs.pdf" download>
              <button className="btn-outline">
                Download CV <FileDownload fontSize="small" />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/sasmita-mahanta-7b24801a7/" target="_blank">
              <button className="btn-icon" aria-label="LinkedIn">
                <LinkedIn fontSize="small" />
              </button>
            </Link>
            <Link href="https://github.com/Coader-Sasmi" target="_blank">
              <button className="btn-icon" aria-label="GitHub">
                <GitHub fontSize="small" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}