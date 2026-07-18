"use client";

import { GitHub, KeyboardArrowUp, LinkedIn, MailOutline } from "@mui/icons-material";
import type { SvgIconComponent } from "@mui/icons-material";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  Icon: SvgIconComponent;
}

const NAV_LINKS: readonly NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS: readonly SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sasmita-mahanta-7b24801a7/", Icon: LinkedIn },
  { label: "GitHub", href: "https://github.com/Coader-Sasmi", Icon: GitHub },
  { label: "Email", href: "mailto:mahantasasmita326@gmail.com", Icon: MailOutline },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    const node = footerRef.current;
    if (node) obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const scrollToTop = useCallback((): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25%       { transform: scale(1.3); }
          50%       { transform: scale(1); }
          75%       { transform: scale(1.15); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .footer-visible .f-anim-1 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .footer-visible .f-anim-2 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.18s both; }
        .footer-visible .f-anim-3 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.3s both; }

        .footer-name-shimmer {
          background: linear-gradient(100deg, #63d8a5 0%, #a8f0d0 40%, #63d8a5 60%, #3cb87a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }

        .footer-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400;
          color: #475569;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
          position: relative;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #63d8a5;
          transition: width 0.25s ease;
        }
        .footer-nav-link:hover { color: #94a3b8; }
        .footer-nav-link:hover::after { width: 100%; }

        .footer-social-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #475569;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
        }
        .footer-social-btn:hover {
          border-color: rgba(99,216,165,0.4);
          color: #63d8a5;
          background: rgba(99,216,165,0.08);
          transform: translateY(-3px);
        }

        .back-to-top {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(99,216,165,0.1);
          border: 1px solid rgba(99,216,165,0.2);
          color: #63d8a5;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .back-to-top:hover {
          background: rgba(99,216,165,0.18);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(99,216,165,0.2);
        }

        .heart { animation: heartbeat 1.8s ease-in-out infinite; display: inline-block; }

        .footer-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,216,165,0.15), transparent);
        }

        .footer-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: #334155; display: inline-block;
        }

        .footer-contact-email {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #63d8a5;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .footer-contact-email:hover { opacity: 0.75; }

        .footer-contact-phone {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-phone:hover { color: #94a3b8; }
      `}</style>

      <footer
        ref={footerRef}
        className={`relative w-full overflow-hidden bg-gradient-to-b from-[#070c18] to-[#040810] ${
          visible ? "footer-visible" : ""
        }`}
      >
        {/* Top glow */}
        <div className="absolute pointer-events-none w-[420px] h-[160px] sm:w-[520px] sm:h-[180px] lg:w-[600px] lg:h-[200px] top-0 left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(99,216,165,0.04)_0%,transparent_70%)] blur-[40px]" />

        {/* Top gradient line */}
        <div className="footer-divider" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col gap-8 sm:gap-10">
          {/* Main row */}
          <div className="f-anim-1 flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-3 max-w-xs">
              <h3 className="footer-name-shimmer font-['Syne'] text-[22px] font-extrabold m-0">
                Sasmita Mahanta
              </h3>
              <p className="font-['DM_Sans'] text-slate-700 text-[13px] leading-[1.7] m-0 font-light">
                Frontend Engineer specialising in React.js, Next.js, TypeScript & WordPress.
                Building performant, scalable web applications and CMS-based websites.
              </p>
              {/* Socials */}
              <div className="flex gap-3 mt-1">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={label}
                  >
                    <Icon className="text-lg" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-3">
              <p className="font-['Syne'] text-slate-200 text-xs font-bold tracking-[0.1em] uppercase m-0">
                Navigation
              </p>
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact snapshot */}
            <div className="flex flex-col gap-3">
              <p className="font-['Syne'] text-slate-200 text-xs font-bold tracking-[0.1em] uppercase m-0">
                Contact
              </p>
              <Link href="mailto:mahantasasmita326@gmail.com" className="footer-contact-email">
                mahantasasmita326@gmail.com
              </Link>
              <Link href="tel:+917008289045" className="footer-contact-phone">
                +91-70082-89045
              </Link>
              <p className="font-['DM_Sans'] text-[13px] text-slate-700 m-0">
                Odisha, India · Remote
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="f-anim-2 footer-divider" />

          {/* Bottom bar */}
          <div className="f-anim-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="font-['DM_Sans'] text-[13px] text-slate-700 font-light">
                Made with
              </span>
              <span className="heart">❤️</span>
              <span className="font-['DM_Sans'] text-[13px] text-slate-700 font-light">by</span>
              <span className="footer-name-shimmer font-['Syne'] text-[13px] font-bold">
                Sasmita
              </span>
              <span className="footer-dot" />
              <span className="font-['DM_Sans'] text-[13px] text-slate-700 font-light">
                © {CURRENT_YEAR} All rights reserved.
              </span>
            </div>

            {/* Back to top */}
            <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <KeyboardArrowUp className="text-xl" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}