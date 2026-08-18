import Link from "next/link";

export default function FutureRoute({ title }) {
  return (
    <main id="main-content">
      <section className="section future-route">
        <div className="container-sm">
          <p className="eyebrow">Gifting Without Borders</p>
          <h1>{title}</h1>
          <p className="body-large">
            This information is being prepared for publication. Please return to the Homepage to learn about our mission and approach.
          </p>
          <Link className="button button--primary" href="/">
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
