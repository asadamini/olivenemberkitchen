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

  return (
    <section className="section section-white" id="menu">
      <div className="container">
        <div className="menu-header">
          <div>
            <span className="eyebrow">Customer-facing menu</span>
            <h2>Office-friendly Mediterranean catering</h2>
            <p>Clear boxed meal and tray options with launch-ready pricing and no hidden future-only items.</p>
          </div>
          <a className="button button-primary" href="#quote">
            Request a Quote <ArrowRight size={17} />
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
        <div className="menu-panel">
          <div className="menu-panel-heading">
            <span className="eyebrow">{active.eyebrow}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </div>
          <div className="menu-grid">
            {active.items.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
