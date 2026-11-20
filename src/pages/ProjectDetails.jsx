import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiGithub,
  FiCheckCircle,
  FiLayers,
  FiCpu,
  FiInfo,
} from "react-icons/fi";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const currentIndex = projects.findIndex((p) => p.id === id || p.slug === id);

  if (currentIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <SEO
        title={`${project.title} | Case Study`}
        description={project.description}
      />

      <article className="section-wrapper" style={{ paddingTop: "2.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          {/* Breadcrumbs & Back to Projects */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.92rem",
                fontWeight: "600",
                color: "var(--text-secondary)",
                padding: "0.4rem 0.9rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--mocha-border)",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-burgundy)";
                e.currentTarget.style.borderColor = "var(--accent-burgundy)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--mocha-border)";
              }}
            >
              <FiArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>

            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: "700",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--card-bg-warm)",
                color: "var(--accent-burgundy)",
                border: "1px solid var(--mocha-border)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
                lineHeight: "1.15",
              }}
            >
              {project.title}
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                color: "var(--accent-burgundy)",
                fontWeight: "600",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              {project.subtitle}
            </p>
            <p
              style={{
                fontSize: "1.08rem",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                maxWidth: "760px",
              }}
            >
              {project.tagline}
            </p>
          </div>

          {/* Main Visual Banner Graphic */}
          <div
            className="surface-card"
            style={{
              padding: "clamp(1rem, 3vw, 1.75rem)",
              borderRadius: "var(--radius-xl)",
              marginBottom: "3.5rem",
              overflow: "hidden",
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} architectural overview`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--mocha-border)",
                backgroundColor: "var(--bg-secondary)",
              }}
            />
          </div>

          {/* Actions Bar (GitHub Repository) */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.25rem",
              padding: "1.5rem 2rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--mocha-border)",
              boxShadow: "var(--shadow-sm)",
              marginBottom: "3.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <FiInfo size={18} color="var(--accent-burgundy)" />
              <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Source code and project updates hosted on GitHub
              </span>
            </div>

            <div>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.35rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--text-primary)",
                  color: "var(--text-inverse)",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "background-color var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-burgundy)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--text-primary)")}
              >
                <FiGithub size={16} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Two-Column Detail Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr",
              gap: "3rem",
              marginBottom: "4rem",
            }}
            className="details-content-grid"
          >
            {/* Left Column: Problem, Overview & Features */}
            <div>
              {/* Detailed Overview */}
              <section style={{ marginBottom: "2.75rem" }}>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--text-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  Project Overview
                </h2>
                <p style={{ lineHeight: "1.75", fontSize: "1.05rem" }}>
                  {project.longOverview}
                </p>
              </section>

              {/* The Problem Addressed */}
              <section style={{ marginBottom: "2.75rem" }}>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--text-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  The Problem It Solves
                </h2>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--card-bg-warm)",
                    borderLeft: "4px solid var(--accent-burgundy)",
                  }}
                >
                  <p style={{ lineHeight: "1.7", fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>
                    {project.problemStatement}
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section style={{ marginBottom: "2.75rem" }}>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--text-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Key Architectural Features
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                  }}
                >
                  {project.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.98rem",
                        lineHeight: "1.6",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <FiCheckCircle
                        size={18}
                        color="var(--accent-burgundy)"
                        style={{ flexShrink: 0, marginTop: "3px" }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Implementation & Contributions */}
              <section>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--text-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Implementation & Contributions
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {project.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1.1rem 1.25rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--card-bg)",
                        border: "1px solid var(--mocha-border)",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: "1.6",
                      }}
                    >
                      <strong style={{ color: "var(--text-primary)" }}>
                        Module {idx + 1}:
                      </strong>{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Tech Stack & Metadata Sidebar */}
            <div>
              <div
                className="surface-card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-lg)",
                  position: "sticky",
                  top: "calc(var(--header-height) + 1.5rem)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "1.25rem",
                    color: "var(--text-primary)",
                    borderBottom: "1px solid var(--mocha-border)",
                    paddingBottom: "0.75rem",
                  }}
                >
                  Technology Stack
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.35rem 0.8rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--card-bg-warm)",
                        border: "1px solid var(--mocha-border)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "1.25rem",
                    color: "var(--text-primary)",
                    borderBottom: "1px solid var(--mocha-border)",
                    paddingBottom: "0.75rem",
                  }}
                >
                  Project Summary
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block" }}>
                      Primary Focus
                    </span>
                    <strong style={{ color: "var(--text-primary)" }}>
                      {project.category} Development
                    </strong>
                  </div>

                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block" }}>
                      Architecture
                    </span>
                    <strong style={{ color: "var(--text-primary)" }}>
                      Component-Driven Frontend + REST API
                    </strong>
                  </div>

                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block" }}>
                      Author
                    </span>
                    <strong style={{ color: "var(--text-primary)" }}>
                      Adharshini Lingampally
                    </strong>
                  </div>
                </div>

                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--mocha-border)" }}>
                  <Button to="/contact" variant="primary" size="md" style={{ width: "100%", textAlign: "center" }}>
                    Discuss This Project
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation Switcher (Prev / Next) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--mocha-border)",
            }}
          >
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                <FiArrowLeft size={18} color="var(--accent-burgundy)" />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Previous
                  </div>
                  <div style={{ fontWeight: "700", color: "var(--text-primary)" }}>
                    {prevProject.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  textAlign: "right",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Next
                  </div>
                  <div style={{ fontWeight: "700", color: "var(--text-primary)" }}>
                    {nextProject.title}
                  </div>
                </div>
                <FiArrowRight size={18} color="var(--accent-burgundy)" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>

      <style>{`
        @media (max-width: 868px) {
          .details-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
