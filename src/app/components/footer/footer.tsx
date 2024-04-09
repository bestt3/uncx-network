import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Social from "../social/social";

const MENU = [
  {
    label: "Sitemap",
    to: "/sitemap",
  },
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
  },
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    to: "/terms",
  },
  {
    label: "Audits",
    to: "https://github.com/chainsulting/Smart-Contract-Security-Audits/tree/master/Unicrypt",
  },
  {
    label: "Brand Assets",
    to: "https://www.notion.so/UNCX-Network-Public-Asset-Library-97bd8873f9d544abb29397c4f427d982?pvs=4",
  },
];

const RIGHT_MENU = [
  {
    title: "Products",
    list: [
      {
        label: "Launchpad",
        to: "/launchpad",
      },
      {
        label: "Locking & Vesting",
        to: "/vesting",
      },
      {
        label: "Staking & Farming",
        to: "/staking",
      },
      {
        label: "Token Minter",
        to: "/minter",
      },
    ],
  },
  {
    title: "Company",
    list: [
      {
        label: "Meet the Team",
        to: "/team",
      },
      {
        label: "Documentation",
        to: "https://docs.uncx.network/",
      },
      {
        label: "Our Tokens",
        to: "/tokens",
      },
      {
        label: "Network",
        to: "/network",
      },
      {
        label: "Tutorials",
        to: "https://discord.com/channels/867622354669666354/1097560338053992509/threads/1098152648177352766",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pt-ct-2 pb-ct relative">
      <div
        className={`bg-gradient-to-b from-bg1 to-transparent absolute w-full h-full opacity-80 top-0 left-0 z-[2]`}
      />
      <Container className="z-[2]">
        <div className="px-ct">
          <div
            className={classNames(
              "flex items-start flex-col gap-12",
              "md:flex-row md:gap-0 md:text-right"
            )}
          >
            <div className="flex-1 text-left">
              <GradientText
                text={`UNCX Network`}
                className="font-bold leading-[1.1] text-footer-ttl"
              />
              <ul className="mt-ct-1.5-divide text-footer-nav-item">
                {MENU.map((menuItem, index) => (
                  <li
                    key={`main-nav-item-${index}`}
                    className={index > 0 ? "mt-ct-2.5-divide" : ""}
                  >
                    <Link
                      href={menuItem.to}
                      className="hover:text-color1 transition-all duration-600"
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-ct-2.5-divide">
                  <Link
                    href={`/promo/killerwhales-competition`}
                    className="hover:text-color1 transition-all duration-600 md:border-t md:pt-6 inline-block"
                  >
                    {`Killer Whales Contest`}
                  </Link>
                </li>
              </ul>

              <Social className="justify-start mt-ct-1.5-divide" size={`sm`} />
            </div>

            {RIGHT_MENU.map((menu, index) => (
              <div className={`md:ml-ct-2`} key={`right-menu-${index}`}>
                <GradientText
                  className="text-footer-right-ttl font-bold"
                  text={menu.title}
                />
                <ul className="mt-ct-1.5-divide text-footer-nav-item">
                  {menu.list.map((navItem, index) => (
                    <li
                      key={`right-menu-nav-item-${index}`}
                      className={index > 0 ? "mt-ct-2.5-divide" : ""}
                    >
                      <Link
                        href={navItem.to}
                        className="hover:text-color1 transition-all duration-600"
                      >
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-ct text-center">
            <GradientText
              className="text-footer-bottom font-bold"
              text="UNCX Network © 2021-2024. All rights reserved."
            />
          </div>
        </div>
      </Container>

      <Image
        src={`/bg-footer.jpg`}
        width={0}
        height={0}
        sizes={`100`}
        alt=""
        className="w-full h-full absolute top-0 left-0 object-cover z-[1]"
      />
    </footer>
  );
};

export default Footer;
