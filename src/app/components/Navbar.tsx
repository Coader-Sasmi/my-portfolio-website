"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLink } from "../config";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .nav-root * { font-family: 'DM Sans', sans-serif; }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #e2e8f0;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .logo-text:hover { color: #63d8a5; }
        .logo-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #63d8a5;
          display: inline-block;
          margin-left: 1px;
          margin-bottom: 3px;
          vertical-align: bottom;
        }

        /* ── Desktop ── */
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .desk-nav { display: none; }
        @media (min-width: 768px) { .desk-nav { display: flex; } }

        .desk-pill {
          background: rgba(10, 15, 28, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          border-radius: 100px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: box-shadow 0.3s ease;
          animation: navSlideDown 0.6s cubic-bezier(0.22, 0.68, 0, 1.2) both;
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 10px 20px;
        }
        .desk-pill:hover {
          box-shadow: 0 4px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(99,216,165,0.08), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .nav-divider {
          width: 1px; height: 16px;
          background: rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .desk-link {
          position: relative;
          font-size: 13.5px;
          font-weight: 500;
          color: #64748b;
          letter-spacing: 0.01em;
          padding: 5px 2px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .desk-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #63d8a5, #3cb87a);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.22, 0.68, 0, 1.2);
          transform-origin: center;
        }
        .desk-link:hover { color: #cbd5e1; }
        .desk-link:hover::after { transform: scaleX(1); }
        .desk-link.active { color: #63d8a5; }
        .desk-link.active::after { transform: scaleX(1); }

        .nav-cta {
          font-size: 13px;
          font-weight: 600;
          color: #0a0f1a;
          background: #63d8a5;
          border-radius: 100px;
          padding: 7px 18px;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          white-space: nowrap;
          cursor: pointer;
          display: inline-block;
        }
        .nav-cta:hover {
          background: #7ae4b4;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(99,216,165,0.3);
        }
        .nav-cta:active { transform: translateY(0); }

        /* ── Mobile ── */
        @media (min-width: 768px) { .mob-nav { display: none !important; } }

        .mob-nav {
          position: sticky;
          top: 0;
          z-index: 9000;
          padding: 12px 16px;
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
          border-bottom: 1px solid transparent;
        }
        .mob-nav.scrolled {
          background: rgba(8, 13, 24, 0.88);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border-color: rgba(255,255,255,0.06);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }

        .mob-menu-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .mob-menu-btn:hover {
          background: rgba(99,216,165,0.08);
          border-color: rgba(99,216,165,0.3);
        }
        .mob-menu-btn:active { transform: scale(0.92); }

        .mob-drawer {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s cubic-bezier(0.22, 0.68, 0, 1.1), opacity 0.3s ease;
        }
        .mob-drawer.open { max-height: 480px; opacity: 1; }

        .mob-drawer-inner {
          margin-top: 10px;
          background: rgba(10, 15, 28, 0.85);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 8px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }

        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          padding: 11px 14px;
          border-radius: 12px;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.01em;
        }
        .mob-link:hover { background: rgba(99,216,165,0.06); color: #cbd5e1; }
        .mob-link.active { background: rgba(99,216,165,0.08); color: #63d8a5; }
        .mob-link .arrow {
          width: 16px; height: 16px;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
          color: #63d8a5;
        }
        .mob-link:hover .arrow, .mob-link.active .arrow { opacity: 1; transform: translateX(0); }

        .mob-drawer-footer {
          margin-top: 4px;
          padding: 10px 14px 4px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .mob-cta {
          display: block;
          text-align: center;
          font-size: 13.5px;
          font-weight: 600;
          color: #0a0f1a;
          background: #63d8a5;
          border-radius: 100px;
          padding: 10px 0;
          transition: background 0.2s, transform 0.2s;
        }
        .mob-cta:active { transform: scale(0.97); }

        .bar {
          display: block;
          width: 18px; height: 2px;
          background: #94a3b8;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, background 0.3s ease;
        }
        .bar-wrap { display: flex; flex-direction: column; gap: 4px; }
        .bar-wrap.open .bar:nth-child(1) { transform: translateY(6px) rotate(45deg); background: #63d8a5; }
        .bar-wrap.open .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .bar-wrap.open .bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); background: #63d8a5; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mob-drawer.open .mob-link { animation: slideIn 0.3s ease both; }
        .mob-drawer.open a:nth-child(1) .mob-link { animation-delay: 0.04s; }
        .mob-drawer.open a:nth-child(2) .mob-link { animation-delay: 0.09s; }
        .mob-drawer.open a:nth-child(3) .mob-link { animation-delay: 0.14s; }
        .mob-drawer.open a:nth-child(4) .mob-link { animation-delay: 0.19s; }
        .mob-drawer.open a:nth-child(5) .mob-link { animation-delay: 0.24s; }
      `}</style>

      {/* ── DESKTOP ── */}
      <header className="desk-nav sticky top-0 z-[9000] pt-4 px-4 justify-center nav-root">
        <div className="desk-pill">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo.png" alt="logo" width={26} height={26} style={{ objectFit: "contain" }} />
            <span className="logo-text">
              Sasmita<span className="logo-dot" />dev
            </span>
          </Link>

          <div className="nav-divider" />

          <nav className="flex items-center gap-6">
            {navLink?.map((item, i) => (
              <Link key={i} href={item?.path}>
                <span className={`desk-link ${pathname === item?.path ? "active" : ""}`}>
                  {item?.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="nav-divider" />

          <Link href="#contact">
            <span className="nav-cta">Hire me</span>
          </Link>
        </div>
      </header>

      {/* ── MOBILE ── */}
      <nav className={`mob-nav nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={26} height={26} style={{ objectFit: "contain" }} />
            <span className="logo-text">
              Sasmita<span className="logo-dot" />dev
            </span>
          </Link>

          <button className="mob-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className={`bar-wrap ${open ? "open" : ""}`}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </button>
        </div>

        <div className={`mob-drawer ${open ? "open" : ""}`}>
          <div className="mob-drawer-inner">
            {navLink?.map((item, i) => (
              <Link key={i} href={item?.path}>
                <div className={`mob-link ${pathname === item?.path ? "active" : ""}`}>
                  {item?.label}
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
            <div className="mob-drawer-footer">
              <Link href="#contact">
                <span className="mob-cta">Let&apos;s talk →</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}