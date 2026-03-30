"use client";

import { GitHub, LinkedIn, LocationOn, MailOutline, Send } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";

// ── ContactForm ────────────────────────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: yup.object({
      name: yup.string().required("Name is required.").min(3, "Min 3 characters").max(100, "Max 100 characters"),
      email: yup.string().required("Email is required.").email("Enter a valid email"),
      message: yup.string().required("Message is required.").min(15, "Min 15 characters").max(500, "Max 500 characters"),
    }),
    onSubmit: async (values) => {
      try {
        setError("");
        
        // Send email using EmailJS
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            to_email: process.env.NEXT_PUBLIC_YOUR_EMAIL || "",
          }
        );

        formik.resetForm();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      } catch (err) {
        setError("Failed to send message. Please try again.");
        console.error("Email error:", err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Name + Email row */}
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="w-full flex flex-col gap-1">
          <label className="contact-label">Name *</label>
          <input
            className={`contact-input ${formik.touched.name && formik.errors.name ? "contact-input-error" : ""}`}
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Jane Doe"
          />
          {formik.touched.name && formik.errors.name && (
            <span className="contact-error">{formik.errors.name}</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="contact-label">Email *</label>
          <input
            className={`contact-input ${formik.touched.email && formik.errors.email ? "contact-input-error" : ""}`}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="jane@example.com"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="contact-error">{formik.errors.email}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="contact-label">Message *</label>
        <textarea
          className={`contact-input resize-none ${formik.touched.message && formik.errors.message ? "contact-input-error" : ""}`}
          style={{ height: 130 }}
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder="Tell me about your project or just say hi..."
        />
        <div className="flex justify-between items-center">
          {formik.touched.message && formik.errors.message ? (
            <span className="contact-error">{formik.errors.message}</span>
          ) : (
            <span />
          )}
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: formik.values.message.length > 450 ? "#f87171" : "#334155" }}>
            {formik.values.message.length}/500
          </span>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 mt-1">
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <span className="submit-spinner" />
          ) : (
            <>
              Send Message <Send style={{ fontSize: 16 }} />
            </>
          )}
        </button>
        {submitted && (
          <span className="success-msg">
            ✓ Message sent!
          </span>
        )}
        {error && (
          <span style={{ color: "#ef4444", fontSize: 14 }}>
            {error}
          </span>
        )}
      </div>
    </form>
  );
}

// ── Contact section ────────────────────────────────────────────────────────────

export default function Contact() {
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
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes success-in {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,216,165,0.3); }
          50%       { box-shadow: 0 0 0 8px rgba(99,216,165,0); }
        }

        .contact-visible .contact-header { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
        .contact-visible .contact-left   { animation: fadeLeft  0.7s cubic-bezier(.22,.68,0,1.2) 0.15s both; }
        .contact-visible .contact-right  { animation: fadeRight 0.7s cubic-bezier(.22,.68,0,1.2) 0.25s both; }

        .contact-shimmer {
          background: linear-gradient(100deg, #e2e8f0 0%, #fff 40%, #e2e8f0 60%, #94a3b8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #63d8a5;
          background: rgba(99,216,165,0.08);
          border: 1px solid rgba(99,216,165,0.18);
          border-radius: 100px; padding: 5px 16px;
        }

        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s;
        }
        .glass-card:hover {
          border-color: rgba(99,216,165,0.15);
        }

        /* Form inputs */
        .contact-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          color: #94a3b8; letter-spacing: 0.03em;
        }
        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 300;
          color: #e2e8f0;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          caret-color: #63d8a5;
        }
        .contact-input::placeholder { color: #334155; }
        .contact-input:focus {
          border-color: rgba(99,216,165,0.45);
          background: rgba(99,216,165,0.04);
          box-shadow: 0 0 0 3px rgba(99,216,165,0.08);
        }
        .contact-input-error {
          border-color: rgba(248,113,113,0.5) !important;
          box-shadow: 0 0 0 3px rgba(248,113,113,0.08) !important;
        }
        .contact-error {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; color: #f87171;
        }

        /* Submit button */
        .contact-submit-btn {
          position: relative; overflow: hidden;
          background: #63d8a5; color: #0a0f1a;
          border-radius: 100px; padding: 12px 28px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 14px;
          display: inline-flex; align-items: center; gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .contact-submit-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%);
          transition: transform 0.35s ease;
        }
        .contact-submit-btn:hover::before { transform: translateX(0); }
        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99,216,165,0.35);
        }
        .contact-submit-btn:disabled {
          opacity: 0.7; cursor: not-allowed; transform: none;
        }
        .submit-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(10,15,26,0.3);
          border-top-color: #0a0f1a;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        .success-msg {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          color: #63d8a5;
          animation: success-in 0.4s ease both;
        }

        /* Contact info cards */
        .info-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          cursor: default;
        }
        .info-row:hover {
          border-color: rgba(99,216,165,0.25);
          background: rgba(99,216,165,0.04);
          transform: translateX(4px);
        }
        .info-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          background: rgba(99,216,165,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #63d8a5;
        }

        /* Social buttons */
        .social-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          color: #64748b;
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: rgba(99,216,165,0.4);
          color: #63d8a5;
          background: rgba(99,216,165,0.06);
          transform: translateY(-2px);
        }

        .accent-line {
          width: 2px;
          background: linear-gradient(180deg, #63d8a5, transparent);
          border-radius: 2px; flex-shrink: 0;
        }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className={`relative w-full lg:pt-28 pt-16 pb-24 overflow-hidden ${visible ? "contact-visible" : ""}`}
        style={{ background: "linear-gradient(180deg, #0d1526 0%, #070c18 100%)" }}
      >
        {/* Background glow */}
        <div className="absolute pointer-events-none" style={{
          width: 500, height: 500,
          bottom: "-80px", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(99,216,165,0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
        }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="contact-header flex flex-col items-center gap-4 mb-16">
            <span className="section-label">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#63d8a5", display: "inline-block" }} />
              Let&apos;s Talk
            </span>
            <h2
              className="contact-shimmer"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textAlign: "center", margin: 0 }}
            >
              Get In Touch
            </h2>
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #63d8a5, transparent)", borderRadius: 2 }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 14, textAlign: "center", maxWidth: 440, lineHeight: 1.75, margin: 0 }}>
              Have a project in mind or want to collaborate? I&apos;m open to frontend opportunities and freelance work. Let&apos;s build something great together.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">

            {/* Left — contact info */}
            <div className="contact-left flex flex-col gap-5">
              <div className="glass-card p-6 flex flex-col gap-4">
                <p style={{ fontFamily: "'Syne', sans-serif", color: "#e2e8f0", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                  Contact Info
                </p>

                {/* Email */}
                <Link href="mailto:mahantasasmita326@gmail.com" className="info-row" style={{ textDecoration: "none" }}>
                  <div className="info-icon"><MailOutline fontSize="small" /></div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", color: "#94a3b8", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 2px" }}>Email</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#63d8a5", fontSize: 13, fontWeight: 400, margin: 0 }}>mahantasasmita326@gmail.com</p>
                  </div>
                </Link>

                {/* Phone */}
                <Link href="tel:+917008289045" className="info-row" style={{ textDecoration: "none" }}>
                  <div className="info-icon" style={{ fontSize: 16 }}>📞</div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", color: "#94a3b8", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 2px" }}>Phone</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#e2e8f0", fontSize: 13, fontWeight: 400, margin: 0 }}>+91-70082-89045</p>
                  </div>
                </Link>

                {/* Location */}
                <div className="info-row">
                  <div className="info-icon"><LocationOn fontSize="small" /></div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", color: "#94a3b8", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 2px" }}>Location</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#e2e8f0", fontSize: 13, fontWeight: 400, margin: 0 }}>Odisha, India · Open to Remote</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-5 flex flex-col gap-4">
                <p style={{ fontFamily: "'Syne', sans-serif", color: "#e2e8f0", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                  Find Me Online
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://www.linkedin.com/in/sasmita-mahanta-7b24801a7/" target="_blank" className="social-btn">
                    <LinkedIn style={{ fontSize: 18 }} /> LinkedIn
                  </Link>
                  <Link href="https://github.com/Coader-Sasmi" target="_blank" className="social-btn">
                    <GitHub style={{ fontSize: 18 }} /> GitHub
                  </Link>
                </div>
              </div>

              {/* Availability note */}
              <div
                className="glass-card p-5 flex items-start gap-4"
                style={{ borderColor: "rgba(99,216,165,0.15)" }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "rgba(99,216,165,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                  🟢
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne', sans-serif", color: "#63d8a5", fontSize: 13, fontWeight: 700, margin: "0 0 4px", letterSpacing: "0.04em" }}>Available for Work</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    Open to full-time frontend roles and freelance projects. Response within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-right">
              <div className="glass-card p-7 flex flex-col gap-2">
                <div className="flex items-start gap-3 mb-4">
                  <div className="accent-line" style={{ height: 36 }} />
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", color: "#e2e8f0", fontSize: 15, fontWeight: 700, margin: 0 }}>Send a Message</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: 13, margin: "2px 0 0" }}>I&apos;ll get back to you as soon as possible.</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}