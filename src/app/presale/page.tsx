import React from "react";
import GradientText from "../components/gradient-text/gradient-text";
import HomeBanner from "../components/home-banner/home-banner";
import Hero from "../components/hero/hero";
import { NetworkSection } from "../components/network-section/network-section";
import ServiceSection from "../components/service-section/service-section";
import TVLSection from "../components/tvl-section/tvl-section";
import PartnerSection from "../components/partner-section/partner-section";
import FounderSection from "../components/founder-section/founder-section";
import NewsFeedSection from "../components/news-feed/news-feed";
import SubscribeSection from "../components/subscribe-section/subscribe-section";

const PreSalePage = () => {
  return (
    <>
      <Hero
        title={`Secure DeFi Infrastructure`}
        description={`Decentralized, scalable, trusted. Welcome to UNCX.`}
        leftContainerPadding
        banner={
          <>
            <h1 className="text-right">Insert presale widget here</h1>
          </>
        }
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
};

export default PreSalePage;
