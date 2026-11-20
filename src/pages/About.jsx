import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiArrowRight,
  FiDownload,
  FiCompass,
  FiCode,
  FiServer,
  FiCpu,
} from "react-icons/fi";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { personalInfo } from "../data/personalInfo";

export default function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Adharshini Lingampally — B.Tech Computer Science student at Anurag University (2024–2028), interested in Java, Spring Boot, React, and Artificial Intelligence."
      />

      {/* Hero / Header Section */}
      <section className="section-wrapper" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Background & Journey</span>
            </div>
            <h1 className="section-title font-serif">About Me</h1>
            <p className="section-description">
              A comprehensive view of my academic foundation at Anurag University, technical focus, and learning philosophy.
            </p>
          </div>

          {/* Personal Bio & Highlights Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
              marginBottom: "4.5rem",
            }}
            className="about-bio-grid"
          >
            {/* Visual Frame */}
            <Reveal direction="right">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "-12px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "var(--radius-xl)",
                    border: "2px solid var(--mocha-cream)",
                    backgroundColor: "var(--card-bg-warm)",
                    zIndex: 0,
                  }}
                />
                <div
                  className="surface-card"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "1.5rem",
                    borderRadius: "var(--radius-xl)",
                  }}
                >
                  <img
                    src="/images/about-profile.jpg"
                    alt="Adharshini Lingampally - B.Tech CSE student at Anurag University"
                    style={{
                      width: "100%",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--mocha-border)",
                      backgroundColor: "var(--bg-secondary)",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      marginTop: "1.25rem",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--card-bg-warm)",
                      border: "1px solid var(--mocha-border)",
                    }}
                  >
                    <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-burgundy)", marginBottom: "0.2rem" }}>
                      Academic Enrollment
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)" }}>
                      Anurag University • B.Tech CSE
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                      Class of 2024–2028 (Currently in 3rd Year)
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Narrative Story */}
            <Reveal direction="left">
              <div>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    marginBottom: "1.25rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Engineering Software with Thoughtfulness
                </h2>

                <p style={{ lineHeight: "1.75", marginBottom: "1.25rem", fontSize: "1.05rem" }}>
                  {personalInfo.aboutIntro}
                </p>

                <p style={{ lineHeight: "1.75", marginBottom: "1.75rem", fontSize: "1.05rem" }}>
                  {personalInfo.shortBio}
                </p>

                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--card-bg-warm)",
                    borderLeft: "4px solid var(--accent-burgundy)",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--accent-burgundy)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    My Core Learning Mindset
                  </div>
                  <p
                    style={{
                      fontSize: "0.96rem",
                      fontStyle: "italic",
                      color: "var(--text-primary)",
                      margin: 0,
                      lineHeight: "1.65",
                    }}
                  >
                    "{personalInfo.learningMindset}"
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Button
                    to="/projects"
                    variant="primary"
                    size="md"
                    icon={FiArrowRight}
                    iconPosition="right"
                  >
                    Explore My Projects
                  </Button>
                  <Button
                    href={personalInfo.resumeUrl}
                    download="Adharshini-Resume.pdf"
                    target="_blank"
                    variant="secondary"
                    size="md"
                    icon={FiDownload}
                    iconPosition="left"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDUCATION TIMELINE SECTION
          ========================================================================= */}
      <section
        className="section-wrapper"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--mocha-border)",
          borderBottom: "1px solid var(--mocha-border)",
        }}
      >
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Academic Pathway</span>
            </div>
            <h2 className="section-title font-serif">Education Timeline</h2>
            <p className="section-description">
              Formal university coursework laying the architectural and algorithmic foundation for real-world engineering.
            </p>
          </div>

          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              position: "relative",
              paddingLeft: "2.5rem",
            }}
            className="timeline-container"
          >
            {/* Timeline Vertical Bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "14px",
                width: "3px",
                backgroundColor: "var(--mocha-cream)",
                borderRadius: "3px",
              }}
            />

            {/* Timeline Item 1: Anurag University */}
            <Reveal delay={0.1}>
              <div style={{ position: "relative", marginBottom: "3rem" }}>
                {/* Node Dot */}
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    left: "-2.5rem",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-burgundy)",
                    border: "4px solid var(--bg-secondary)",
                    boxShadow: "0 0 0 2px var(--accent-burgundy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-inverse)",
                  }}
                >
                  <FiBookOpen size={12} />
                </div>

                <div
                  className="surface-card"
                  style={{
                    padding: "2rem",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--accent-burgundy)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--card-bg-warm)",
                        border: "1px solid var(--mocha-border)",
                      }}
                    >
                      B.Tech — Computer Science and Engineering
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        fontWeight: "600",
                      }}
                    >
                      <FiCalendar size={14} />
                      <span>2024 – 2028</span>
                    </span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.35rem" }}>
                    <h3
                      style={{
                        fontSize: "1.45rem",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                      }}
                    >
                      Anurag University
                    </h3>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: "700",
                        color: "var(--accent-burgundy)",
                        backgroundColor: "var(--card-bg-warm)",
                        border: "1px solid var(--mocha-border)",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                      }}
                    >
                      CGPA: 8.48 / 10
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                    }}
                  >
                    <FiMapPin size={15} color="var(--accent-burgundy)" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: "1.65",
                      color: "var(--text-secondary)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Third-year undergraduate student enrolled in the Computer Science and Engineering curriculum.
                    Focusing on object-oriented programming with Java, Spring Boot web backend architecture, relational database systems (MySQL), modern client-side engineering with React.js, and foundational AI integrations.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming (Java)",
                      "Relational Databases (MySQL)",
                      "Web Development (React & REST)",
                      "Spring Boot Microservices",
                      "AI & Intelligent Systems",
                    ].map((subject, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          padding: "0.3rem 0.7rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "var(--card-bg-warm)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--mocha-border)",
                        }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL & CAREER INTERESTS SECTION
          ========================================================================= */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Areas of Passion</span>
            </div>
            <h2 className="section-title font-serif">Technical & Career Interests</h2>
            <p className="section-description">
              The foundational domains where I spend my time learning, building, and exploring real-world implementations.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {personalInfo.interests.map((interest, idx) => (
              <Reveal key={interest.title} delay={idx * 0.08}>
                <div
                  className="surface-card"
                  style={{
                    padding: "1.8rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--mocha-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-burgundy)",
                        flexShrink: 0,
                      }}
                    >
                      <FiCheckCircle size={18} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{interest.title}</h3>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.65", margin: 0 }}>
                    {interest.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Navigation Ribbon */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--card-bg-warm)",
              border: "1px solid var(--mocha-border)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                Ready to review my technical skillset?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0 }}>
                Explore the categorized breakdown across Programming, Frontend, Backend, Database, and AI.
              </p>
            </div>

            <Button to="/skills" variant="primary" size="md" icon={FiArrowRight} iconPosition="right">
              View Skills Dashboard
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 868px) {
          .about-bio-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-container {
            padding-left: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}
