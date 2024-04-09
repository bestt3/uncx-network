import Image from "next/image";
import React, { CSSProperties } from "react";

const StakingBanner = () => {
  const style = (index: number): CSSProperties => {
    return { opacity: 1 };
  };

  return (
    <div className="w-full relative right-0 lg:right-[-8%] my-team-banner mx-0">
      <div
        style={{ animationDuration: "2s" }}
        className="animate-top-right-bounce"
      >
        <picture
          className="left-0 top-0 transition-all duration-0 ease-linear"
          style={style(0)}
        >
          <Image
            src={`/hero/unicrypt-staking-farming-image-00.png`}
            width={0}
            height={0}
            alt=""
            sizes="100vw"
            className="w-full h-auto"
          />
        </picture>
      </div>
    </div>
  );
};

export default StakingBanner;
