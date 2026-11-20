/**
 * EmailJS Configuration & Helper
 * Adharshini Lingampally Portfolio
 * 
 * Instructions for user:
 * 1. Sign up for a free account at https://www.emailjs.com/
 * 2. Add an Email Service (e.g. Gmail) to obtain your SERVICE_ID
 * 3. Create an Email Template to obtain your TEMPLATE_ID
 * 4. Find your PUBLIC_KEY in Account > Security
 * 5. Create a `.env` file in the project root with:
 *      VITE_EMAILJS_SERVICE_ID=your_service_id
 *      VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *      VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * 
 * If these are not configured, the contact form will give clear, helpful
 * instructions on screen without showing a fake success message.
 */

import emailjs from "@emailjs/browser";

export const emailjsConfig = {
  serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_fhgk0s2").trim(),
  templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zjhrgnk").trim(),
  publicKey: (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "k3Xq5il4hzh5PHf0i").trim(),
};

// Initialize emailjs globally
if (emailjsConfig.publicKey && emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY") {
  try {
    emailjs.init({ publicKey: emailjsConfig.publicKey });
  } catch (e) {
    console.warn("EmailJS init warning:", e);
  }
}

export const isEmailJSConfigured = () => {
  return (
    Boolean(emailjsConfig.serviceId) &&
    emailjsConfig.serviceId !== "YOUR_SERVICE_ID" &&
    Boolean(emailjsConfig.templateId) &&
    emailjsConfig.templateId !== "YOUR_TEMPLATE_ID" &&
    Boolean(emailjsConfig.publicKey) &&
    emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY"
  );
};

export const sendContactEmail = async (templateParams) => {
  if (!isEmailJSConfigured()) {
    throw new Error(
      "EMAILJS_NOT_CONFIGURED: Please configure your EmailJS credentials in .env (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) to receive messages."
    );
  }

  // Ensure init was called with the key
  try {
    emailjs.init({ publicKey: emailjsConfig.publicKey });
  } catch (_) {}

  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.templateId,
    templateParams,
    {
      publicKey: emailjsConfig.publicKey,
    }
  );
};
