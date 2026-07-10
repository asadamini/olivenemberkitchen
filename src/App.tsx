import { About } from "./components/About";
import { CateringCallout } from "./components/CateringCallout";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { QuoteForm } from "./components/QuoteForm";
import { TrayCateringSection } from "./components/TrayCateringSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <MenuSection />
        <TrayCateringSection />
        <HowItWorks />
        <CateringCallout />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
