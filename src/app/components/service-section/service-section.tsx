import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import { DATA_AOS } from "@/app/util/aos";
import ServiceItem from "./service-item";
import classNames from "classnames";
const SERVICE_LIST = [
  {
    image: "/services-new/unicrypt-icon-launchpad.png",
    title: "ILO \nLaunchpad",
    to: "https://app.uncx.network/services/launchpad/",
    documentationLink:
      "https://docs.uncx.network/guides/for-investors/initial-liquidity-offering-ilo/",
  },
  {
    image: "/services-new/unicrypt-icon-locks.png",
    title: "LP \nToken Vesting",
    to: "https://app.uncx.network/services/lock-liquidity/",
    documentationLink:
      "https://docs.uncx.network/guides/for-investors/liquidity-lockers/",
  },
  {
    image: "/services-new/unicrypt-icon-farms.png",
    title: "Staking \nFarming",
    to: "https://app.uncx.network/chain/mainnet/farms/",
    documentationLink:
      "https://docs.uncx.network/guides/for-investors/staking/",
  },
  {
    image: "/services-new/unicrypt-icon-minter.png",
    title: "Token \nMinter",
    to: "https://app.uncx.network/services/select-minter/",
    documentationLink:
      "https://docs.uncx.network/guides/for-developers/token-minter/",
  },
  {
    image: "/services-new/unicrypt-icon-tokens.png",
    title: "Token \nEcosystem",
    to: "https://app.uncx.network/uncx-staking/",
    documentationLink: "https://docs.uncx.network/uncx-uncl-tokens/",
  },
];

interface ServiceSectionProps {
  hideDescription?: boolean;
}

const ServiceSection = ({ hideDescription }: ServiceSectionProps) => {
  return (
    <Container>
      <div className="px-ct">
        <div className="text-center mt-ct">
          <GradientText
            component={`h2`}
            className={`text-section-title font-bold font-kufam mb-ct-1.5-divide`}
            text={`Our Services`}
            data-aos={DATA_AOS.FADE_UP}
          />

          {!hideDescription && (
            <p
              data-aos={DATA_AOS.FADE_UP}
              data-aos-delay={100}
              className="text-section-description leading-[1.6] lg:max-w-[70%] mx-auto"
            >
              UNCX Network (formerly UniCrypt) is a leading provider of
              decentralized finance services. We are consistent market
              innovators of automated and scalable token solutions. Thousands of
              investors and projects rely on our certified & secured technology
              to participate in DeFi safely. Many imitate, but few innovate like
              we did.
            </p>
          )}
        </div>

        <div className={classNames("mt-ct justify-center flex flex-wrap")}>
          {SERVICE_LIST.map((item, index) => (
            <div
              key={`service-item-${index}`}
              className={classNames(
                "p-2.5",
                "w-full",
                "sm:w-1/2",
                "md:w-1/3",
                "xl:w-1/5"
              )}
              data-aos={DATA_AOS.FADE_UP}
              data-aos-delay={100 * index}
            >
              <ServiceItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
