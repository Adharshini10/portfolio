import React from "react";
import { motion } from "motion/react";
import {
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbApi, TbBrain, TbSparkles } from "react-icons/tb";

// Map icon string identifiers to actual components
const ICON_MAP = {
  SiOpenjdk: SiOpenjdk,
  SiJavascript: SiJavascript,
  SiHtml5: SiHtml5,
  SiCss: SiCss,
  SiCss3: SiCss,
  SiReact: SiReact,
  SiSpringboot: SiSpringboot,
  TbApi: TbApi,
  SiMysql: SiMysql,
  SiGit: SiGit,
  SiGithub: SiGithub,
  TbBrain: TbBrain,
  TbSparkles: TbSparkles,
};

export default function SkillCard({ skill, index = 0 }) {
  const IconComponent = ICON_MAP[skill.icon] || TbSparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
      className="surface-card"
      style={{
        padding: "1.45rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        position: "relative",
        height: "100%",
      }}
    >
      {/* Header with Icon and Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--mocha-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent-burgundy)",
            transition: "all var(--transition-normal)",
          }}
          className="skill-icon-box"
        >
          <IconComponent size={26} />
        </div>

        <span
          style={{
            fontSize: "0.74rem",
            fontWeight: "700",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "0.28rem 0.75rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--card-bg-warm)",
            color: "var(--accent-burgundy)",
            border: "1px solid var(--mocha-border)",
          }}
        >
          {skill.badge}
        </span>
      </div>

      {/* Skill Name */}
      <h4
        style={{
          fontSize: "1.2rem",
          fontWeight: "700",
          color: "var(--text-primary)",
        }}
      >
        {skill.name}
      </h4>

      {/* Contextual Description (no fake progress bar!) */}
      <p
        style={{
          fontSize: "0.92rem",
          color: "var(--text-secondary)",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {skill.description}
      </p>

      <style>{`
        div:hover .skill-icon-box {
          background-color: var(--accent-burgundy);
          color: var(--text-inverse);
          transform: rotate(4deg) scale(1.05);
        }
      `}</style>
    </motion.div>
  );
}
