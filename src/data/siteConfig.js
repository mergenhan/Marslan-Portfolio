/**
 * ─────────────────────────────────────────────────────────────────
 *  SITE IMAGE & ASSET CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD AN IMAGE
 *  ───────────────────
 *  1. Drop your image file into the  public/images/  folder.
 *     e.g.  public/images/avatar.jpg
 *           public/images/iac-security.png
 *           public/images/about-photo.webp
 *
 *  2. Set the path here (always starts with  /images/ ).
 *     e.g.  avatar: '/images/avatar.jpg'
 *
 *  3. Save & the image appears on the site automatically.
 *
 *  SUPPORTED FORMATS: jpg, jpeg, png, webp, gif, svg, avif
 *
 *  Leave a value as  null  to hide that image slot gracefully.
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {

  // ── HERO SECTION ─────────────────────────────────────────────
  hero: {
    /**
     * Your profile / avatar photo shown next to the headline.
     * Recommended size: 400×400 px or larger, square crop.
     * Set to null to hide.
     */
    avatar: null,                       // e.g. '/images/avatar.jpg'
  },

  // ── ABOUT SECTION ────────────────────────────────────────────
  about: {
    /**
     * A wider photo shown in the About section.
     * Recommended size: 800×600 px, 4:3 ratio.
     * Set to null to hide.
     */
    photo: null,                        // e.g. '/images/about-photo.jpg'
  },

  // ── PROJECT IMAGES ───────────────────────────────────────────
  /**
   * Keys must match the  slug  field in src/data/projects.js.
   * Recommended size: 1200×900 px (4:3) for cards, 1600×900 px for detail page.
   * Set to null to show the numbered placeholder instead.
   */
  projectImages: {
    'iac-security-terraform-aws':  null,  // e.g. '/images/iac-security.png'
    'deception-cloning-honeypot':  null,  // e.g. '/images/deception.png'
  },

  // ── FAVICON ──────────────────────────────────────────────────
  /**
   * Browser tab icon.
   * Place the file in  public/  (not public/images/).
   * Supported: .svg (best), .png, .ico
   */
  favicon: '/favicon.svg',             // e.g. '/favicon.png'

  // ── OPEN GRAPH / SOCIAL PREVIEW ──────────────────────────────
  /**
   * Image shown when you share the site on LinkedIn, Twitter, etc.
   * Recommended size: 1200×630 px.
   */
  ogImage: null,                       // e.g. '/images/og-image.jpg'

};
