import Link from "next/link";

export default function PaymentChannelPage({ channel }) {
  return (
    <main id="main-content">
      <section className="section payment-channel-page">
        <div className="container-sm">
          <p className="eyebrow">Giving information</p>
          <h1>{channel}</h1>
          <p className="body-large">
            This payment channel is not displayed with transaction details until the organisation has verified the information for publication.
          </p>
          <p>
            Please use the Donate page to understand the available giving structure and to check for verified updates.
          </p>
          <Link className="button button--primary" href="/donate">
            Visit the Donate page
          </Link>
        </div>
      </section>
    </main>
  );
}
