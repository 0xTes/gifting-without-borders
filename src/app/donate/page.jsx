import AccountNumberCopy from "@/components/donate/account-number-copy";
import PageHero from "@/components/ui/page-hero";

const accountNumber = "7631132015";

export default function DonatePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Donate"
        intro="Every gift helps make practical, community-centred support possible."
        title="Give with clarity."
      />

      <section className="section section--surface" aria-labelledby="bank-transfer-heading">
        <div className="container donate-primary">
          <div>
            <p className="eyebrow">Primary giving route</p>
            <h2 id="bank-transfer-heading">Donate via bank transfer.</h2>
            <p className="body-large">Use the account details below to make a direct gift to Gifting Without Borders.</p>
          </div>
          <div className="donate-account">
            <dl>
              <div>
                <dt>Bank</dt>
                <dd>FCMB</dd>
              </div>
              <div>
                <dt>Account name</dt>
                <dd>THE GIFTWOB</dd>
              </div>
              <div>
                <dt>Account number</dt>
                <dd className="donate-account__number">{accountNumber}</dd>
              </div>
            </dl>
            <AccountNumberCopy accountNumber={accountNumber} />
            <p className="donate-account__note">Please use your name as the payment reference. For questions or receipts, contact <a href="mailto:giftwob@gmail.com">giftwob@gmail.com</a>.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="additional-methods-heading">
        <div className="container">
          <div className="donate-methods__heading">
            <div><p className="eyebrow">More ways to give</p><h2 id="additional-methods-heading">Additional channels are coming soon.</h2></div>
            <p>Bank transfer is the available giving route today. Other channels will be added here when their official details are ready.</p>
          </div>
          <div className="donate-methods">
            <article><h3>Paystack</h3><p>Not yet available.</p></article>
            <article><h3>Flutterwave</h3><p>Not yet available.</p></article>
            <article><h3>OPay</h3><p>Not yet available.</p></article>
            <article><h3>PalmPay</h3><p>Not yet available.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--teal donate-confidence" aria-labelledby="donor-confidence-heading">
        <div className="container donate-confidence__grid">
          <div><p className="eyebrow">Thank you</p><h2 id="donor-confidence-heading">Your support carries practical care forward.</h2></div>
          <div>
            <p>For any question about a transfer or receipt, please contact the organization directly at <a href="mailto:giftwob@gmail.com">giftwob@gmail.com</a>.</p>
            <p>Thank you for choosing to support work that puts dignity and community first.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
