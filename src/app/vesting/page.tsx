import React from "react";
import Hero from "../components/hero/hero";
import TVLSection from "../components/tvl-section-2/tvl-section";
import { NetworkSection } from "../components/network-section/network-section";
import TextWithImageSection from "../components/text-with-image-section/text-with-image-section";
import ProductButtonSection from "../components/product-button-section/product-button-section";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import TestimonialSection from "../components/testimonial-section/testimonial-section";
import VestingBanner from "../components/vesting-banner/vesting-banner";
import CanvasSection from "../components/canvas-section/canvas-section";

const VestingPage = () => {
  return (
    <>
      <Hero
        title={`Premium LP Locks & Token Vesting`}
        gradientTitle
        description={`Bring trust to your liquidity pool (LP) with the most secure and trusted lockers in the space. 
            We are the proud creators of this technology and we do not cut corners.`}
        mainButton={{
          to: "https://app.uncx.network/services/lock-liquidity/",
          label: "Go to App",
        }}
        secondaryButton={{
          to: "https://docs.uncx.network/guides/for-investors/liquidity-lockers",
          label: "Documentation",
        }}
        banner={<VestingBanner />}
      />
      <TestimonialSection />
      <NetworkSection />
      <TVLSection />
      <TextWithImageSection
        contents={[
          {
            className: "flex-col lg:flex-row",
            imageSrc: "/page-image/unicrypt-liquidity-locking-locks.png",
            title: `What is Liquidity Locking?`,
            description: [
              "Liquidity locking involves storing liquidity provider (fungible or non-fungible depending on protocols) tokens in smart contracts for a predetermined amount of time. These smart contracts are called liquidity lockers.",
              `Liquidity lockers allow developers to preemptively lock away a set % of liquidity upon token launch (or anytime later) for a period of time of their choosing. This prevents anyone from being able to withdraw all project locked liquidity. It is an approach that ensures developers don’t have critical control of users’ funds, on top of enhanced security and decentralization.`,
              `Locking your liquidity is part of maximizing your project’s attractiveness and is the status quo for serious blockchain startups.`,
            ],
          },
          {
            className: "flex-col lg:flex-row-reverse",
            imageSrc: "/page-image/unicrypt-token-vesting.png",
            title: `What is Token Vesting?`,
            description: [
              "When token developers lock portions of a total token supply in order to release them gradually over a period of time, the process is referred to as token vesting, and the time span in which the release takes place is known as the vesting period.",
              `Developers may use vesting services in multiple scenarios: vesting early investors (companies, retail investors, project advisors), airdropping users over time, reinforcing trust and credibility by locking their token reserves and other ecosystem funds. Our vesting contracts are fully decentralized and a statement of fund security.`,
            ],
          },
        ]}
      />
      <ProductButtonSection
        to={`https://app.uncx.network/`}
        label={`Locking App`}
      />
      <ServiceSection />
      <SubscribeSection />
      <CanvasSection />
    </>
  );
};

export default VestingPage;
