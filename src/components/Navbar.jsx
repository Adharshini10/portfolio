import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/personalInfo";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for header blur styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all var(--transition-normal)",
        backgroundColor: isScrolled
          ? "rgba(255, 241, 227, 0.92)"
          : "rgba(255, 241, 227, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: isScrolled
          ? "1px solid var(--mocha-border)"
          : "1px solid rgba(216, 185, 155, 0.35)",
        boxShadow: isScrolled ? "var(--shadow-xs)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
            outline: "none",
          }}
          aria-label="Adharshini Lingampally Home"
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              backgroundColor: "var(--accent-burgundy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 8px rgba(112, 39, 53, 0.2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: "700",
                fontSize: "1.1rem",
                color: "var(--text-inverse)",
                letterSpacing: "-0.5px",
              }}
            >
              AL
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Adharshini<span style={{ color: "var(--accent-burgundy)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                style={{
                  position: "relative",
                  padding: "0.45rem 0.95rem",
                  fontSize: "0.93rem",
                  fontWeight: isActive ? "600" : "500",
                  color: isActive ? "var(--accent-burgundy)" : "var(--text-secondary)",
                  borderRadius: "var(--radius-full)",
                  transition: "color var(--transition-fast)",
                  textDecoration: "none",
                }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "15%",
                      right: "15%",
                      height: "2.5px",
                      backgroundColor: "var(--accent-burgundy)",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
          className="desktop-cta"
        >
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.48rem 1.15rem",
              fontSize: "0.88rem",
              fontWeight: "600",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--accent-burgundy)",
              color: "var(--text-inverse)",
              boxShadow: "0 3px 10px rgba(112, 39, 53, 0.2)",
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
            <span>Let's Connect</span>
            <FiArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="mobile-toggle"
          style={{
            display: "none", // enabled via media query below
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--mocha-border)",
            color: "var(--text-primary)",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              backgroundColor: "var(--bg-primary)",
              borderBottom: "1px solid var(--mocha-border)",
              boxShadow: "var(--shadow-lg)",
            }}
            className="mobile-drawer"
          >
            <div
              className="container"
              style={{
                paddingTop: "1.25rem",
                paddingBottom: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    style={{
                      padding: "0.75rem 1rem",
                      fontSize: "1.05rem",
                      fontWeight: isActive ? "700" : "500",
                      color: isActive ? "var(--accent-burgundy)" : "var(--text-primary)",
                      backgroundColor: isActive ? "var(--card-bg)" : "transparent",
                      borderRadius: "var(--radius-md)",
                      border: isActive
                        ? "1px solid var(--mocha-border)"
                        : "1px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "var(--accent-burgundy)",
                        }}
                      />
                    )}
                  </NavLink>
                );
              })}

              <div
                style={{
                  marginTop: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--mocha-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
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
                    }}
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
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
                    }}
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.email}
                    aria-label="Send Email"
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
                    }}
                  >
                    <FiMail size={18} />
                  </a>
                </div>

                <Link
                  to="/contact"
                  style={{
                    padding: "0.6rem 1.25rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--accent-burgundy)",
                    color: "var(--text-inverse)",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
