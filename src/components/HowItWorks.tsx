import { howItWorks } from "../data/menu";

export function HowItWorks() {
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-heading compact centered">
          <span className="eyebrow">Simple process</span>
          <h2>How ordering works</h2>
        </div>
        <div className="steps-grid">
          {howItWorks.map((step) => (
            <article className="step-card" key={step.title}>
              <span>{step.number}</span>
              <i aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
