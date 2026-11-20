import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FiArrowRight,
  FiDownload,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiChevronDown,
  FiCode,
  FiServer,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";
import { personalInfo } from "../data/personalInfo";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="Personal portfolio of Adharshini Lingampally — Third-year B.Tech Computer Science student specializing in frontend development, backend engineering (Java, Spring Boot), React, and AI applications."
      />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - var(--header-height))",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Ambient Blur Background Blobs */}
        <div
          className="bg-ambient-blob blob-mocha"
          style={{
            top: "5%",
            right: "-5%",
            width: "500px",
            height: "500px",
          }}
        />
        <div
          className="bg-ambient-blob blob-burgundy"
          style={{
            bottom: "0%",
            left: "-10%",
            width: "450px",
            height: "450px",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "clamp(2rem, 5vw, 4.5rem)",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left Content Column */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Student Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginBottom: "1.25rem" }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.95rem",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--mocha-border)",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    color: "var(--text-secondary)",
                    boxShadow: "var(--shadow-xs)",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-burgundy)",
                      boxShadow: "0 0 0 3px rgba(112, 39, 53, 0.15)",
                    }}
                  />
                  <span>Student @ Anurag University • Open for Opportunities</span>
                </span>
              </motion.div>

              {/* Animated Name & Title Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="font-serif"
                  style={{
                    color: "var(--text-primary)",
                    lineHeight: "1.12",
                    marginBottom: "0.75rem",
                  }}
                >
                  {personalInfo.name}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
                    fontWeight: "600",
                    color: "var(--accent-burgundy)",
                    marginBottom: "1.35rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {personalInfo.role}
                </h2>
              </motion.div>

              {/* Introduction Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  color: "var(--text-secondary)",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  maxWidth: "560px",
                }}
              >
                "{personalInfo.shortBio}"
              </motion.p>

              {/* Three Prominent Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.85rem",
                  marginBottom: "2.5rem",
                }}
              >
                {/* 1. Explore My Work -> Projects */}
                <Button
                  to="/projects"
                  variant="primary"
                  size="md"
                  icon={FiArrowRight}
                  iconPosition="right"
                >
                  Explore My Work
                </Button>

                {/* 2. Download Resume -> public PDF */}
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

                {/* 3. Let's Connect -> Contact */}
                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  icon={FiSend}
                  iconPosition="right"
                >
                  Let's Connect
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Connect:
                </span>

                <div style={{ display: "flex", gap: "0.6rem" }}>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile (Editable placeholder)"
                    title="GitHub (Placeholder)"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--mocha-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                      boxShadow: "var(--shadow-xs)",
                      transition: "all var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-burgundy)";
                      e.currentTarget.style.color = "var(--accent-burgundy)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--mocha-border)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FiGithub size={17} />
                  </a>

                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile (Editable placeholder)"
                    title="LinkedIn (Placeholder)"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--mocha-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                      boxShadow: "var(--shadow-xs)",
                      transition: "all var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-burgundy)";
                      e.currentTarget.style.color = "var(--accent-burgundy)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--mocha-border)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FiLinkedin size={17} />
                  </a>

                  <a
                    href={personalInfo.socialLinks.email}
                    aria-label="Email Address"
                    title="Email (Placeholder)"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--mocha-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                      boxShadow: "var(--shadow-xs)",
                      transition: "all var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-burgundy)";
                      e.currentTarget.style.color = "var(--accent-burgundy)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--mocha-border)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FiMail size={17} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Profile Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "460px",
                }}
              >
                {/* Decorative Offset Backdrop Frame */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "var(--radius-xl)",
                    border: "2px solid var(--mocha-cream)",
                    backgroundColor: "var(--card-bg-warm)",
                    zIndex: 0,
                  }}
                />

                {/* Profile Card Container */}
                <div
                  className="surface-card"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "1rem",
                    borderRadius: "var(--radius-xl)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  {/* Hero Workspace Image */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--mocha-border)",
                      aspectRatio: "4 / 3.2",
                    }}
                  >
                    <img
                      src="/images/hero-aesthetic.jpg"
                      alt="Adharshini Lingampally developer workspace - Dream Code Create"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                      className="hero-avatar"
                    />

                    {/* Subtle Overlay Label */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0.85rem",
                        left: "0.85rem",
                        right: "0.85rem",
                        padding: "0.6rem 0.95rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "rgba(255, 241, 227, 0.92)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid var(--mocha-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: "0 4px 12px rgba(56, 37, 31, 0.12)",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--text-primary)" }}>
                          Adharshini Lingampally
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--accent-burgundy)", fontWeight: "600" }}>
                          B.Tech CSE '28 • Anurag University
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "var(--accent-burgundy)",
                          color: "var(--text-inverse)",
                        }}
                      >
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Scroll Indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            <motion.a
              href="#overview"
              aria-label="Scroll to overview section"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                fontWeight: "600",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              <span>DISCOVER MORE</span>
              <FiChevronDown size={18} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY PILLARS / OVERVIEW SECTION
          ========================================================================= */}
      <section id="overview" className="section-wrapper" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Core Strengths</span>
            </div>
            <h2 className="section-title font-serif">Engineering with Purpose & Elegance</h2>
            <p className="section-description">
              Combining algorithmic foundation with expressive frontends and robust backends to create software that is dependable, performant, and delightful to use.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {[
              {
                icon: FiCode,
                title: "Frontend Development",
                desc: "Modern React single-page interfaces built with reusable components, fluid CSS layouts, and intuitive responsive patterns.",
              },
              {
                icon: FiServer,
                title: "Backend & Spring Boot",
                desc: "Robust RESTful web services engineered with Java, Spring Boot, Spring Security, JWT authentication, and MySQL.",
              },
              {
                icon: FiCpu,
                title: "AI Integration",
                desc: "Harnessing modern AI capabilities for subject-based learning, document intelligence, and automated user assistance.",
              },
              {
                icon: FiLayers,
                title: "Full-Stack Synergy",
                desc: "Seamless synchronization between user interactions and data persistence, from relational schemas to WebSocket events.",
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.1}>
                  <div
                    className="surface-card"
                    style={{
                      padding: "2rem 1.6rem",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.9rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--mocha-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-burgundy)",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{pillar.title}</h3>
                    <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SECTION
          ========================================================================= */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Selected Work</span>
            </div>
            <h2 className="section-title font-serif">Featured Projects</h2>
            <p className="section-description">
              A curated showcase of software applications demonstrating full-stack engineering, Java backend architecture, and AI-enabled workflows.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* View All Projects CTA */}
          <div style={{ textAlign: "center" }}>
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              icon={FiArrowRight}
              iconPosition="right"
            >
              View All 4 Projects & Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INVITATION CALL TO ACTION BANNER
          ========================================================================= */}
      <section
        style={{
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
        }}
      >
        <div className="container">
          <Reveal>
            <div
              style={{
                backgroundColor: "var(--card-bg-warm)",
                border: "2px solid var(--mocha-cream)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(2.5rem, 5vw, 4rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "var(--shadow-md)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-burgundy)",
                  color: "var(--text-inverse)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  boxShadow: "0 4px 12px rgba(112, 39, 53, 0.25)",
                }}
              >
                <FiSend size={24} />
              </div>

              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.4rem)",
                  color: "var(--text-primary)",
                  marginBottom: "0.85rem",
                  maxWidth: "600px",
                }}
              >
                Let's Build Something Exceptional Together
              </h2>

              <p
                style={{
                  fontSize: "1.08rem",
                  color: "var(--text-secondary)",
                  maxWidth: "540px",
                  lineHeight: "1.65",
                  marginBottom: "2rem",
                }}
              >
                Whether you're looking for an enthusiastic developer, want to discuss a collaborative project, or share insights on AI and web development, I'd love to connect.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Button to="/contact" variant="primary" size="lg" icon={FiSend} iconPosition="right">
                  Get In Touch
                </Button>
                <Button to="/about" variant="secondary" size="lg">
                  Read My Story
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
