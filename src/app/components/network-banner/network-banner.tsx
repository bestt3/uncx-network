import classNames from "classnames";
import Image from "next/image";
import React, { CSSProperties } from "react";

const ITEMS = [
  { duration: 3, left: `-5%` },
  {
    duration: 2.5,
    left: `-10%`,
    top: 0,
    width: "25%",
  },
  {
    left: `50%`,
    top: 0,
    width: `35%`,
    duration: 2.2,
  },
  {
    left: `80%`,
    top: "40%",
    width: `30%`,
    duration: 3.2,
  },
  {
    left: `55%`,
    top: "70%",
    width: `35%`,
    duration: 2,
  },
  {
    left: `-5%`,
    top: "60%",
    width: `27%`,
    duration: 2.7,
  },
];

const NetworkBanner = () => {
  const style = (item: any): CSSProperties => {
    return {
      ...(item.duration && { animationDuration: `${item.duration}s` }),
      ...(item.top && { top: `${item.top}` }),
      ...(item.left && { left: `${item.left}` }),
      ...(item.width && { width: `${item.width}` }),
    };
  };

  return (
    <div className="relative flex justify-end items-center">
      <div className="w-full relative right-0 lg:right-[-8%] my-team-banner mx-0">
        {ITEMS.map((item, index) => (
          <picture
            style={style(item)}
            key={`hero-picture-${index}`}
            className={classNames("w-full left-0 top-0 animate-network_1", {
              absolute: index > 0,
              "relative block z-[1]": index === 0,
            })}
          >
            <Image
              src={`/hero/unicrypt-partneships-hero-image-00.png`}
              className="w-full h-auto"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default NetworkBanner;
