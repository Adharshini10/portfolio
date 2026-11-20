import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <>
      <SEO
        title="Technical Skills"
        description="Comprehensive technical skills dashboard of Adharshini Lingampally — Java, JavaScript, React.js, Spring Boot, MySQL, Git, GitHub, and Artificial Intelligence."
      />

      <section className="section-wrapper">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Skill Matrix</span>
            </div>
            <h1 className="section-title font-serif">Technical Skills</h1>
            <p className="section-description">
              A transparent, categorized inventory of my programming languages, frameworks, databases, and engineering tools. No arbitrary percentages — just practical capabilities.
            </p>
          </div>

          {/* Categories Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3.5rem",
            }}
          >
            {skillCategories.map((category, catIndex) => (
              <div key={category.id} id={category.id}>
                {/* Category Header Bar */}
                <Reveal direction="left">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      borderBottom: "2px solid var(--mocha-border)",
                      paddingBottom: "0.85rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: "1.55rem",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "2px",
                            backgroundColor: "var(--accent-burgundy)",
                            display: "inline-block",
                          }}
                        />
                        {category.title}
                      </h2>
                    </div>

                    <span
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-muted)",
                        maxWidth: "520px",
                      }}
                    >
                      {category.description}
                    </span>
                  </div>
                </Reveal>

                {/* Skills Cards Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Integration Note & CTA */}
          <Reveal delay={0.2}>
            <div
              style={{
                marginTop: "5rem",
                padding: "clamp(2rem, 4vw, 3rem)",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--card-bg-warm)",
                border: "2px solid var(--mocha-cream)",
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr",
                gap: "2rem",
                alignItems: "center",
              }}
              className="skills-cta-box"
            >
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  See These Technologies in Real Action
                </h3>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  Theoretical knowledge is best validated through concrete software. Explore how I combine Java, Spring Boot, React, and MySQL across full-stack applications.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "0.85rem",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  to="/projects"
                  variant="primary"
                  size="md"
                  icon={FiArrowRight}
                  iconPosition="right"
                >
                  Explore Projects
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Inquire Collaboration
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .skills-cta-box {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
          .skills-cta-box div:last-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </>
  );
}
