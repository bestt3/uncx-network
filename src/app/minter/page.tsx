import React from "react";
import Hero from "../components/hero/hero";
import MinterBanner from "../components/minter-banner/minter-banner";
import { NetworkSection } from "../components/network-section/network-section";
import Table from "../components/table/table";
import TextWithImageSection from "../components/text-with-image-section/text-with-image-section";
import ProductButtonSection from "../components/product-button-section/product-button-section";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import CanvasSection from "../components/canvas-section/canvas-section";

const rows = [
  {
    noBorder: true,
    cells: [
      {
        type: "text",
        className: "flex-1",
        text: "Mint to multiple chains",
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
        text: "Built in Lossless security from hacks",
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
        text: "Reflection, LP, Buyback taxes",
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
        text: "Up to 10 custom taxes",
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
        text: "Permanent lock functionality",
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
        text: "No coding required. Ever.",
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
        text: "Admin panel for editing after launch",
      },
      {
        type: "checkbox",
        checked: true,
      },
    ],
  },
];

const MinterPage = () => {
  return (
    <>
      <Hero
        title={`Fully Customizable Token Minter`}
        gradientTitle
        description={`Custom taxes. Built in security. Low fees. Native compatibility with all our services. No coding required!`}
        mainButton={{
          to: "https://app.uncx.network/services/select-minter/",
          label: "Go to App",
        }}
        secondaryButton={{
          to: "https://docs.uncx.network/guides/for-developers/token-minter/",
          label: "Documentation",
        }}
        banner={<MinterBanner />}
      />
      <NetworkSection />
      <Table headCells={[{ className: "flex-1", name: "" }]} rows={rows} />
      <TextWithImageSection
        contents={[
          {
            className: "flex-col lg:flex-row",
            imageSrc: "/page-image/unicrypt-minter-custom-taxes.png",
            title: `Full Control`,
            description: [
              `Discover our fully customizable token solutions. Our original ENMT minter and our new Tax Token minter which
               allows completely customizable taxes. We offer a full suite of options such as regular 
               taxes, LP taxes, buybacks, reflections or even a custom label. Mint/Pause/Blacklist functions are also available.
              `,
            ],
          },
          {
            className: "flex-col lg:flex-row-reverse",
            imageSrc: "/page-image/unicrypt-homepage-lossless-security.png",
            title: `Built-in Lossless & AntiBot`,
            description: [
              `By minting with Tax Token you’ll be providing peace of mind to you and your investors with our built-in Lossless and AntiBot features.`,
              `Lossless provides an additional layer of blockchain transaction security, mitigating the financial impact of smart contract exploits and private key theft. Our antibot piece of code is the market’s most innovative sniping bot protection solution.`,
            ],
          },
          {
            className: "flex-col lg:flex-row",
            imageSrc:
              "/page-image/unicrypt-token-minter-native-integration.png",
            title: `Native Integration`,
            description: [
              `All of our services are directly integrated and work best with tokens minted on our platform. 
              We also display security assessment (audits) and Tax Token settings on our website. The team will be offering 
              specific offers on ILO fees for tokens that have been minted through our in.house decentralized minting service.`,
            ],
          },
        ]}
      />
      <ProductButtonSection
        to={`https://app.uncx.network/`}
        label={`Minting App`}
      />
      <ServiceSection />
      <SubscribeSection />
      <CanvasSection />
    </>
  );
};

export default MinterPage;
