import React from "react";
import Container from "../container/container";
import Image from "next/image";
import classNames from "classnames";
import { DATA_AOS } from "@/app/util/aos";

const IMAGES = [
  "/blockchain/unicrypt_ethereum.svg",
  "/blockchain/unicrypt_binance_chain.svg",
  "/blockchain/unicrypt_avalanche.svg",
  "/blockchain/unicrypt_base.svg",
  "/blockchain/unicrypt_polygon.svg",
  "/blockchain/unicrypt_arbitrum.svg",
];

export const NetworkSection = () => {
  return (
    <Container className="z-10">
      <div
        className={classNames(
          `grid grid-cols-1 py-header px-0`,
          `sm:grid-cols-2`,
          `md:grid-cols-3`
        )}
      >
        {IMAGES.map((image, index) => (
          <div
            key={`blockchain-network-${index}`}
            className="p-4"
            data-aos={DATA_AOS.FADE_UP}
          >
            <picture className={`text-center`}>
              <Image
                src={image}
                alt=""
                width={0}
                height={0}
                sizes={`100vw`}
                className={`w-auto h-network-image mx-auto`}
              />
            </picture>
          </div>
        ))}
      </div>
    </Container>
  );
};
