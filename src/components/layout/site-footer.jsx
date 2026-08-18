import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__identity">
          <Link className="site-brand" href="/">
            <Image
              alt="Gifting Without Borders"
              className="site-brand__logo"
              height={278}
              src="/images/brand/gifting-without-borders-logo.png"
              width={494}
            />
          </Link>
          <p>
            Supporting compassionate, community-centered humanitarian work with dignity and care.
          </p>
        </div>

        <div>
          <p className="site-footer__heading">Explore</p>
          <nav aria-label="Footer navigation" className="site-footer__nav">
            {siteConfig.navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="site-footer__heading">Support</p>
          <p className="site-footer__support-copy">
            Giving information is shared only through verified organisation channels.
          </p>
          <Link className="text-link" href={siteConfig.donateHref}>
            Visit the Donate page <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} Gifting Without Borders. All rights reserved.</p>
        <p>Built for clarity, dignity, and accountability.</p>
      </div>
    </footer>
  );
}
