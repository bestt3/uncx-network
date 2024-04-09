"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../button/button";
import NavButton from "./nav-button";
import styles from "./nav-menu.module.scss";

const MENU = [
  {
    to: "/products",
    label: "Products",
    subMenu: [
      {
        to: "/launchpad",
        label: "ILO Launchpad",
      },
      {
        to: "/vesting",
        label: "LP & Token Vesting",
      },
      {
        to: "/staking",
        label: "Staking & Farming",
      },
      {
        to: "/minter",
        label: "Token Minter",
      },
      {
        to: "/tokens",
        label: "Token Ecosystem",
      },
    ],
  },
  {
    to: "/team",
    label: "Meet the Team",
  },
  {
    to: "/network",
    label: "Network",
  },
  {
    to: "https://docs.uncx.network/",
    label: "Documentation",
    target: "_blank",
  },
];

const NavMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className={classNames(
          "fixed right-0 top-0 h-screen bg-bg1/80 transition-all duration-600",
          "lg:relative lg:translate-x-0 lg:h-auto lg:bg-transparent",
          { ["translate-x-[100%]"]: !isMenuOpen }
        )}
      >
        <ul
          className={classNames(
            "p-0 flex",
            "flex-col pt-header-height",
            "lg:flex-row lg:gap-12 lg:items-center lg:p-0"
          )}
        >
          {MENU.map((navItem, index) => (
            <li
              key={`nav-item-${index}`}
              className={classNames(
                " min-w-[280px] relative",
                "lg:p-0 lg:min-w-[auto]",
                {
                  "p-m-nav-item": !navItem.subMenu,
                }
              )}
            >
              {navItem.subMenu ? (
                <>
                  <span
                    className={classNames(
                      "hidden text-shadow-sm shadow-white text-m-nav-item transition-all duration-600",
                      "lg:text-md-1 cursor-pointer lg:block",
                      styles["submenu-anchor"]
                    )}
                  >
                    {navItem.label}
                  </span>
                  <ol className="lg:opacity-0 lg:left-[-50%] lg:absolute lg:p-4 lg:bg-bg1 lg:rounded-lg transition-all duration-600  text-nowrap hover:lg:opacity-[1]">
                    {navItem.subMenu.map((subItem, subIndex) => (
                      <li
                        key={`nav-item-${index}-${subIndex}`}
                        className={classNames(
                          "p-m-nav-item lg:p-2.5 lg:text-center"
                        )}
                      >
                        <Link
                          href={subItem.to}
                          className={classNames(
                            "text-shadow-sm text-m-nav-item lg:text-[90%] lg:font-bold shadow-white transition-all duration-600 ",
                            "hover:text-color1"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <Link
                  href={navItem.to}
                  className={classNames(
                    "text-shadow-sm shadow-white text-m-nav-item transition-all duration-600",
                    "lg:text-md-1",
                    "hover:text-color1"
                  )}
                  target={navItem.target}
                >
                  {navItem.label}
                </Link>
              )}
            </li>
          ))}
          <li
            className={classNames(
              "p-m-nav-item min-w-[280px]",
              "lg:p-0 lg:min-w-[auto]"
            )}
          >
            <Button className="w-full lg:w-auto">Go to App</Button>
          </li>
        </ul>
      </nav>

      <NavButton
        className={`block lg:hidden`}
        active={isMenuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      />
    </div>
  );
};

export default NavMenu;
