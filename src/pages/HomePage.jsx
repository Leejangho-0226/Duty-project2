// src/pages/HomePage.jsx
import CompanyHero from "../sections/corporate/CompanyHero";
import PlatformOverview from "../sections/corporate/PlatformOverview";
import ServicesOverview from "../sections/corporate/ServicesOverview";
import PartnersSection from "../sections/corporate/PartnersSection";
import ContactSection from "../sections/corporate/ContactSection";

export default function HomePage() {
  return (
    <main className="w-full">
      <CompanyHero />
      <PlatformOverview />
      <ServicesOverview />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
