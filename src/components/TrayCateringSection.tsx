import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { images, trayPackages } from "../data/menu";

export function TrayCateringSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="section section-sage" id="tray-catering">
      <div className="container">
        <div className="section-heading compact">
          <span className="eyebrow">Tray catering</span>
          <h2>Built for meetings, trainings, and office events</h2>
          <p>Choose boxed meals for individual service or tray catering for a shared Mediterranean spread.</p>
        </div>
        <div className="package-grid">
          {trayPackages.map((pkg) => (
            <article className="package-card" key={pkg.title}>
              <img src={pkg.image} alt={pkg.title} />
              <div>
                <span className="package-price">{pkg.price}</span>
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <ul>
                  {pkg.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={15} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a className="text-link" href="#quote">
                  Send a catering request <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="tray-details">
          <button type="button" onClick={() => setShowDetails((value) => !value)}>
            Tray details and protein choices
            <ChevronRight className={showDetails ? "rotate" : ""} size={18} />
          </button>
          {showDetails && (
            <div className="tray-detail-grid">
              <div>
                <h3>Protein choices</h3>
                <p>Chicken shawarma, beef shawarma, gyro meat, falafel, or combo proteins.</p>
              </div>
              <div>
                <h3>Included setup</h3>
                <p>Mediterranean rice, cucumber tomato salad, hummus, pita, pickled onions, toppings, and sauces.</p>
              </div>
              <div>
                <h3>Good for</h3>
                <p>Office lunches, onboarding days, client meetings, trainings, and team events.</p>
              </div>
            </div>
          )}
        </div>
        <img className="wide-food-image" src={images.cateringSpread} alt="Large Mediterranean catering spread with trays and sides" />
      </div>
    </section>
  );
}
