import ContentReadyPanel from "@/components/ui/content-ready-panel";
import SectionHeading from "@/components/ui/section-heading";

export default function TransparencyAccountability() {
  return (
    <section aria-labelledby="accountability-heading" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Transparency & accountability"
          id="accountability-heading"
          intro="Giving should feel informed. We are building a reporting practice that makes our work easier to understand and question."
        >
          Clear reporting builds confidence over time.
        </SectionHeading>

        <div className="accountability-grid">
          <ContentReadyPanel label="Publishing status · In preparation" title="Annual report">
            A future report will bring together key activities, learning, and context from the year.
          </ContentReadyPanel>
          <ContentReadyPanel label="Publishing status · In preparation" title="Financial overview">
            Financial information will be shared through verified reporting rather than broad, unsupported claims.
          </ContentReadyPanel>
          <ContentReadyPanel label="Publishing status · In preparation" title="Impact summary">
            A concise view of verified outcomes and the meaning behind them will be available here.
          </ContentReadyPanel>
        </div>
        <p className="section-note">
          No annual report, financial overview, or impact summary was located in the audited legacy source. Report links and downloads will appear only after the relevant materials have been formally published.
        </p>
      </div>
    </section>
  );
}
