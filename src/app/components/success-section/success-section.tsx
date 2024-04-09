import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import Pad from "./pad/pad";
import { DATA_AOS } from "@/app/util/aos";

const LIST = [
  {
    image: "/launchpad/baby-doge.png",
    name: "Baby Doge1",
    value: "16,520x",
  },
  {
    image: "/launchpad/cult.jpg",
    name: "Cult",
    value: "315x",
  },
  {
    image: "/launchpad/vempire.png",
    name: "vEmpire",
    value: "19x",
  },
  {
    image: "/launchpad/project-quantum.jpeg",
    name: "Project Quantum",
    value: "105x",
  },
];

const SuccessSection = () => {
  return (
    <div className="p-ct relative z-[10]">
      <Container>
        <div className="flex justify-center" data-aos={DATA_AOS.FADE_UP}>
          <GradientText
            text={`Our Successes Speak For Themselves...`}
            className="mt-ct text-section-title mb-ct-1.5-divide text-center"
          />
        </div>
        <div className="mt-ct flex flex-wrap">
          {LIST.map((item, index) => (
            <div
              data-aos={DATA_AOS.FADE_UP}
              data-aos-delay={50 * index}
              key={`lp-success-${index}`}
              className={`p-4 w-full sm:w-1/2 lg:w-1/4`}
            >
              <Pad {...item} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SuccessSection;
