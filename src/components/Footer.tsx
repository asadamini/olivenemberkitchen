import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "../data/menu";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p>Fresh Mediterranean catering for office lunches, meetings, trainings, and team events.</p>
        </div>
        <div>
          <h3>Explore</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Ordering</h3>
          <a href="/order">Order Catering</a>
          <a href="#quote">Request a Quote</a>
          <a href="#menu">View Menu</a>
        </div>
        <div>
          <h3>Contact</h3>
          <span>
            <Mail size={15} />
            oandekitchen@gmail.com
          </span>
          <span>
            <Phone size={15} />
            (925) 567-6712
          </span>
          <span>
            <MapPin size={15} />
            San Francisco Bay Area
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} Olive &amp; Ember Mediterranean Kitchen. All rights reserved.</span>
        <span>Office Catering / Fresh Mediterranean</span>
      </div>
    </footer>
  );
}
