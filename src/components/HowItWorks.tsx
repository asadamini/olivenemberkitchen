import { howItWorks } from "../data/menu";

export function HowItWorks() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-heading compact">
          <span className="eyebrow">How it works</span>
          <h2>Simple enough for busy office teams</h2>
        </div>
        <div className="steps-grid">
          {howItWorks.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
