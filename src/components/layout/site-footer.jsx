import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

function SocialIcon({ name }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.2H7.8V13h2.7v8h3.1Z" />
      </svg>
    );
  }

  if (name === "twitter") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M21.4 6.2c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.5-1.6.8-2.5 1a4 4 0 0 0-6.9 2.7c0 .3 0 .6.1.9a11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5 0 1.9 1.4 3.6 3.4 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A8.1 8.1 0 0 1 3 18.4 11.5 11.5 0 0 0 9.2 20c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.5 1.4-1.2 1.9-1.9l-1.1.5Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect height="16" rx="4" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.4" cy="6.7" r="1" />
    </svg>
  );
}

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
            A public record of Gifting Without Borders’ legacy project areas and future verified information.
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

        <div className="site-footer__social">
          <p className="site-footer__heading">Follow us</p>
          <p className="site-footer__support-copy">Platform links are placeholders until official accounts are confirmed.</p>
          <ul aria-label="Social platforms awaiting account confirmation" className="site-footer__social-list">
            {siteConfig.socialLinks.map((social) => (
              <li key={social.label}>
                <a aria-label={`${social.label} — account link to be confirmed`} href={social.href} rel="noreferrer" target="_blank">
                  <SocialIcon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} Gifting Without Borders. All rights reserved.</p>
        <p>Public information is updated as it is verified.</p>
      </div>
    </footer>
  );
}
