import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "CleanSaar",
  // SEO-Rich Description: Includes primary keywords and location
  description:
    "Professionelle Gebäudereinigung & Büroreinigung in Saarbrücken. Clean-Saar sorgt für Sauberkeit im gesamten Saarland. Zuverlässig, gründlich und regional.",
  url: "https://godastro.netlify.app", // Update to your actual domain
  lang: "de", // Critical for Google.de to prioritize your site
  locale: "de_DE",
  author: "Clean-Saar Team",

  // Local businesses rarely use Twitter/Discord for leads.
  // I've kept the structure but focused on regional presence.
  twitter: "@CleanSaar",
  ogImage: ogImage,

  socialLinks: {
    instagram: "https://instagram.com/cleansaar", // Better for "Before/After" cleaning pics
    facebook: "https://facebook.com/cleansaar", // Better for local Saarland community reach
    linkedin: "https://linkedin.com/company/cleansaar", // Good for B2B Büroreinigung
  },

  navLinks: [
    { text: "Startseite", href: "/" },
    { text: "Leistungen", href: "/services" }, // "Services" is fine, but "Leistungen" is more common in DE
    { text: "Über uns", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Preise", href: "/preise" }, // Highly searched: "Reinigungspreise Saarbrücken"
    { text: "Kontakt", href: "/contact" },
  ],
};
