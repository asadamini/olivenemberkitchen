import { ArrowRight, Check } from "lucide-react";
import { cateringBullets, images } from "../data/menu";

export function CateringCallout() {
  return (
    <section className="catering-callout">
      <div className="container catering-callout-grid">
        <div className="catering-callout-copy">
          <span className="eyebrow">Office catering</span>
          <h2>Built for office catering</h2>
          <p>
            From individually packaged meals to buffet-style trays, Olive &amp; Ember makes Mediterranean catering easy for teams of 10 to 100+.
            Choose your proteins, sides, sauces, appetizers, desserts, and drinks.
          </p>
          <ul>
            {cateringBullets.map((bullet) => (
              <li key={bullet}>
                <Check size={15} />
                {bullet}
              </li>
            ))}
          </ul>
          <a className="button button-olive" href="#quote">
            Send a Catering Request <ArrowRight size={16} />
          </a>
        </div>
        <div className="catering-callout-media">
          <img src={images.buffetSpread} alt="Full Mediterranean catering buffet with trays of proteins, rice, hummus, pita, and sauces" />
        </div>
      </div>
    </section>
  );
}
