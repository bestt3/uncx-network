import React from "react";
import styles from "./gradient-text.module.scss";
import classNames from "classnames";

interface GradientTextProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span";
  className?: string;
  text?: string;
}

const GradientText = (props: GradientTextProps) => {
  const { component = "div", className, text, ...rest } = props;
  const Component = component;

  return (
    <Component
      className={classNames(styles["base"], "inline-block", className)}
      {...rest}
    >
      {text}
    </Component>
  );
};

export default GradientText;
