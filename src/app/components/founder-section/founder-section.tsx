import React from "react";
import Container from "../container/container";
import Image from "next/image";
import GradientText from "../gradient-text/gradient-text";
import Link from "next/link";
import classNames from "classnames";
import { DATA_AOS } from "@/app/util/aos";
import Button from "../button/button";
import Member from "../member/member";

const FOUNDERS = [
  {
    image: "/team/James.png",
    name: "James",
    position: "CO-FOUNDER",
  },
  {
    image: "/team/Chav2.jpg",
    name: "Antoine 'Chav' Chaveron",
    position: "CO-FOUNDER",
    linkedin: "https://www.linkedin.com/in/antoine-chaveron-76054212a/",
  },
];

const FounderSection = () => {
  return (
    <div id="founders" className={classNames("mt-ct-2 relative")}>
      <Container>
        <div className="px-ct mt-ct text-center">
          <GradientText
            className="text-section-title mb-ct-1.5-divide font-bold font-kufam"
            component="h2"
            text={`Founders`}
            data-aos={DATA_AOS.FADE_UP}
          />
          <p
            className="w-[80%] text-section-description leading-[1.6] mx-auto"
            data-aos={DATA_AOS.FADE_UP}
            data-aos-delay={100}
          >
            UNCX Network was started by two people in June 2020 with no outside
            funding or investment. Today it employs a large team of industry
            experts and is constantly adapting to meet the needs of a dynamic
            and evolving marketplace. James CO-FOUNDER
          </p>
        </div>

        <div className="mt-ct flex flex-wrap justify-center">
          {FOUNDERS.map((member, index) => (
            <div
              key={`member-${index}`}
              className="w-full p-5 sm:w-1/2 md:w-1/3"
              data-aos={DATA_AOS.FADE_UP}
              data-aos-delay={100}
            >
              <Member {...member} />
            </div>
          ))}
        </div>

        <div
          className="text-center mt-ct"
          data-aos={DATA_AOS.FADE_UP}
          data-aos-delay={300}
        >
          <Button href={`/team`} component={`a`}>
            Meet the rest of the Team...
          </Button>
        </div>
      </Container>

      <picture className="left-0 absolute top-[50%] translate-y-[-50%] w-full">
        <Image
          src="/bg-unicorn-two.png"
          width={0}
          height={0}
          sizes={`100vw`}
          className="w-full h-auto"
          alt=""
        />
      </picture>
    </div>
  );
};

export default FounderSection;
