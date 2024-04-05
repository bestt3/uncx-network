import Image from "next/image";
import React from "react";
import styles from "./member.module.scss";
import classNames from "classnames";
import GradientText from "../gradient-text/gradient-text";

interface MemberProps {
  image: string;
  name: string;
  position: string;
  linkedin?: string;
}

const Member = (props: MemberProps) => {
  const { image, name, position, ...rest } = props;

  return (
    <div className={classNames(styles["base"], "text-center")} {...rest}>
      <picture className="mx-auto relative w-member h-member block">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes={`100vw`}
          className="w-full h-full object-center object-cover opacity-90 z-1 rounded-full font-kufam"
        />
      </picture>

      <GradientText
        component="h3"
        text={name}
        className="text-intro mt-10 font-bold"
      />
      <div className="mt-2.5 text-member-position">{position}</div>
    </div>
  );
};

export default Member;
