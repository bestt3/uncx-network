import Image from "next/image";
import React from "react";

const CanvasSection = () => {
  return (
    <div className="w-full">
      <Image
        src={"/flowing-net.png"}
        alt="net"
        width={0}
        height={0}
        className="w-full h-auto"
      />
    </div>
  );
};

export default CanvasSection;
