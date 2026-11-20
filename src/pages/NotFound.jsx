import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiCompass } from "react-icons/fi";
import Button from "../components/Button";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The requested route does not exist." />

      <section
        style={{
          minHeight: "calc(100vh - var(--header-height) - 150px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(5rem, 12vw, 8rem)",
              fontWeight: "700",
              color: "var(--accent-burgundy)",
              lineHeight: "1",
              marginBottom: "1rem",
            }}
          >
            404
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.3rem)",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: "1.65",
              marginBottom: "2.5rem",
            }}
          >
            The portfolio route you are trying to visit doesn't exist or may have been moved. Feel free to explore the main navigation below.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Button to="/" variant="primary" size="md" icon={FiHome} iconPosition="left">
              Return Home
            </Button>
            <Button to="/projects" variant="secondary" size="md" icon={FiCompass} iconPosition="right">
              View Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
