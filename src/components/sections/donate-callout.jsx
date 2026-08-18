import ButtonLink from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

export default function DonateCallout() {
  return (
    <section aria-labelledby="donate-heading" className="section donate-callout">
      <div className="container">
        <div className="donate-callout__frame">
          <div>
            <p className="eyebrow">Give with intention</p>
            <h2 id="donate-heading">A thoughtful gift can help make meaningful work possible.</h2>
          </div>
          <div className="donate-callout__content">
            <p>
              Explore the ways to support Gifting Without Borders. Donation details are shared through the organisation’s verified giving channels.
            </p>
            <div className="button-group">
              <ButtonLink href={siteConfig.donateHref}>Donate</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Learn more about us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
