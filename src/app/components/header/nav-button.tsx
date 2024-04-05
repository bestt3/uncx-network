import React from "react";
import Button from "../button/button";
import styles from "./nav-button.module.scss";

const NavButton = () => {
  return (
    <Button className={styles["base"]}>
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </Button>
  );
};

export default NavButton;
