import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cateringPackages, proteinTrays, sideTrays, type CateringPackage } from "../data/menu";

function TrayPackageCard({ pkg }: { pkg: CateringPackage }) {
  return (
    <article className={`catering-package-card${pkg.featured ? " is-featured" : ""}`}>
      <div className="catering-package-media">
        {pkg.featured && <span className="featured-ribbon">Most popular</span>}
        <img src={pkg.image} alt={pkg.alt} />
        <div className="catering-package-price">
          <span>Package price</span>
          <strong>{pkg.from}</strong>
        </div>
      </div>
      <div className="catering-package-body">
        <h3>{pkg.name}</h3>
        <p>{pkg.description}</p>
        <div className="serving-tier-grid">
          {pkg.tiers.map((tier) => (
            <div className="serving-tier" key={tier.label}>
              <span>{tier.label}</span>
              <strong>{tier.price}</strong>
            </div>
          ))}
        </div>
        <a className="button button-outline-dark" href="#quote">
          Send a Request
        </a>
      </div>
    </article>
  );
}

export function TrayCateringSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="section tray-section" id="tray-catering">
      <div className="container">
        <div className="section-heading compact tray-heading">
          <span className="eyebrow">Tray catering</span>
          <h2>
            Catering packages for
            <br />
            teams of 10 to 100+
          </h2>
          <p>
            All main packages include your choice of <strong>3 proteins</strong>: chicken shawarma, beef shawarma, gyro meat, or falafel.
          </p>
        </div>
        <div className="catering-package-grid">
          {cateringPackages.map((pkg) => (
            <TrayPackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <div className="tray-details">
          <button type="button" onClick={() => setShowDetails((value) => !value)}>
            Protein &amp; Side Trays
            <ChevronRight className={showDetails ? "rotate" : ""} size={18} />
          </button>
          {showDetails && (
            <div className="tray-detail-grid">
              <div>
                <h3>Protein Trays</h3>
                <div className="tray-line-list">
                  {proteinTrays.map((tray) => (
                    <div className="tray-line" key={tray.name}>
                      <div>
                        <strong>{tray.name}</strong>
                        {tray.description && <p>{tray.description}</p>}
                      </div>
                      <span>
                        {tray.serves10} / serves 10
                        <br />
                        {tray.serves20} / serves 20
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3>Side Trays</h3>
                <div className="side-line-list">
                  {sideTrays.map((tray) => (
                    <div className="side-line" key={tray.name}>
                      <span>{tray.name}</span>
                      <strong>{tray.price}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
