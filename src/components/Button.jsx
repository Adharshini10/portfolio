import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

/**
 * Reusable Button Component
 * Supports internal routing (to), external links (href), or standard button actions (onClick).
 * Variants: "primary" | "secondary" | "outline" | "ghost" | "success"
 * Sizes: "sm" | "md" | "lg"
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  download,
  target,
  rel,
  disabled = false,
  loading = false,
  loadingText,
  type = "button",
  ...props
}) {
  const isActionDisabled = disabled || loading;

  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6rem",
    fontFamily: "var(--font-sans)",
    fontWeight: "600",
    borderRadius: "var(--radius-full)",
    cursor: isActionDisabled ? (loading ? "wait" : "not-allowed") : "pointer",
    transition: "all var(--transition-normal)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    position: "relative",
    overflow: "hidden",
    border: "1px solid transparent",
    letterSpacing: "0.015em",
  };

  const sizeStyles = {
    sm: {
      padding: "0.45rem 1.05rem",
      fontSize: "0.85rem",
    },
    md: {
      padding: "0.72rem 1.5rem",
      fontSize: "0.95rem",
    },
    lg: {
      padding: "0.92rem 2.1rem",
      fontSize: "1.05rem",
    },
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, #702735 0%, #8A2B3E 50%, #521823 100%)",
      color: "var(--text-inverse)",
      borderColor: "rgba(255, 241, 227, 0.22)",
      boxShadow: "0 6px 20px rgba(112, 39, 53, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
    },
    success: {
      background: "linear-gradient(135deg, #1f7a3a 0%, #2e8b49 50%, #135e2b 100%)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.25)",
      boxShadow: "0 6px 20px rgba(31, 122, 58, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    },
    secondary: {
      backgroundColor: "var(--mocha-cream)",
      color: "var(--text-primary)",
      borderColor: "var(--mocha-border)",
      boxShadow: "0 3px 10px rgba(56, 37, 31, 0.08)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--accent-burgundy)",
      borderColor: "var(--accent-burgundy)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent",
    },
  };

  const hoverAnimations = isActionDisabled
    ? {}
    : {
        whileHover: {
          scale: 1.025,
          y: -2,
          boxShadow:
            variant === "primary"
              ? "0 10px 24px rgba(112, 39, 53, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
              : variant === "success"
              ? "0 10px 24px rgba(31, 122, 58, 0.45)"
              : "0 8px 18px rgba(56, 37, 31, 0.12)",
        },
        whileTap: { scale: 0.98, y: 0 },
      };

  const spinner = (
    <svg
      className="button-spinner"
      width={size === "sm" ? 14 : 18}
      height={size === "sm" ? 14 : 18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );

  const content = (
    <>
      {loading ? (
        <>
          {spinner}
          <span>{loadingText || children}</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 15 : 18} />}
          <span>{children}</span>
          {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 15 : 18} />}
        </>
      )}
    </>
  );

  const { style: customStyle, ...restProps } = props;

  const mergedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    opacity: disabled ? 0.65 : loading ? 0.9 : 1,
    ...(customStyle || {}),
  };

  if (to && !disabled) {
    return (
      <motion.div {...hoverAnimations} style={{ display: "inline-block", width: customStyle?.width || "auto" }}>
        <Link to={to} className={`custom-button ${className}`} style={mergedStyles} {...restProps}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href && !disabled) {
    return (
      <motion.div {...hoverAnimations} style={{ display: "inline-block", width: customStyle?.width || "auto" }}>
        <a
          href={href}
          download={download}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={`custom-button ${className}`}
          style={mergedStyles}
          {...restProps}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
      style={mergedStyles}
      {...hoverAnimations}
      {...restProps}
    >
      {content}
    </motion.button>
  );
}
