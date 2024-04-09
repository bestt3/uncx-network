import Image from "next/image";
import React from "react";

const VestingBanner = () => {
  return (
    <div className="relative flex justify-end items-center">
      <div className="w-full relative right-[-15%] my-team-banner mx-0">
        <picture className="left-0 relative top-0 block animate-vesting">
          <Image
            src={`/hero/unicrypt-liquidity-locking-image-00.png`}
            alt=""
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </picture>

        <picture className="left-0 absolute top-0 animate-vesting-2">
          <Image
            src={`/hero/unicrypt-liquidity-locking-image-01.png`}
            alt=""
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </picture>
      </div>
    </div>
  );
};

export default VestingBanner;
