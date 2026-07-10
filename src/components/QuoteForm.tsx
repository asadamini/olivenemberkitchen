import { Check, Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";

const formEmail = "oandekitchen@gmail.com";
const formEndpoint = `https://formsubmit.co/${formEmail}`;
const ajaxEndpoint = `https://formsubmit.co/ajax/${formEmail}`;

export function QuoteForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(ajaxEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <section className="quote-section" id="quote">
      <div className="container quote-grid">
        <div className="quote-copy">
          <span className="eyebrow">Request a quote</span>
          <h2>Let's plan your team's meal</h2>
          <p>
            Tell us what you are planning and we will help build the right Mediterranean catering order for your team.
          </p>
          <div className="quote-contact-list">
            <span>
              <Mail size={17} />
              {formEmail}
            </span>
            <span>
              <Phone size={17} />
              (925) 567-6712
            </span>
            <span>
              <MapPin size={17} />
              San Francisco Bay Area
            </span>
          </div>
        </div>
        <form className="quote-form" action={formEndpoint} method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New Olive & Ember catering request" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
              <input name="phone" type="tel" placeholder="(925) 567-6712" />
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
          {submitState === "success" && (
            <p className="form-status form-status-success">Thanks. Your catering request was sent.</p>
          )}
          {submitState === "error" && (
            <p className="form-status form-status-error">We could not send this request. Please email oandekitchen@gmail.com directly.</p>
          )}
          <button className="button button-primary button-full" type="submit" disabled={submitState === "submitting"}>
            {submitState === "submitting" ? "Sending..." : "Send Request"} <Check size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
