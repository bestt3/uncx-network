import React from "react";
import Icon from "@/app/icons/checkbox";
import styles from "./checkbox-icon.module.scss";

const CheckboxIcon = () => {
  return (
    <span className={styles["base"]}>
      <Icon />
    </span>
  );
};

export default CheckboxIcon;
