import React, { ReactNode } from "react";
import Container from "../container/container";
import Button from "../button/button";
import styles from "./hero.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { DATA_AOS } from "@/app/util/aos";
import GradientText from "../gradient-text/gradient-text";

interface ButtonProps {
  to: string;
  label: string;
}

interface HeroProps {
  title: string;
  description: string;
  mainButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  banner?: ReactNode;
  gradientTitle?: boolean;
  leftContainerPadding?: boolean;
}

const Hero = ({
  title,
  description,
  mainButton,
  secondaryButton,
  banner,
  leftContainerPadding,
  gradientTitle,
}: HeroProps) => {
  return (
    <div className={classNames(styles["base"])}>
      <Container className="z-[2]">
        <div
          className={classNames(
            "pt-ct-1.5-2 pb-ct-1.5 px-ct flex items-center",
            "flex-col-reverse",
            "lg:flex-row"
          )}
        >
          <div
            className={classNames(
              "w-full flex flex-col items-start  text-center",
              "lg:w-1/2 lg:text-left ",
              { "lg:pr-[5vw]": leftContainerPadding }
            )}
          >
            {gradientTitle ? (
              <GradientText
                data-aos={DATA_AOS.FADE_UP}
                className="text-xl font-bold font-kufam"
                text={title}
              />
            ) : (
              <h1
                data-aos={DATA_AOS.FADE_UP}
                className="text-xl font-bold font-kufam"
              >
                {title}
              </h1>
            )}

            <p
              data-aos={DATA_AOS.FADE_UP}
              data-aos-delay={100}
              className="m-0 mt-ct-1.5-divide text-intro leading-[1.3]"
            >
              {description}
            </p>

            {(mainButton || secondaryButton) && (
              <div
                className={classNames(
                  "mt-ct-1.5-divide flex gap-4 justify-center items-start w-full",
                  "lg:flex-col lg:justify-start",
                  "xl:flex-row"
                )}
                data-aos={DATA_AOS.FADE_UP}
                data-aos-delay={200}
              >
                {mainButton && (
                  <Button component={`a`} size="lg" href={mainButton.to}>
                    {mainButton.label}
                  </Button>
                )}

                {secondaryButton && (
                  <Button
                    variant="outlined"
                    component={`a`}
                    size="lg"
                    href={secondaryButton.to}
                    target="_blank"
                  >
                    {secondaryButton.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          <div
            data-aos={DATA_AOS.FADE_UP}
            className={classNames("w-full mb-20", "lg:w-1/2 lg:mb-0")}
          >
            {banner}
          </div>
        </div>
      </Container>

      <div className={classNames(styles["bg"])}>
        <div className="absolute left-0 top-0 w-full h-full z-[1]">
          <Image
            src={`/bg/shadow-1.png`}
            alt="shadow"
            width={0}
            height={0}
            sizes={`100vw`}
            className="w-full h-full object-left"
          />
        </div>

        <div className="absolute w-[90%] h-full top-0 right-0">
          <Image
            src={`/bg/bg-1.jpg`}
            alt="shadow"
            width={0}
            height={0}
            sizes={`100vw`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="after absolute w-full h-full bg-gradient-to-r from-bg1 to-bg1/0"></div>
      </div>
    </div>
  );
};

export default Hero;
