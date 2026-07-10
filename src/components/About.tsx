import { ArrowRight } from "lucide-react";
import { images } from "../data/menu";

export function About() {
  return (
    <section className="section section-cream about-section" id="about">
      <div className="container about-grid">
        <div className="about-image-stack">
          <img src={images.buffetSpread} alt="Mediterranean buffet catering spread" />
          <img src={images.baklava} alt="Baklava pieces for catering dessert" />
        </div>
        <div>
          <span className="eyebrow">About Olive & Ember</span>
          <h2>A Mediterranean catering brand made for workplace meals</h2>
          <p>
            Olive & Ember is a CityBites kitchen brand focused on fresh, warm, office-friendly Mediterranean food:
            bowls, wraps, salads, mezze, baklava, and trays that are easy to serve at work.
          </p>
          <p>
            The menu is intentionally focused, so teams get reliable choices, clear pricing, and food that travels well
            for meetings, trainings, onboarding days, and company lunches.
          </p>
          <a className="button button-primary" href="#quote">
            Request a Quote <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
