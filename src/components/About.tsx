import { ArrowRight } from "lucide-react";
import { images } from "../data/menu";
import { LogoMark } from "./Logo";

export function About() {
  return (
    <section className="section section-cream about-section" id="about">
      <div className="container about-grid">
        <div className="about-media-card">
          <img src={images.heroSpread} alt="Olive and Ember Mediterranean catering boxed meals spread with bowls, wraps, hummus, and pita" />
          <div className="about-media-label">
            <LogoMark />
            <div>
              <strong>Olive &amp; Ember Mediterranean Kitchen</strong>
              <span>Fresh Mediterranean Catering</span>
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow">About us</span>
          <h2>Mediterranean catering made for the modern workplace</h2>
          <p>
            Olive &amp; Ember Mediterranean Kitchen was created for office lunches, meetings, team events, and modern workplace catering.
            Our menu focuses on fresh bowls, wraps, salads, mezze, baklava, and customizable catering trays made fresh and delivered ready to serve.
          </p>
          <p>
            Whether you are ordering boxed meals for 10 or a full catering spread for 100, we make it simple to feed your team well with flavors they will actually look forward to.
          </p>
          <div className="about-actions">
            <a className="button button-primary" href="#quote">
              Order Catering <ArrowRight size={17} />
            </a>
            <a className="button button-outline-dark" href="#menu">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
