import React from "react";
import styles from "./pad.module.scss";
import classNames from "classnames";
import Image from "next/image";
import GradientText from "../../gradient-text/gradient-text";

interface PadProps {
  image: string;
  name: string;
  value: string;
  className?: string;
}

const Pad = (props: PadProps) => {
  const { image, name, value, className = "", ...rest } = props;
  return (
    <div
      className={classNames(styles["base"], "relative", className)}
      {...rest}
    >
      <div className="z-[1] relative">
        <picture className={`mb-lp-pad relative block`}>
          <Image
            width={0}
            height={0}
            sizes={`100vw`}
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full z-[1] relative"
          />
        </picture>

        <div className="text-section-description mt-3 font-bold">{name}</div>

        <GradientText text={value} className="text-serv mt-3" />
      </div>
    </div>
  );
};

export default Pad;
