import React from "react";
import Container from "../container/container";
import { FOUNDERS, MEMBERS } from "@/app/util/team";
import Member from "../member/member";
import { DATA_AOS } from "@/app/util/aos";

const TeamSection = () => {
  return (
    <Container className="z-[10]">
      <div className="px-ct">
        <p
          data-aos={DATA_AOS.FADE_UP}
          className="text-section-description leading-[1.6] w-full md:w-[65%] mx-auto text-center"
        >
          UNCX was started by two people in June 2020 with no outside funding or
          investment. Today it employs a large team of industry experts who are
          passionate about building useful and secure DeFi technology.
        </p>
      </div>
      <div
        className="mt-ct flex flex-wrap justify-center"
        data-aos={DATA_AOS.FADE_UP}
      >
        {FOUNDERS.map((member, index) => (
          <div
            key={`founder-${index}`}
            className={`p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
          >
            <Member {...member} />
          </div>
        ))}
      </div>

      <div className="mt-ct flex flex-wrap justify-center">
        {MEMBERS.map((member, index) => (
          <div
            data-aos={DATA_AOS.FADE_UP}
            key={`member-${index}`}
            className={`p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
          >
            <Member {...member} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TeamSection;
