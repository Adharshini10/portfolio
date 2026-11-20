import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiMail,
  FiUser,
  FiFileText,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiHelpCircle,
  FiKey,
  FiRefreshCw,
} from "react-icons/fi";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { personalInfo } from "../data/personalInfo";
import { sendContactEmail, isEmailJSConfigured } from "../config/emailjs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");
  const [shake, setShake] = useState(false);
  const [showConfigHelper, setShowConfigHelper] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = "Please provide a valid email format (e.g. name@domain.com).";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Please enter a message subject.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = `Your message is ${formData.message.trim().length} characters. Please provide at least 10 characters.`;
    }

    setErrors(errs);
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const firstKey = Object.keys(errs)[0];
      const elem = document.getElementById(firstKey);
      if (elem) elem.focus();
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      setStatus("error");
      setStatusMessage(
        "EmailJS credentials are missing. Please verify your .env configuration."
      );
      setShowConfigHelper(true);
      return;
    }

    try {
      const templateParams = {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        title: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: personalInfo.name,
      };

      const res = await sendContactEmail(templateParams);
      console.log("EmailJS transmission success:", res);

      setStatus("success");
      setStatusMessage(`Thank you, ${formData.name.trim()}! Your message has been delivered directly to Adharshini's inbox. She will get back to you shortly.`);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      // Reset back to idle after 5 seconds so they can send another message if desired
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err) {
      console.error("Email send failed:", err);
      const errorMsg =
        err?.text ||
        err?.message ||
        (typeof err === "string" ? err : "Failed to dispatch message via EmailJS. Please try again or email Adharshini directly below.");
      setStatus("error");
      setStatusMessage(errorMsg);
    }
  };

  return (
    <>
      <SEO
        title="Contact & Connect"
        description="Get in touch with Adharshini Lingampally for collaboration, technical discussions, or opportunities. Connect directly via email or the integrated contact form."
      />

      <section className="section-wrapper">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Get In Touch</span>
            </div>
            <h1 className="section-title font-serif">Let's Connect</h1>
            <p className="section-description">
              Whether you have a question about my projects, want to collaborate on software, or discuss opportunities, my inbox is always open.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.4fr",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "start",
            }}
            className="contact-layout-grid"
          >
            {/* Left Column: Contact Info & Details */}
            <div>
              <div
                className="surface-card"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  marginBottom: "2rem",
                }}
              >
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "1.65rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.85rem",
                  }}
                >
                  Direct Channels
                </h2>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    marginBottom: "2rem",
                  }}
                >
                  Feel free to reach out directly through email or professional networks. I typically respond within 24 to 48 hours.
                </p>

                {/* Information Points */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--mocha-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-burgundy)",
                        flexShrink: 0,
                      }}
                    >
                      <FiMail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>
                        Primary Email
                      </div>
                      <a
                        href={personalInfo.socialLinks.email}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "var(--accent-burgundy)",
                          wordBreak: "break-all",
                        }}
                      >
                        {personalInfo.socialLinks.rawEmail}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--mocha-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-burgundy)",
                        flexShrink: 0,
                      }}
                    >
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>
                        Location / Institution
                      </div>
                      <div style={{ fontSize: "0.98rem", fontWeight: "600", color: "var(--text-primary)" }}>
                        Anurag University, Hyderabad, India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div style={{ marginTop: "2.5rem", paddingTop: "1.75rem", borderTop: "1px solid var(--mocha-border)" }}>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Social & Code Profiles
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.55rem 1rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--mocha-border)",
                        fontSize: "0.88rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                      }}
                    >
                      <FiGithub size={16} />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.55rem 1rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--mocha-border)",
                        fontSize: "0.88rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                      }}
                    >
                      <FiLinkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Delivery Status Card */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--card-bg-warm)",
                  border: "1px solid var(--mocha-border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.6rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#2e7d32",
                        boxShadow: "0 0 0 3px rgba(46, 125, 50, 0.25)",
                        display: "inline-block",
                      }}
                    />
                    <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)" }}>
                      Live Email Delivery
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfigHelper(!showConfigHelper)}
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: "700",
                      color: "var(--accent-burgundy)",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {showConfigHelper ? "Hide Details" : "Details"}
                  </button>
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.55", margin: 0 }}>
                  Messages sent through this form are delivered straight to Adharshini's personal inbox via verified EmailJS service.
                </p>

                {showConfigHelper && (
                  <div style={{ marginTop: "0.85rem", paddingTop: "0.85rem", borderTop: "1px dashed var(--mocha-border)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    <div>• <strong>Service:</strong> Gmail (service_fhgk0s2)</div>
                    <div>• <strong>Template:</strong> Contact Us (template_zjhrgnk)</div>
                    <div>• <strong>Direct Destination:</strong> {personalInfo.socialLinks.rawEmail}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div
              className="surface-card"
              style={{
                padding: "clamp(1.75rem, 4vw, 2.75rem)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <h2
                className="font-serif"
                style={{
                  fontSize: "1.75rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Send a Message
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  marginBottom: "2rem",
                }}
              >
                Have a question, collaboration idea, or opportunity? Drop your note below and I will reply as soon as possible.
              </p>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      padding: "1.1rem 1.35rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(46, 125, 50, 0.12)",
                      border: "1.5px solid rgba(46, 125, 50, 0.35)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.85rem",
                      marginBottom: "1.75rem",
                      boxShadow: "0 4px 14px rgba(46, 125, 50, 0.12)",
                    }}
                  >
                    <FiCheckCircle size={22} color="#2e7d32" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div style={{ fontSize: "0.94rem", color: "#1b5e20", lineHeight: "1.55" }}>
                      <strong>Delivered!</strong> {statusMessage}
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      padding: "1.1rem 1.35rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(112, 39, 53, 0.1)",
                      border: "1.5px solid var(--accent-burgundy-border)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.85rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <FiAlertCircle size={22} color="var(--accent-burgundy)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div style={{ fontSize: "0.94rem", color: "var(--accent-burgundy)", lineHeight: "1.55" }}>
                      <strong>Transmission Issue:</strong> {statusMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div style={{ marginBottom: "1.35rem" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Your Name <span style={{ color: "var(--accent-burgundy)" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.78rem 1rem 0.78rem 2.6rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--bg-subtle)",
                        border: errors.name ? "1.5px solid var(--accent-burgundy)" : "1px solid var(--mocha-border)",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        color: "var(--text-primary)",
                        outline: "none",
                        transition: "all var(--transition-fast)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-burgundy)")}
                      onBlur={(e) => {
                        if (!errors.name) e.target.style.borderColor = "var(--mocha-border)";
                      }}
                    />
                    <FiUser
                      size={17}
                      color="var(--text-muted)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                  </div>
                  {errors.name && (
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-burgundy)", marginTop: "0.35rem", fontWeight: "600" }}>
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div style={{ marginBottom: "1.35rem" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Email Address <span style={{ color: "var(--accent-burgundy)" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.78rem 1rem 0.78rem 2.6rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--bg-subtle)",
                        border: errors.email ? "1.5px solid var(--accent-burgundy)" : "1px solid var(--mocha-border)",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        color: "var(--text-primary)",
                        outline: "none",
                        transition: "all var(--transition-fast)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-burgundy)")}
                      onBlur={(e) => {
                        if (!errors.email) e.target.style.borderColor = "var(--mocha-border)";
                      }}
                    />
                    <FiMail
                      size={17}
                      color="var(--text-muted)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                  </div>
                  {errors.email && (
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-burgundy)", marginTop: "0.35rem", fontWeight: "600" }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div style={{ marginBottom: "1.35rem" }}>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Subject <span style={{ color: "var(--accent-burgundy)" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. Collaboration on SkillSync or Project Discussion"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.78rem 1rem 0.78rem 2.6rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--bg-subtle)",
                        border: errors.subject ? "1.5px solid var(--accent-burgundy)" : "1px solid var(--mocha-border)",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        color: "var(--text-primary)",
                        outline: "none",
                        transition: "all var(--transition-fast)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-burgundy)")}
                      onBlur={(e) => {
                        if (!errors.subject) e.target.style.borderColor = "var(--mocha-border)";
                      }}
                    />
                    <FiFileText
                      size={17}
                      color="var(--text-muted)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                  </div>
                  {errors.subject && (
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-burgundy)", marginTop: "0.35rem", fontWeight: "600" }}>
                      {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.45rem" }}>
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                      }}
                    >
                      Message <span style={{ color: "var(--accent-burgundy)" }}>*</span>
                    </label>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: "600",
                        color: formData.message.trim().length >= 10 ? "#2e7d32" : "var(--text-muted)",
                      }}
                    >
                      {formData.message.trim().length} / 10 min characters {formData.message.trim().length >= 10 && "✓"}
                    </span>
                  </div>

                  <div style={{ position: "relative" }}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--bg-subtle)",
                        border: errors.message ? "1.5px solid var(--accent-burgundy)" : "1px solid var(--mocha-border)",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        color: "var(--text-primary)",
                        outline: "none",
                        resize: "vertical",
                        lineHeight: "1.6",
                        transition: "all var(--transition-fast)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-burgundy)")}
                      onBlur={(e) => {
                        if (!errors.message) e.target.style.borderColor = "var(--mocha-border)";
                      }}
                    />
                  </div>
                  {errors.message && (
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-burgundy)", marginTop: "0.35rem", fontWeight: "600" }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button Area */}
                <motion.div
                  animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
                  transition={{ duration: 0.45 }}
                  style={{ width: "100%" }}
                >
                  <Button
                    type="submit"
                    variant={status === "success" ? "success" : "primary"}
                    size="lg"
                    disabled={status === "loading"}
                    loading={status === "loading"}
                    loadingText="Delivering Your Message..."
                    icon={status === "success" ? FiCheckCircle : status === "error" ? FiRefreshCw : FiSend}
                    iconPosition="right"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem",
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      letterSpacing: "0.02em",
                      boxShadow:
                        status === "success"
                          ? "0 8px 24px rgba(46, 125, 50, 0.35)"
                          : "0 10px 25px -4px rgba(112, 39, 53, 0.4), 0 4px 10px -2px rgba(112, 39, 53, 0.25)",
                    }}
                  >
                    {status === "success"
                      ? "Message Delivered! ✨"
                      : status === "error"
                        ? "Failed to Send — Click to Retry"
                        : "Send Message"}
                  </Button>
                </motion.div>

                {/* Error Fallback: Direct Mailto Link */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: "1.25rem",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px dashed var(--mocha-border)",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Encountering an issue? Send directly through your mail app:
                    </p>
                    <a
                      href={`mailto:${personalInfo.socialLinks.rawEmail}?subject=${encodeURIComponent(
                        formData.subject || "Portfolio Inquiry from Website"
                      )}&body=${encodeURIComponent(
                        formData.message ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : ""
                      )}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        color: "var(--accent-burgundy)",
                        fontWeight: "700",
                        fontSize: "0.92rem",
                        textDecoration: "underline",
                      }}
                    >
                      <FiMail size={16} /> Open Mail Client ({personalInfo.socialLinks.rawEmail})
                    </a>
                  </motion.div>
                )}

                {/* Assurance footer */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.45rem",
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                  }}
                >
                  <FiCheckCircle size={14} color="#2e7d32" />
                  <span>Direct delivery to lingampallyadharshini@gmail.com</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 868px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
