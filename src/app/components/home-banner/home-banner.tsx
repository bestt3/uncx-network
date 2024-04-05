import classNames from "classnames";
import Image from "next/image";
import React, { CSSProperties } from "react";

const PICTURES = [
  { image: "unicrypt-main-homepage-image-00-min.png" },
  {
    image: "unicrypt-main-homepage-image-01-min.png",
    duration: 3.2,
    delay: 0.3,
    direction: "normal",
  },
  {
    image: "unicrypt-main-homepage-image-02-min.png",
    duration: 3.5,
    delay: 0,
    direction: "reverse",
  },
  {
    image: "unicrypt-main-homepage-image-03-min.png",
    duration: 4,
    delay: 0.5,
    direction: "normal",
  },
  {
    image: "unicrypt-main-homepage-image-05-min.png",
    duration: 3.7,
    delay: 0.2,
    direction: "normal",
  },
  {
    image: "unicrypt-main-homepage-image-06-min.png",
    duration: 4,
    delay: 0,
    direction: "reverse",
  },
];

const HomeBanner = () => {
  const style = (picture: any): CSSProperties => {
    return {
      animationDuration: `${picture.duration}s`,
      animationDelay: `${picture.delay}s`,
      animationDirection: `${picture.direction}`,
    };
  };

  return (
    <div className="relative flex justify-end items-center">
      <div className="w-[95%] relative left-[-10%] my-banner mx-0">
        {PICTURES.map((picture, index) => (
          <picture
            style={index > 0 ? style(picture) : {}}
            key={`hero-picture-${index}`}
            className={classNames("w-[120%] left-0 top-0", {
              [`block`]: index === 0,
              [`absolute animate-lg-home`]: index > 0,
            })}
          >
            <Image
              src={`/home/${picture.image}`}
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

export default HomeBanner;
