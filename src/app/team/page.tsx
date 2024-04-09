import React from "react";
import Hero from "../components/hero/hero";
import ServiceSection from "../components/service-section/service-section";
import SubscribeSection from "../components/subscribe-section/subscribe-section";
import TeamBanner from "../components/team-banner/team-banner";
import TeamSection from "../components/team-section/team-section";
import GetInTouch from "../components/get-in-touch/get-in-touch";
import CanvasSection from "../components/canvas-section/canvas-section";

const TeamPage = () => {
  return (
    <>
      <Hero
        title={`Meet The UNCX Family`}
        gradientTitle
        description={`A global team of passionate DeFi and decentralization evangelists`}
        mainButton={{ to: "https://t.me/uncx_token/", label: "Get in Touch" }}
        banner={<TeamBanner />}
      />
      <TeamSection />
      <GetInTouch />
      <ServiceSection hideDescription />
      <SubscribeSection />
      <CanvasSection />
    </>
  );
};

export default TeamPage;
