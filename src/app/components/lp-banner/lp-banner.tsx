import Image from "next/image";
import React from "react";

const LaunchpadBanner = () => {
  return (
    <div className="w-full relative right-0 lg:right-[-8%] my-team-banner mx-0">
      <div
        style={{ animationDuration: "2s" }}
        className="animate-top-right-bounce"
      >
        <picture className="left-0 top-0">
          <Image
            src={`/hero/unicrypt-token-ilo-launchpad-rocket-00.png`}
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

export default LaunchpadBanner;
