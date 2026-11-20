import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: "auto",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--mocha-border)",
        paddingTop: "4rem",
        paddingBottom: "2.5rem",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand & Introduction */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "var(--accent-burgundy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(112, 39, 53, 0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: "700",
                    fontSize: "1.05rem",
                    color: "var(--text-inverse)",
                  }}
                >
                  AL
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                }}
              >
                Adharshini Lingampally
              </span>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                marginBottom: "1.25rem",
                maxWidth: "340px",
              }}
            >
              {personalInfo.role}. Third-year B.Tech CSE student at Anurag University dedicated to
              clean software engineering and intelligent digital tools.
            </p>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (Placeholder)"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--mocha-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "all var(--transition-normal)",
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
                <FiGithub size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (Placeholder)"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--mocha-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "all var(--transition-normal)",
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
                <FiLinkedin size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.email}
                aria-label="Direct Email"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--mocha-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "all var(--transition-normal)",
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
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "1.2rem",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                { name: "Home", to: "/" },
                { name: "About Me", to: "/about" },
                { name: "Technical Skills", to: "/skills" },
                { name: "Featured Projects", to: "/projects" },
                { name: "Certifications", to: "/certifications" },
                { name: "Contact & Inquiries", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      transition: "color var(--transition-fast)",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-burgundy)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects Links */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "1.2rem",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Projects
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                { name: "SkillSync", to: "/projects/skillsync" },
                { name: "LearnovaAI", to: "/projects/learnovaai" },
                { name: "ShopEZ", to: "/projects/shopez" },
                { name: "Blood Care", to: "/projects/blood-care" },
              ].map((proj) => (
                <li key={proj.to}>
                  <Link
                    to={proj.to}
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-burgundy)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    <span>{proj.name}</span>
                    <FiArrowUpRight size={13} opacity={0.6} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic / Status Notice */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "1.2rem",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Education Status
            </h4>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "var(--card-bg)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--mocha-border)",
              }}
            >
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  color: "var(--accent-burgundy)",
                  marginBottom: "0.25rem",
                }}
              >
                Anurag University
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                B.Tech in Computer Science & Engineering (2024–2028)
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.4",
                }}
              >
                Open to internships, open-source initiatives, and student collaborations.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--mocha-border)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.88rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {currentYear} Adharshini Lingampally. Designed & engineered with React, Vite & Motion.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span>Built with precision & curiosity</span>
            <FiHeart size={14} color="var(--accent-burgundy)" />
          </div>
        </div>
      </div>
    </footer>
  );
}
