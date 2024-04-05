import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <header
      className={classNames(
        "bg-gradient-to-b from-bg1 to-bg1-95",
        "flex items-center justify-between",
        "p-header",
        "rounded-b-3xl",
        "fixed top-0",
        "w-full",
        "z-[99]"
      )}
    >
      <Link href={"/"}>
        <Image
          src={`/logo-unicrypt.svg`}
          alt="logo"
          className={classNames(`w-[210px]`, `md:w-[250px] h-auto`)}
          width={0}
          height={0}
        />
      </Link>
      {/* <NavMenu /> */}
    </header>
  );
};

export default Header;
