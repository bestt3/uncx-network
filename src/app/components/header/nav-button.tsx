import React from "react";
import Button from "../button/button";
import styles from "./nav-button.module.scss";
import classNames from "classnames";

interface NavButtonProps {
  className?: string;
  active?: boolean;
  onClick: () => void;
}

const NavButton = ({ className, active, onClick }: NavButtonProps) => {
  return (
    <Button
      className={classNames(
        styles["base"],
        { [`${styles["active"]}`]: active },
        className
      )}
      onClick={onClick}
    >
      <svg viewBox="0 0 100 100">
        <title>Navigation</title>
        <path
          className={styles["l-1"]}
          d="M0,42h62c13,0,6,26-4,16L35,35"
        ></path>
        <path className={styles["l-2"]} d="M0,50h70"></path>
        <path
          className={styles["l-3"]}
          d="M0,58h62c13,0,6-26-4-16L35,65"
        ></path>
      </svg>
    </Button>
  );
};

export default NavButton;
