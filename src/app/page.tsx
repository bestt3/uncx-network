import FounderSection from "./components/founder-section/founder-section";
import Hero from "./components/hero/hero";
import HomeBanner from "./components/home-banner/home-banner";
import { NetworkSection } from "./components/network-section/network-section";
import NewsFeedSection from "./components/news-feed/news-feed";
import PartnerSection from "./components/partner-section/partner-section";
import ServiceSection from "./components/service-section/service-section";
import SubscribeSection from "./components/subscribe-section/subscribe-section";
import TVLSection from "./components/tvl-section/tvl-section";

export default function Home() {
  return (
    <>
      <Hero
        title={`Secure DeFi Infrastructure`}
        description={`Decentralized, scalable, trusted. Welcome to UNCX.`}
        mainButton={{ to: "/presale", label: "Dobify Presale Live Now" }}
        leftContainerPadding
        banner={<HomeBanner />}
      />

      <NetworkSection />

      <ServiceSection />

      <TVLSection />

      <PartnerSection />

      <FounderSection />

      <NewsFeedSection />

      <SubscribeSection />
    </>
  );
}
