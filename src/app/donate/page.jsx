import PageHero from "@/components/ui/page-hero";

export default function DonatePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Donate"
        intro="Support should be straightforward, but it should also be safe. The project owner has approved reuse of legacy giving information, but no exact account number, account name, wallet identifier, or provider link was available in the supplied source material."
        title="Give with confidence, not assumptions."
      />

      <section className="section section--surface" aria-labelledby="bank-transfer-heading">
        <div className="container donate-primary">
          <div>
            <p className="eyebrow">Primary giving route</p>
            <h2 id="bank-transfer-heading">Bank transfer</h2>
            <p className="body-large">Bank transfer remains the primary giving route when exact, current payment details are supplied for publication.</p>
          </div>
          <div className="donate-primary__status">
            <p className="donate-primary__status-label">Details being confirmed</p>
            <h3>No bank details are active yet.</h3>
            <p>
              The owner has approved legacy donation information for reuse, but no unambiguous bank name, account name, or account number was available to publish safely. These values will appear only when the exact approved record is supplied.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="additional-methods-heading">
        <div className="container">
          <div className="donate-methods__heading">
            <div><p className="eyebrow">Additional methods</p><h2 id="additional-methods-heading">Local giving options, ready for verification.</h2></div>
            <p>Each channel has a place in the structure. Links, account identifiers, and QR codes remain intentionally absent until exact approved values are available.</p>
          </div>
          <div className="donate-methods">
            <article><h3>Paystack</h3><p>Details being confirmed.</p></article>
            <article><h3>Flutterwave</h3><p>Details being confirmed.</p></article>
            <article><h3>OPay</h3><p>Details being confirmed.</p></article>
            <article><h3>PalmPay</h3><p>Details being confirmed.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--teal donate-confidence" aria-labelledby="donor-confidence-heading">
        <div className="container donate-confidence__grid">
          <div><p className="eyebrow">Donor confidence</p><h2 id="donor-confidence-heading">Before you give</h2></div>
          <div>
            <p>Use only payment information published through verified Gifting Without Borders channels. If a payment detail is not present here, do not assume it is current.</p>
            <p>This protects both donors and the organisation while the final giving details are prepared.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
