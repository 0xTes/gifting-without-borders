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
            Practical care, shared learning, and community-centred support with dignity at the heart of every encounter.
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
          <p className="site-footer__heading">Contact</p>
          <address className="site-footer__contact">
            <p>Palm Avenue, Mushin,<br />Lagos, Nigeria</p>
            <a href="tel:+2349123528792">+234 9123 528 792</a>
            <a href="mailto:giftwob@gmail.com">giftwob@gmail.com</a>
          </address>
          <Link className="text-link" href={siteConfig.donateHref}>
            Visit the Donate page <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="site-footer__social">
          <p className="site-footer__heading">Follow us</p>
          <p className="site-footer__support-copy">Official social account links will be added here soon.</p>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <div className="site-footer__copyright">
          <p>© {year} Gifting Without Borders. All rights reserved.</p>
          <span className="site-footer__credit">
            <span>Website by</span>
            <Image
              alt="Teslim Digital"
              height={1007}
              src="/images/brand/teslim-digital-logo.png"
              width={2182}
            />
          </span>
        </div>
        <p>Community-centred support, shared with care.</p>
      </div>
    </footer>
  );
}
