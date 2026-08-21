import Link from "next/link";
import { redirect } from "next/navigation";

export default function PaymentChannelPage({ channel }) {
  if (channel === "Bank transfer") {
    redirect("/donate");
  }

  return (
    <main id="main-content">
      <section className="section payment-channel-page">
        <div className="container-sm">
          <p className="eyebrow">Giving information</p>
          <h1>{channel}</h1>
          <p className="body-large">
            This giving channel is not yet available.
          </p>
          <p>
            Please use the Donate page for the current bank-transfer giving route.
          </p>
          <Link className="button button--primary" href="/donate">
            Visit the Donate page
          </Link>
        </div>
      </section>
    </main>
  );
}
