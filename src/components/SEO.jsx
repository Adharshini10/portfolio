import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Updates document.title and meta description dynamically
 */
export default function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = "Adharshini Lingampally";
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | Portfolio`;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
    }
  }, [title, description, location.pathname]);

  return null;
}
