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
      background: "#FAF8F4",
      surface: "#FFFFFF",
      border: "#E5E7EB",
      text: {
        primary: "#111827",
        secondary: "#6B7280",
        muted: "#9CA3AF",
      },
    },

    success: "#16A34A",

    focus: "#F59E0B",
  },

  typography: {
    fonts: {
      heading: "var(--font-heading)",
      body: "var(--font-body)",
    },

    sizes: {
      h1: "clamp(3rem, 6vw, 4.5rem)",
      h2: "clamp(2.25rem, 4vw, 3.5rem)",
      h3: "clamp(1.75rem, 3vw, 2.5rem)",
      h4: "1.5rem",

      bodyLg: "1.125rem",
      body: "1rem",
      small: "0.875rem",
    },

    lineHeights: {
      tight: 1.1,
      heading: 1.15,
      body: 1.7,
      relaxed: 1.9,
    },

    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "4rem",
    "5xl": "6rem",
  },

  sectionSpacing: {
    mobile: "4rem",
    tablet: "5rem",
    desktop: "6rem",
  },

  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
  },

  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",

    md: "0 4px 12px rgba(0, 0, 0, 0.08)",

    lg: "0 12px 32px rgba(0, 0, 0, 0.10)",
  },

  containers: {
    narrow: "42rem",
    reading: "48rem",
    content: "80rem",
  },

  zIndex: {
    base: 1,
    dropdown: 50,
    sticky: 100,
    overlay: 200,
    modal: 300,
    toast: 400,
  },

  motion: {
    duration: {
      fast: "150ms",
      normal: "250ms",
      slow: "400ms",
    },

    easing: {
      standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
    },

    scale: {
      hover: 1.02,
    },
  },

  accessibility: {
    minimumTouchTarget: 44,

    focusRingWidth: 2,

    focusRingColor: "#F59E0B",
  },
};

export const siteTheme = {
  brandName: "Gifting Without Borders",

  designDirection: {
    editorialHumanitarian: 66,
    modernProduct: 34,
  },

  principles: [
    "trust",
    "clarity",
    "accessibility",
    "credibility",
    "humanity",
    "performance",
  ],

  contentMantra: "Show, then tell.",
};

export default theme;