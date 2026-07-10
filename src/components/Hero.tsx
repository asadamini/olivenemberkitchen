import { ArrowRight, Check } from "lucide-react";
import { images, trustItems } from "../data/menu";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill-row">
            <span className="pill pill-outline">Individual boxed meals</span>
            <span className="pill pill-outline">Tray catering</span>
            <span className="pill pill-outline">A CityBites kitchen brand</span>
          </div>
          <h1>Fresh Mediterranean catering for office lunches, meetings, and team events.</h1>
          <p>
            Bowls, wraps, salads, mezze, baklava, and catering trays made fresh for workplace meals.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/order">
              Order Catering <ArrowRight size={17} />
            </a>
            <a className="button button-secondary-on-dark" href="#menu">
              View Menu
            </a>
          </div>
          <ul className="trust-list">
            {trustItems.map((item) => (
              <li key={item}>
                <Check size={15} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-mosaic" aria-label="Mediterranean catering photography">
          <img className="mosaic-tall" src={images.chickenBowl} alt="Chicken shawarma bowl with rice, hummus, salad, pickled onions, and pita" />
          <img src={images.comboBowl} alt="Combo bowl with chicken shawarma and gyro over rice" />
          <img src={images.falafelBowl} alt="Falafel bowl with hummus, cucumber salad, and greens" />
          <img className="mosaic-wide" src={images.cateringTrays} alt="Mediterranean catering trays with rice, chicken, gyro, and falafel" />
        </div>
      </div>
      <div className="trust-strip">
        <div className="container trust-strip-inner">
          {trustItems.map((item) => (
            <span key={item}>
              <Check size={14} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
