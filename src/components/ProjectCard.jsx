import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiArrowRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="surface-card"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Image Preview with Hover Zoom */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 ratio
          overflow: "hidden",
          backgroundColor: "var(--bg-secondary)",
          borderBottom: "1px solid var(--mocha-border)",
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="project-card-image"
          loading="lazy"
        />

        {/* Category Pill Tag */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 2,
            padding: "0.3rem 0.8rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "rgba(255, 241, 227, 0.95)",
            backdropFilter: "blur(6px)",
            border: "1px solid var(--mocha-border)",
            fontSize: "0.75rem",
            fontWeight: "700",
            color: "var(--accent-burgundy)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "1.6rem 1.6rem 1.4rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: "700",
            color: "var(--text-primary)",
            marginBottom: "0.4rem",
          }}
        >
          <Link
            to={`/projects/${project.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-burgundy)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          >
            {project.title}
          </Link>
        </h3>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: "1.6",
            marginBottom: "1.25rem",
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        {/* Technology Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.45rem",
            marginBottom: "1.4rem",
          }}
        >
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.78rem",
                fontWeight: "600",
                padding: "0.25rem 0.65rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--card-bg-warm)",
                color: "var(--text-primary)",
                border: "1px solid var(--mocha-border)",
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: "600",
                padding: "0.25rem 0.65rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "transparent",
                color: "var(--accent-burgundy)",
              }}
            >
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Action Buttons & Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            borderTop: "1px solid var(--mocha-border)",
            gap: "0.75rem",
          }}
        >
          <Link
            to={`/projects/${project.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.55rem 1.15rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--accent-burgundy)",
              color: "var(--text-inverse)",
              fontSize: "0.86rem",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 3px 10px rgba(112, 39, 53, 0.18)",
              transition: "all var(--transition-normal)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-burgundy-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-burgundy)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>View Details</span>
            <FiArrowRight size={14} />
          </Link>

          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              title="View Source on GitHub"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--mocha-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-burgundy)";
                e.currentTarget.style.color = "var(--accent-burgundy)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--mocha-border)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <FiGithub size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        article:hover .project-card-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.article>
  );
}
