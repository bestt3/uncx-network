import React from "react";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import Hero from "../components/hero/hero";
import NetworkBanner from "../components/network-banner/network-banner";
import NetworkSection from "../components/network-section-2/network-section";

const NetworkPage = () => {
  return (
    <>
      <Hero
        title={`Meet The Network`}
        gradientTitle
        description={`Our network aims to empower people who want to contribute to the crypto industry in a meaningful way.`}
        mainButton={{ to: "https://app.uncx.network/", label: "Go to App" }}
        secondaryButton={{
          to: "https://docs.uncx.network/whitelisted-audit-kyc-partners/",
          label: "Whitelisted Partners Info",
        }}
        banner={<NetworkBanner />}
      />
      <NetworkSection />
      <ServiceSection hideDescription />
      <SubscribeSection />
    </>
  );
};

export default NetworkPage;
