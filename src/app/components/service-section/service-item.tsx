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
    <div className={classNames(styles["base"], "sm:pt-0 px-5 py-6")}>
      <picture className="order-2 m-1 sm:m-auto sm:order-1 w-[35%] sm:w-[90%] mx-auto z-[1]">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes={`100vw`}
          className="h-auto w-full"
        />
      </picture>

      <h3 className="order-1 sm:order-2 sm:mb-5 text-serv font-bold sm:whitespace-break-spaces z-[1]">
        {title}
      </h3>

      <div className="order-3 flex flex-col gap-3">
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
