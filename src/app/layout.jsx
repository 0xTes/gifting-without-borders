import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Gifting Without Borders",
    template: "%s | Gifting Without Borders",
  },

  description:
    "Gifting Without Borders shares community-centred work across empowerment, medical outreach, food support, and widows outreach.",

  applicationName: "Gifting Without Borders",

  keywords: ["Gifting Without Borders", "community support", "projects"],

  authors: [
    {
      name: "Gifting Without Borders",
    },
  ],

  creator: "Gifting Without Borders",

  publisher: "Gifting Without Borders",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gifting Without Borders",
    title: "Gifting Without Borders",
    description:
      "Gifting Without Borders shares community-centred work across empowerment, medical outreach, food support, and widows outreach.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gifting Without Borders",
    description:
      "Gifting Without Borders shares community-centred work across empowerment, medical outreach, food support, and widows outreach.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
