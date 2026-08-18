// JavaScript-facing semantic theme contract. Runtime CSS tokens live in app/globals.css.
export const theme = {
  colors: {
    primary: {
      500: "#0F766E",
      600: "#0D5E58",
      700: "#0A4A45",
    },
    accent: {
      500: "#F59E0B",
      600: "#D97706",
    },
    neutral: {
      background: "#F8F7F2",
      surface: "#FFFFFF",
      border: "#E2E8F0",
      text: {
        primary: "#0F172A",
        secondary: "#334155",
        muted: "#64748B",
      },
    },
    success: "#16A34A",
    focus: "#92400E",
  },
  typography: {
    fonts: {
      heading: "var(--font-merriweather)",
      body: "var(--font-inter)",
    },
    sizes: {
      display: "clamp(2.8rem, 6.2vw, 5rem)",
      section: "clamp(2rem, 3.7vw, 3.45rem)",
      card: "clamp(1.25rem, 1.9vw, 1.6rem)",
      bodyLarge: "clamp(1.05rem, 1.7vw, 1.2rem)",
      body: "1rem",
      meta: "0.75rem",
    },
    lineHeights: {
      heading: 1.15,
      body: 1.65,
    },
  },
  spacing: {
    gutter: "1.25rem to 2rem",
    section: "clamp(4.5rem, 8vw, 8rem)",
  },
  containers: {
    narrow: "48rem",
    content: "80rem",
    wide: "90rem",
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  motion: {
    fast: "150ms",
    normal: "200ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  accessibility: {
    minimumTouchTarget: 44,
    focusRingWidth: 3,
    focusRingColor: "#92400E",
  },
};

export const siteTheme = {
  brandName: "Gifting Without Borders",
  designDirection: {
    editorialHumanitarian: 66,
    modernProduct: 34,
  },
  principles: ["trust", "clarity", "accessibility", "credibility", "humanity", "performance"],
  contentMantra: "Show, then tell.",
};

export default theme;
