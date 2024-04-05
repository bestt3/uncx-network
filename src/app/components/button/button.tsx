import classNames from "classnames";
import React, { HTMLAttributeAnchorTarget, ReactNode, useMemo } from "react";
import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  component?: "button" | "a";
  href?: string;
  variant?: "filled" | "outlined";
  target?: HTMLAttributeAnchorTarget;
}

const Button = ({
  className = "",
  children,
  size = "md",
  component = "button",
  href,
  onClick,
  variant = "filled",
  target,
}: ButtonProps) => {
  const _className = classNames(
    styles["base"],
    styles[`${size}`],
    styles[`${variant}`],
    "inline-flex",
    className
  );

  if (component === "a") {
    return (
      <Link className={_className} href={href || ""} target={target}>
        {children}
      </Link>
    );
  } else {
  }
  return (
    <button className={_className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
