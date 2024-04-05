import React from "react";
import Container from "../container/container";
import Image from "next/image";
import styles from "./tvl-section.module.scss";
import GradientText from "../gradient-text/gradient-text";
import Link from "next/link";
import classNames from "classnames";
import { DATA_AOS } from "@/app/util/aos";

const TVL = [
  {
    subtitle: "Trusted by",
    value: "52,000+",
    title: "projects",
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
    <div id="tvl" className="mb-tvl-section text-center relative">
      <div
        className={classNames(
          "px-ct absolute left-[50%] top-[30%] translate-x-[-50%]  w-full",
          "lg:translate-y-[-50%]"
        )}
      >
        <Container>
          <div data-aos={DATA_AOS.FADE_UP}>
            <div className={classNames(styles["tvl-txt"], "font-bold")}>
              TVL
            </div>

            <Link
              href={`https://defillama.com/protocol/uncx-network`}
              target="_blank"
              className="cursor-pointer inline-block relative"
            >
              <GradientText
                component="h2"
                text="+597M$"
                className="font-kufam text-tvl-title z-[2]"
              />
            </Link>
          </div>

          <div
            className={classNames(
              "mt-ct-2 flex flex-wrap text-center justify-center",
              "sm:gap-0"
            )}
          >
            {TVL.map((item, index) => (
              <div
                data-aos={DATA_AOS.FADE_UP}
                data-aos-delay={100 * index}
                className={classNames("p-3 w-1/2", "sm:p-5 sm:w-1/3")}
              >
                <div className="text-intro font-bold">{item.subtitle}</div>
                <GradientText
                  className={classNames("font-bold text-xl my-3", "sm:my-6")}
                  text={item.value}
                />
                <div className="text-tvl-sm">{item.title}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <picture className="">
        <Image
          src="/bg-unicorn-middle.png"
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

export default TVLSection;
