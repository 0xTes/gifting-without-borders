import ButtonLink from "@/components/ui/button-link";
import ContentReadyPanel from "@/components/ui/content-ready-panel";
import SectionHeading from "@/components/ui/section-heading";

export default function VoicesOfSupport() {
  return (
    <section aria-labelledby="voices-heading" className="section section--surface">
      <div className="container voices-layout">
        <div>
          <SectionHeading
            eyebrow="Voices of Support"
            id="voices-heading"
            intro="The people closest to this work deserve to be represented accurately and with their consent."
          >
            Listening is part of being accountable.
          </SectionHeading>
          <ButtonLink href="/stories" variant="text">
            Visit our stories <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="voices-layout__panels">
          <ContentReadyPanel title="Stories shared with care">
            Donor, volunteer, partner, and community perspectives will be published only when they are complete, approved, and meaningful.
          </ContentReadyPanel>
          <aside className="voices-layout__note">
            <p className="eyebrow">Our editorial commitment</p>
            <p>
              We do not use anonymous quotations or polished soundbites to manufacture trust. Real voices will be presented in their own context.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
