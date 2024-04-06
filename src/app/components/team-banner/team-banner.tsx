import classNames from "classnames";
import Image from "next/image";
import React, { CSSProperties } from "react";

const PICTURES = [
  { image: "/hero/unicrypt-team-hero-image-00.png", duration: 2.5 },
  {
    image: "/hero/unicrypt-team-hero-image-01.png",
    duration: 3,
  },
  {
    image: "/hero/unicrypt-team-hero-image-02.png",
    duration: 2,
  },
];

const TeamBanner = () => {
  const style = (picture: any): CSSProperties => {
    return {
      animationDuration: `${picture.duration}s`,
    };
  };

  return (
    <div className="relative flex justify-end items-center">
      <div className="w-full relative right-[-8%] my-team-banner mx-0">
        {PICTURES.map((picture, index) => (
          <picture
            style={style(picture)}
            key={`hero-picture-${index}`}
            className={classNames("w-full left-0 top-0 animate-lg-home", {
              absolute: index > 0,
              "relative block z-[1]": index === 0,
            })}
          >
            <Image
              src={`${picture.image}`}
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

export default TeamBanner;
