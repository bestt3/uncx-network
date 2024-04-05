import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/header/header";

import { gilroy, kufam } from "@/styles/font";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "UNCX Network • Multi-chain DeFi Services",
  description:
    "UNCX Network is a leading provider of DeFi services. Our scalable tools help token projects launch and grow their communities safely and effectively.",
  keywords: [
    `UNCX Network`,
    `defi provider`,
    `defi services`,
    `decentralized finance`,
    `multichain`,
    ` blockchain tools`,
    `liquidity`,
    `staking`,
    `minting`,
    `token`,
    `ecosystem`,
    `vesting`,
    `launchpad`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          gilroy.className,
          gilroy.variable,
          kufam.variable
        )}
      >
        <Header key={`header`} />
        <main className={classNames("pt-16", "lg:pt-header-height")}>
          {children}
        </main>
      </body>
    </html>
  );
}
