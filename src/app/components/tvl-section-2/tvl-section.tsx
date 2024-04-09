import React from "react";
import Container from "../container/container";
import Image from "next/image";
import { DATA_AOS } from "@/app/util/aos";
import GradientText from "../gradient-text/gradient-text";

const LIST = [
  {
    subtitle: "Trusted by",
    value: "52,000+",
    title: "projects",
  },
  {
    subtitle: "Over",
    value: "+616M",
    title: "locked",
  },
  {
    subtitle: "Unique",
    value: "6",
    title: "services",
  },
  {
    subtitle: "Monthly",
    value: "1.3M",
    title: "users",
  },
];

const TVLSection = () => {
  return (
    <div className="px-ct relative">
      <Container className="mt-ct-2 flex">
        {LIST.map((item, index) => (
          <div
            key={`tvl-item-${index}`}
            className="p-4 w-full text-center sm:w-1/2 lg:w-1/4"
            data-aos={DATA_AOS.FADE_UP}
            data-aos-delay={50 * index}
          >
            <div className="font-bold">{item.subtitle}</div>

            <GradientText
              text={item.value}
              className={`my-4 text-tvl-value font-bold`}
            />

            <div className="text-tvl-sm">{item.title}</div>
          </div>
        ))}
      </Container>
      <picture className="top-[50%] left-[50%] min-w[900px] absolute w-full translate-x-[-50%] translate-y-[-50%] z-[-1]">
        <Image
          src={`/bg-unicorn-middle.png`}
          alt="unicorn middle"
          width={0}
          height={0}
          sizes={`100vw`}
          className="w-full h-auto"
        />
      </picture>
    </div>
  );
};

export default TVLSection;
