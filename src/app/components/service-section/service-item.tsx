import React from "react";
import styles from "./service-item.module.scss";
import Image from "next/image";
import Button from "../button/button";
import classNames from "classnames";

interface ServiceItemProps {
  image: string;
  title: string;
  to: string;
  documentationLink: string;
}

const ServiceItem = ({
  image,
  title,
  to,
  documentationLink,
}: ServiceItemProps) => {
  return (
    <div className={classNames(styles["base"], "pt-0 px-5 pb-6")}>
      <picture className="w-[90%] mx-auto z-[1]">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes={`100vw`}
          className="h-auto w-full"
        />
      </picture>

      <h3 className="mb-5 text-serv font-bold whitespace-break-spaces z-[1]">
        {title}
      </h3>

      <div className="flex flex-col gap-3">
        <Button
          component={`a`}
          className={classNames(styles["btn"], "w-full")}
          href={to}
          size="lg"
        >
          Go to App
        </Button>

        <Button
          component={`a`}
          className={classNames(styles["btn"], "w-full")}
          href={documentationLink}
          variant="outlined"
          size="lg"
          target="outlined"
        >
          Documentation
        </Button>
      </div>
    </div>
  );
};

export default ServiceItem;
