import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiAward, FiX, FiCheckCircle } from "react-icons/fi";

export default function CertificateCard({ certificate, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5 }}
        className="surface-card"
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* Certificate Preview Placeholder */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "62%",
            overflow: "hidden",
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--mocha-border)",
          }}
        >
          <img
            src={certificate.image}
            alt={`${certificate.title} credential preview`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transition: "transform 0.4s ease",
            }}
            loading="lazy"
          />

          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              padding: "0.3rem 0.75rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(255, 241, 227, 0.95)",
              border: "1px solid var(--mocha-border)",
              fontSize: "0.75rem",
              fontWeight: "700",
              color: "var(--accent-burgundy)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <FiAward size={13} />
            <span>Verified Track</span>
          </div>
        </div>

        {/* Details Content */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: "700",
                color: "var(--accent-burgundy)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {certificate.issuer}
            </span>
            <span
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
              }}
            >
              {certificate.issueDate}
            </span>
          </div>

          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            {certificate.title}
          </h3>

          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
              marginBottom: "1.25rem",
              flexGrow: 1,
            }}
          >
            {certificate.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.25rem",
            }}
          >
            {certificate.tags?.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--card-bg-warm)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--mocha-border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div
            style={{
              paddingTop: "1rem",
              borderTop: "1px solid var(--mocha-border)",
            }}
          >
            <button
              onClick={() => setModalOpen(true)}
              style={{
                width: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                padding: "0.6rem 1.15rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--accent-burgundy)",
                color: "var(--text-inverse)",
                fontSize: "0.88rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-burgundy-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-burgundy)")}
            >
              <span>View Certificate</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Certificate Modal Preview */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1000,
              backgroundColor: "rgba(56, 37, 31, 0.7)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "680px",
                backgroundColor: "var(--card-bg)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--mocha-border)",
                boxShadow: "var(--shadow-lg)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "var(--bg-secondary)",
                  borderBottom: "1px solid var(--mocha-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700" }}>{certificate.title}</h4>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    Credential ID: {certificate.credentialId}
                  </span>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  aria-label="Close modal"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--mocha-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                  }}
                >
                  <FiX size={18} />
                </button>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  style={{
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--mocha-border)",
                    marginBottom: "1.25rem",
                  }}
                />
                <div
                  style={{
                    padding: "0.9rem 1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--card-bg-warm)",
                    border: "1px solid var(--mocha-border)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FiCheckCircle size={17} color="var(--accent-burgundy)" />
                  <span>
                    Issued by <strong>{certificate.issuer}</strong> ({certificate.issueDate})
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
