import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiLayers, FiInfo, FiExternalLink } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

const CATEGORIES = ["All", "Full Stack", "AI & Full Stack", "Web & Location"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Projects & Case Studies"
        description="Explore the portfolio projects of Adharshini Lingampally: SkillSync, LearnovaAI, ShopEZ, and Blood Care. Full stack web development with React, Java, Spring Boot, MySQL, and AI."
      />

      <section className="section-wrapper">
        <div className="container">
          {/* Page Header */}
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Portfolio Gallery</span>
            </div>
            <h1 className="section-title font-serif">Featured Projects</h1>
            <p className="section-description">
              A comprehensive collection of applications engineered with a strong emphasis on clean architecture, real-world utility, and thoughtful user experience.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginBottom: "3rem",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.55rem 1.25rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.88rem",
                    fontWeight: isSelected ? "700" : "500",
                    backgroundColor: isSelected ? "var(--accent-burgundy)" : "var(--card-bg)",
                    color: isSelected ? "var(--text-inverse)" : "var(--text-secondary)",
                    border: isSelected
                      ? "1px solid var(--accent-burgundy)"
                      : "1px solid var(--mocha-border)",
                    boxShadow: isSelected ? "0 4px 12px rgba(112, 39, 53, 0.2)" : "var(--shadow-xs)",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "var(--mocha-dark)";
                      e.currentTarget.style.color = "var(--text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "var(--mocha-border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Project Cards Grid */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "2.25rem",
              marginBottom: "4rem",
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Transparent Notice about Placeholders */}
          <Reveal delay={0.2}>
            <div
              style={{
                padding: "1.5rem 1.75rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--card-bg-warm)",
                border: "1px solid var(--mocha-border)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                maxWidth: "850px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-burgundy)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <FiInfo size={18} />
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Source Code & Repositories
                </h4>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Explore the source repositories, architecture, and schemas on GitHub via the repository button on each project card.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
