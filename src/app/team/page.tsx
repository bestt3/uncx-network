import React from "react";
import Hero from "../components/hero/hero";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import TeamBanner from "../components/team-banner/team-banner";
import TeamSection from "../components/team-section/team-section";

const TeamPage = () => {
  return (
    <>
      <Hero
        title={`Meet The UNCX Family`}
        gradientTitle
        description={`A global team of passionate DeFi and decentralization evangelists`}
        mainButton={{ to: "https://t.me/uncx_token/", label: "Get in Touch" }}
        leftClassName="lg:pr-0"
        banner={<TeamBanner />}
      />
      <TeamSection />
      <ServiceSection hideDescription />
      <SubscribeSection />
    </>
  );
};

export default TeamPage;
