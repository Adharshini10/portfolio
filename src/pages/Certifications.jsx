import React from "react";
import { FiAward, FiPlusCircle, FiCheck, FiInfo } from "react-icons/fi";
import CertificateCard from "../components/CertificateCard";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <>
      <SEO
        title="Certifications & Credentials"
        description="Verified coursework and technical certifications of Adharshini Lingampally — Java, React.js, Spring Boot, and modern software development."
      />

      <section className="section-wrapper">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Verified Knowledge</span>
            </div>
            <h1 className="section-title font-serif">Certifications</h1>
            <p className="section-description">
              Professional credentials, coursework milestones, and technical certifications validating practical engineering competencies.
            </p>
          </div>

          {/* Certifications Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2.25rem",
              marginBottom: "4.5rem",
            }}
          >
            {certifications.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>

          {/* Industry & Academic Accreditation Banner */}
          <Reveal delay={0.2}>
            <div
              className="surface-card"
              style={{
                padding: "clamp(2rem, 4vw, 3rem)",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--card-bg-warm)",
                border: "2px solid var(--mocha-cream)",
                maxWidth: "880px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "var(--accent-burgundy)",
                    color: "var(--text-inverse)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiAward size={22} />
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.45rem", margin: 0 }}>
                  Verified Accreditation &amp; Rigorous Assessments
                </h3>
              </div>

              <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Each certificate represents verified coursework, practical simulations, and proctored examinations across core computer science disciplines:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--mocha-border)",
                  }}
                >
                  <strong style={{ color: "var(--accent-burgundy)", display: "block", marginBottom: "0.3rem" }}>
                    Enterprise Engineering
                  </strong>
                  <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Hands-on simulation with JPMorgan Chase &amp; Co. in Kafka message streaming, REST endpoints, and H2 database persistence.
                  </span>
                </div>

                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--mocha-border)",
                  }}
                >
                  <strong style={{ color: "var(--accent-burgundy)", display: "block", marginBottom: "0.3rem" }}>
                    Algorithms &amp; AI
                  </strong>
                  <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Proctored assessment from IIT Kharagpur (NPTEL) on Fundamental Algorithms, alongside IBM SkillsBuild credentials in Generative AI.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
