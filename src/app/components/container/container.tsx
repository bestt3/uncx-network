import classNames from "classnames";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("container mx-auto relative", className)}>
      {children}
    </div>
  );
};

export default Container;
