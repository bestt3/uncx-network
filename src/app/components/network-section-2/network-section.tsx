import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import { DATA_AOS } from "@/app/util/aos";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  CLIENTS,
  MARKETING_COLLABORATIONS,
  PARTNERS,
} from "@/app/util/network";
import Button from "../button/button";

const NetworkSection = () => {
  return (
    <div className="p-ct relative">
      <Container className="mt-ct z-[10] ">
        <GradientText
          component={`h2`}
          className={`text-section-title text-center mt-ct font-kufam`}
          data-aos={DATA_AOS.FADE_UP}
          text={`UNCX is thrilled to work with a diverse range of ethical technology partners...`}
        />

        <div className="mt-ct flex flex-wrap items-center justify-center">
          {PARTNERS.map((item, index) => (
            <div
              key={`partner-${index}`}
              data-aos={DATA_AOS.FADE_UP}
              className={classNames(
                "p-8 w-full flex justify-center",
                "sm:w-1/2",
                "lg:w-1/4"
              )}
            >
              <Link href={item.to} className="inline-block" target="_blank">
                <picture>
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className="w-full h-full object-contain mx-auto"
                  />
                </picture>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <GradientText
            data-aos={DATA_AOS.FADE_UP}
            component={`h2`}
            className={`text-section-title text-center mt-ct font-kufam`}
            text={`Our API Collaborations`}
          />

          <p
            data-aos={DATA_AOS.FADE_UP}
            className="mt-ct-1.5-divide text-center text-section-description leading-[1.6] lg:w-[75%] mx-auto"
          >
            We are constantly working to make our liquidity locker, farms, and
            ILO data more accessible. Here are some of the platforms where our
            data is displayed or taken into consideration in confidence scores.
          </p>

          <div className="mt-ct flex flex-wrap items-center justify-center opacity-70 grayscale">
            {CLIENTS.map((image, index) => (
              <div
                key={`partner-${index}`}
                data-aos={DATA_AOS.FADE_UP}
                className={classNames(
                  "p-8 w-full flex justify-center",
                  "sm:w-1/2",
                  "lg:w-1/4"
                )}
              >
                <picture>
                  <Image
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className="w-full h-16 object-contain object-center mx-auto"
                  />
                </picture>
              </div>
            ))}
          </div>
          <div className="text-center mb-16" data-aos={DATA_AOS.FADE_UP}>
            <Button
              component={`a`}
              href="https://docs.uncx.network/uncx-api-collaborations"
              target="_blank"
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="text-center">
          <GradientText
            data-aos={DATA_AOS.FADE_UP}
            component={`h2`}
            className={`text-section-title text-center mt-ct font-kufam`}
            text={`Marketing Collaborations`}
          />

          <p
            data-aos={DATA_AOS.FADE_UP}
            className="mt-ct-1.5-divide text-center text-section-description leading-[1.6] lg:w-[75%] mx-auto"
          >
            UNCX Network clients not only benefit from aligning themselves with
            our ethical reputation, they also benefit from discounted rates with
            the following vetted marketing vendors.
          </p>

          <div className="mt-ct flex flex-wrap items-center justify-center grayscale opacity-70">
            {MARKETING_COLLABORATIONS.map((item, index) => (
              <div
                key={`partner-${index}`}
                data-aos={DATA_AOS.FADE_UP}
                className={classNames(
                  "p-8 w-full flex justify-center",
                  "sm:w-1/2",
                  "lg:w-1/4"
                )}
              >
                <Link href={item.to} className="inline-block" target="_blank">
                  <picture>
                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className="w-full mx-auto h-16 object-contain object-center"
                    />
                  </picture>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <picture className="w-full left-[50%] absolute top-0 translate-x-[-50%] z-[-1] bottom-network-picture">
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

export default NetworkSection;
