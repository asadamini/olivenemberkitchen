import { ChevronRight } from "lucide-react";
import { featuredCategories } from "../data/menu";

export function FeaturedCategories() {
  return (
    <section className="section section-cream" id="boxed-meals">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What we offer</span>
          <h2>Fresh meals for every type of team order</h2>
          <p>Choose individual boxes for easy distribution or trays for a warm buffet-style office meal.</p>
        </div>
        <div className="category-grid">
          {featuredCategories.map((category) => (
            <a className="category-card" href={category.href} key={category.title}>
              <img src={category.image} alt={`${category.title} catering`} />
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span>
                  Starting at {category.price}
                  <ChevronRight size={17} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
