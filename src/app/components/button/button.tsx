import classNames from "classnames";
import React, { ReactNode, useMemo } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const Button = ({
  className = "",
  children,
  size = "md",
  onClick,
}: ButtonProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "sm":
        return "";
      case "md":
        return ["py-[18px] px-[28px]", "text-btn-md"];
      case "lg":
        return "";
      default:
        return "";
    }
  }, [size]);

  return (
    <button
      className={classNames(
        styles["base"],
        `flex items-center justify-center`,
        `bg-[length:300%_auto] bg-[100%_0]`,
        `rounded-full`,
        `text-bg1`,
        `font-bold`,
        `text-shadow shadow-black/10`,
        `transition-all duration-600 `,
        `hover:text-txt1 hover:bg-[0_0]`,
        sizeStyle,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
