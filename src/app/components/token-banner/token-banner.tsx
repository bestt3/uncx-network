import Image from "next/image";
import React from "react";

const TokenBanner = () => {
  return (
    <div className="w-full relative right-0 lg:right-[-8%] my-team-banner mx-0">
      <div style={{ animationDuration: "2s" }}>
        <picture
          style={{ animationDuration: "2.5s" }}
          className="left-0 top-0 block relative animate-lg-home"
        >
          <Image
            src={`/hero/unicrypt-token-uncl-uncx-image-00.png`}
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

export default TokenBanner;
