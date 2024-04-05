import Hero from "./components/hero/hero";
import HomeBanner from "./components/home-banner/home-banner";
import { NetworkSection } from "./components/network-section/network-section";
import PartnerSection from "./components/partner-section/partner-section";
import ServiceSection from "./components/service-section/service-section";
import TVLSection from "./components/tvl-section/tvl-section";

export default function Home() {
  return (
    <>
      <Hero
        title={`Secure DeFi Infrastructure`}
        description={`Decentralized, scalable, trusted. Welcome to UNCX.`}
        mainButton={{ to: "https://app.uncx.network/", label: "Go to App" }}
        secondaryButton={{
          to: "https://docs.uncx.network/",
          label: "Documentation",
        }}
        banner={<HomeBanner />}
      />

      <NetworkSection />

      <ServiceSection />

      <TVLSection />

      <PartnerSection />
    </>
  );
}
