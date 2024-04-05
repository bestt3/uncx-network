"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../button/button";
import NavButton from "./nav-button";

const MENU = [
  {
    to: "/products",
    label: "Products",
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
    to: "/blog",
    label: "Blog",
  },
];

const NavMenu = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <nav
        className={classNames(
          "fixed right-0 top-0 h-screen bg-bg1/80",
          "lg:relative lg:translate-x-0 lg:h-auto lg:bg-transparent",
          { ["translate-x-[100%]"]: !open }
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
                "p-m-nav-item min-w-[280px]",
                "lg:p-0 lg:min-w-[auto]"
              )}
            >
              <Link
                href={navItem.to}
                className={classNames(
                  "text-shadow-sm shadow-white text-m-nav-item ",
                  "lg:text-md-1"
                )}
              >
                {navItem.label}
              </Link>
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

      {/* <NavButton /> */}
    </div>
  );
};

export default NavMenu;
