import React from "react";
import Hero from "../components/hero/hero";
import { NetworkSection } from "../components/network-section/network-section";
import TextWithImageSection from "../components/text-with-image-section/text-with-image-section";
import ProductButtonSection from "../components/product-button-section/product-button-section";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import Table from "../components/table/table";
import StakingBanner from "../components/staking-banner/staking-banner";
import CanvasSection from "../components/canvas-section/canvas-section";

const rows = [
  {
    cells: [
      {
        type: "text",
        className: "flex-1",
        text: "Pool two tokens and receive rewards",
      },
      {
        type: "checkbox",
      },
      {
        type: "checkbox",
        checked: true,
      },
    ],
  },
  {
    cells: [
      {
        type: "text",
        className: "flex-1",
        text: "A single token that yields rewards",
      },
      {
        type: "checkbox",
        checked: true,
      },
      {
        type: "checkbox",
      },
    ],
  },
  {
    cells: [
      {
        type: "text",
        className: "flex-1",
        text: "Up to 10 simultaneous rewards",
      },
      {
        type: "checkbox",
        checked: true,
      },
      {
        type: "checkbox",
        checked: true,
      },
    ],
  },
  {
    cells: [
      {
        type: "text",
        className: "flex-1",
        text: "Time locks and boosters",
      },
      {
        type: "checkbox",
        checked: true,
      },
      {
        type: "checkbox",
        checked: true,
      },
    ],
  },
  {
    cells: [
      {
        type: "text",
        className: "flex-1",
        text: "Top-ups and reward swapping",
      },
      {
        type: "checkbox",
        checked: true,
      },
      {
        type: "checkbox",
        checked: true,
      },
    ],
  },
];

const StakingPage = () => {
  return (
    <>
      <Hero
        title={`Staking & Farming Services`}
        gradientTitle
        description={`Create customized rewarding programs for your community 
            with our incredibly powerful staking and farming pool creator.`}
        mainButton={{
          to: "https://app.uncx.network/chain/mainnet/farms/",
          label: "Go to App",
        }}
        secondaryButton={{
          to: "https://docs.uncx.network/guides/for-investors/staking/",
          label: "Documentation",
        }}
        banner={<StakingBanner />}
      />
      <NetworkSection />
      <Table
        headCells={[
          { className: "flex-1", name: "" },
          {
            name: "Staking",
            className: "translate-x-[25px] lg:translate-x-[15px]",
          },
          {
            name: "Farming",
            className: "translate-x-[25px] lg:translate-x-[15px]",
          },
        ]}
        rows={rows}
      />
      <TextWithImageSection
        contents={[
          {
            className: "flex-col lg:flex-row",
            imageSrc: "/page-image/unicrypt-staking-farming-service.png",
            title: `Staking and Farming as a Service`,
            description: [
              "Create a customized rewards program for your community using our powerful staking and farming pool creator. Our flexible staking & farming generator allows stakers and farmers to earn multiple rewards per stake.",
            ],
          },
          {
            className: "flex-col lg:flex-row-reverse",
            imageSrc: "/page-image/unicrypt-staking-uncx.png",
            title: `Staking your UNCX Tokens`,
            description: [
              "UNCX tokens are staked on the Ethereum chain in a one-time operation and our team in able to distribute reward on multiple chains at once. You can subscribe to up to 10 rewards pools for a given stake. Rewards mainly come from successful ILO launches.",
            ],
          },
        ]}
      />
      <ProductButtonSection
        to={`https://app.uncx.network/`}
        label={`Sass/FasS App`}
      />
      <ServiceSection />
      <SubscribeSection />
      <CanvasSection />
    </>
  );
};

export default StakingPage;
