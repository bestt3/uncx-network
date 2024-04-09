import React from "react";
import Hero from "../components/hero/hero";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import SuccessSection from "../components/success-section/success-section";
import { Metadata } from "next";
import TVLSection from "../components/tvl-section-2/tvl-section";
import TextWithImageSection from "../components/text-with-image-section/text-with-image-section";
import ProductButtonSection from "../components/product-button-section/product-button-section";
import LaunchpadBanner from "../components/lp-banner/lp-banner";
import CanvasSection from "../components/canvas-section/canvas-section";

export const metadata: Metadata = {
  title: "UNCX Network • Launchpad",
};

const LaunchpadPage = () => {
  return (
    <>
      <Hero
        title={`A Truly Decentralized Launchpad`}
        gradientTitle
        description={`Launch your project using the industry’s most trusted ILO launchpad.`}
        mainButton={{
          to: "https://app.uncx.network/services/launchpad/",
          label: "Go to App",
        }}
        secondaryButton={{
          to: "https://docs.uncx.network/guides/for-investors/initial-liquidity-offering-ilo",
          label: "Documentation",
        }}
        banner={<LaunchpadBanner />}
      />
      <SuccessSection />
      <TVLSection />
      <TextWithImageSection
        contents={[
          {
            className: "flex-col lg:flex-row",
            imageSrc: "/page-image/unicrypt-liquidity-locking-ilo.png",
            title: `What is an ILO?`,
            description: [
              "ILOs raise funds to provide liquidity for new cryptocurrencies. Liquidity allows people to trade the token on the market. Without liquidity, investors can’t buy nor sell digital assets, namely tokens.",
              `Coupled with our premium liquidity locking service, these tools enable small businesses with great ideas to launch tokens which can support their project.`,
              `Typically these tokens are offered at a discounted price before their launch. Investors are eager to purchase utility digital assets because of their interest for supporting new technologies and tokenized ecosystems.`,
              `It is worth noting that the UNCX Network platform is DECENTRALIZED and TRUSTLESS. We believe in the philosophy of public blockchains that are completely decentralized. This puts the responsibility and the power in the hands of the user and not a centralized power.`,
            ],
          },
        ]}
      />
      <ProductButtonSection
        label={`Visit launchpad`}
        to={`https://app.uncx.network/`}
      />
      <ServiceSection />
      <SubscribeSection />
      <CanvasSection />
    </>
  );
};

export default LaunchpadPage;
