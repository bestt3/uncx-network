import React from "react";
import Hero from "../components/hero/hero";
import TokenBanner from "../components/token-banner/token-banner";
import ProductButtonSection from "../components/product-button-section/product-button-section";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import TextWithImageSection from "../components/text-with-image-section/text-with-image-section";
import UNCXTokenSection from "../components/uncx-token-section/uncx-token-section";
import CanvasSection from "../components/canvas-section/canvas-section";

const TokensPage = () => {
  return (
    <>
      <Hero
        title={`The UNCX Token`}
        gradientTitle
        description={`Our flagship token. A powerful tool for the UNCX Community!`}
        mainButton={{
          to: "https://app.uncx.network/uncx-staking//",
          label: "Stake UNCX",
        }}
        secondaryButton={{
          to: "https://docs.uncx.network/uncx-uncl-tokens/",
          label: "Documentation",
        }}
        banner={<TokenBanner />}
      />
      <UNCXTokenSection />
      <TextWithImageSection
        contents={[
          {
            className: "flex-col lg:flex-row",
            imageSrc: "/page-image/unicrypt-staking-uncx.png",
            title: `Staking your UNCX Token`,
            description: [
              `UNCX tokens are staked on the Ethereum chain in a one-time operation and our team in able to distribute reward on multiple chains at once. 
              You can subscribe to up to 10 rewards pools for a given stake. Rewards mainly come from successful ILO launches.`,
            ],
          },
        ]}
      />
      <ProductButtonSection
        to={`https://app.uncx.network/`}
        label={`Stake UNCX App`}
      />
      <ServiceSection />
      <SubscribeSection />
      <CanvasSection />
    </>
  );
};

export default TokensPage;
