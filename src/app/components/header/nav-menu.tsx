import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Button from "../button/button";

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
  return (
    <div>
      <nav>
        <ul className={classNames("p-0 flex gap-12 items-center")}>
          {MENU.map((navItem, index) => (
            <li key={`nav-item-${index}`}>
              <Link
                href={navItem.to}
                className="text-md-1 text-shadow-sm shadow-white"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
          <li>
            <Button>Go to App</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
