import { Check, Mail, MapPin, Phone } from "lucide-react";

const formEmail = "oandekitchen@gmail.com";

export function QuoteForm() {
  return (
    <section className="quote-section" id="quote">
      <div className="container quote-grid">
        <div className="quote-copy">
          <span className="eyebrow">Request a quote</span>
          <h2>Tell us about your office catering order</h2>
          <p>
            Send date, guest count, meal style, delivery address, and any dietary notes. We will follow up to shape the order.
          </p>
          <div className="quote-contact-list">
            <span>
              <Mail size={17} />
              {formEmail}
            </span>
            <span>
              <Phone size={17} />
              (415) 555-0123
            </span>
            <span>
              <MapPin size={17} />
              San Francisco Bay Area
            </span>
          </div>
        </div>
        <form className="quote-form" action={`https://formsubmit.co/${formEmail}`} method="POST">
          <input type="hidden" name="_subject" value="New Olive & Ember catering request" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-row">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Company
              <input name="company" type="text" placeholder="Company name" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input name="email" type="email" placeholder="you@company.com" required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="(415) 555-0123" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Event date
              <input name="event_date" type="date" required />
            </label>
            <label>
              Delivery time
              <input name="delivery_time" type="time" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Guests
              <input name="guests" type="number" min="1" placeholder="25" required />
            </label>
            <label>
              Meal style
              <select name="meal_style" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Individual boxed meals</option>
                <option>Tray catering</option>
                <option>Both / not sure yet</option>
              </select>
            </label>
          </div>
          <label>
            Delivery address
            <input name="delivery_address" type="text" placeholder="Office address or building name" required />
          </label>
          <label>
            Notes / dietary requests
            <textarea name="notes" rows={4} placeholder="Allergies, vegetarian count, preferred proteins, timing, budget..." />
          </label>
          <button className="button button-primary button-full" type="submit">
            Send Request <Check size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
