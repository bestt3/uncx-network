import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import { DATA_AOS } from "@/app/util/aos";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { PARTNERS } from "@/app/util/network";

const PartnerSection = () => {
  return (
    <Container>
      <div className="px-ct">
        <div className="mt-ct text-center">
          <GradientText
            className="text-section-title mb-ct-1.5-divide font-bold font-kufam"
            component="h2"
            text={`Partnerships`}
            data-aos={DATA_AOS.FADE_UP}
          />
          <p
            className="w-[90%] text-section-description leading-[1.6] mx-auto"
            data-aos={DATA_AOS.FADE_UP}
            data-aos-delay={100}
          >
            We are very proud to work with top security and technology experts.
            Together we are working to build truly decentralized technology with
            the utmost emphasis on security.
          </p>
        </div>

        <div className="mt-ct flex flex-wrap items-center">
          {PARTNERS.map((item, index) => (
            <div
              key={`partner-${index}`}
              data-aos={DATA_AOS.FADE_UP}
              data-aos-delay={100 * index}
              className={classNames(
                "p-8 w-full flex justify-center",
                "sm:w-1/2",
                "lg:w-1/3"
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
                    className="w-full max-w-[90%] h-full object-contain mx-auto"
                  />
                </picture>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PartnerSection;
