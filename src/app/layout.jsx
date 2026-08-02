import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Gifting Without Borders",
    template: "%s | Gifting Without Borders",
  },

  description:
    "A humanitarian nonprofit advancing dignity, opportunity, and sustainable impact through community-centered giving.",

  applicationName: "Gifting Without Borders",

  keywords: [
    "nonprofit",
    "charity",
    "humanitarian",
    "donations",
    "community impact",
    "education",
    "healthcare",
    "poverty alleviation",
    "Nigeria",
    "Africa",
  ],

  authors: [
    {
      name: "Gifting Without Borders",
    },
  ],

  creator: "Gifting Without Borders",

  publisher: "Gifting Without Borders",

  metadataBase: new URL("https://www.giftingwithoutborders.org"),

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gifting Without Borders",
    title: "Gifting Without Borders",
    description:
      "Building trust through transparent giving, measurable impact, and community-centered humanitarian work.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gifting Without Borders",
    description:
      "Building trust through transparent giving, measurable impact, and community-centered humanitarian work.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${merriweather.variable}`}
      >
        {children}
      </body>
    </html>
  );
}