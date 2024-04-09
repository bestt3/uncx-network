import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import { DATA_AOS } from "@/app/util/aos";
import Image from "next/image";
import styles from "./uncx-token-section.module.scss";
import classNames from "classnames";
import Button from "../button/button";
import CheckboxIcon from "@/app/icons/checkbox";
const LIST = [
  "Launchpad allocation",
  "Staking, $UNCX emission",
  "Pro dashboard",
  "Governance",
];
const UNCXTokenSection = () => {
  return (
    <div className="px-ct z-[10] relative">
      <Container>
        <GradientText
          text={`A token system to empower users`}
          className="font-kufam mb-ct-1.5-divide mt-ct text-section-title w-full text-center font-bold"
          data-aos={DATA_AOS.FADE_UP}
        />
        <div className="mt-ct w-full md:w-1/3 mx-auto">
          <div
            className="flex text-center relative"
            data-aos={DATA_AOS.FADE_UP}
          >
            <picture className="animate-ico-tk left-[50%] absolute translate-x-[-50%] w-[48%] z-[50]">
              <Image
                src="/services/token-ecosystem_unicrypt_uncx.png"
                width="0"
                height="0"
                className="w-full h-auto"
                alt="UNCX Network"
              />
            </picture>
            <picture className="w-[45%] opacity-[0.3] mt-tk-light mx-auto">
              <Image
                src="/light_uncx.png"
                width="0"
                height="0"
                className="w-full h-auto"
                alt="UNCX Network"
              />
            </picture>
            <div
              className={classNames(styles["uncx-text"], "font-bold uppercase")}
            >
              uncx
            </div>
          </div>

          <div className="mt-ct mx-auto w-[85%]">
            <GradientText
              text={`UNCX`}
              className="text-center w-full text-uncx-title font-bold leading-[1.1]"
              data-aos={DATA_AOS.FADE_UP}
            />
          </div>

          <ul className="text-tvl-sm">
            {LIST.map((item, index) => (
              <li
                key={`token-list-item-${index}`}
                className="flex gap-4 items-center mt-ct-1.5-divide"
                data-aos={DATA_AOS.FADE_UP}
              >
                <span className={styles["checkbox"]}>
                  <CheckboxIcon />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div
            className="text-center mt-ct-1.5-divide"
            data-aos={DATA_AOS.FADE_UP}
          >
            <Button
              size="lg"
              component={`a`}
              href={`https://www.coingecko.com/en/coins/unicrypt`}
              className="mt-ct-1.5-divide"
            >
              UNCX Info
            </Button>
          </div>
        </div>
      </Container>
      <picture className="left-[50%] absolute top-[80%] translate-x-[-50%] translate-y-[-50%] z-[-1] w-full">
        <Image
          src={`/bg-unicorn-middle-2.png`}
          width={0}
          height={0}
          alt=""
          className="w-full h-auto"
        />
      </picture>
    </div>
  );
};

export default UNCXTokenSection;
