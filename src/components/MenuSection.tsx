import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { menuCategories, type MenuItem } from "../data/menu";

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      {item.image && <img src={item.image} alt={item.name} />}
      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3>{item.name}</h3>
          <strong>{item.price}</strong>
        </div>
        {item.badge && <span className="pill pill-soft">{item.badge}</span>}
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((category) => category.id === activeId) ?? menuCategories[0];
  const showProteinNote = ["bowls", "wraps", "salads"].includes(activeId);

  return (
    <section className="section section-stone" id="menu">
      <div className="container">
        <div className="menu-header">
          <div>
            <span className="eyebrow">Full menu</span>
            <h2>Fresh. Made to order.</h2>
          </div>
          <a className="button button-primary" href="#quote">
            Order Now <ArrowRight size={17} />
          </a>
        </div>
        <div className="tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={category.id === activeId ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={category.id === activeId}
              onClick={() => setActiveId(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        {showProteinNote && (
          <div className="menu-note">
            <strong>Proteins:</strong> Chicken shawarma, beef shawarma, gyro meat, falafel
            <span aria-hidden="true"> | </span>
            <strong>Combo:</strong> Choose any 2 proteins for +$2.00
          </div>
        )}
        {activeId === "full-meal-boxes" && (
          <div className="menu-note menu-note-warm">
            <strong>Full Meal includes:</strong> Your choice of entree, one appetizer, and dessert.
          </div>
        )}
        <div className="menu-grid">
          {active.items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
