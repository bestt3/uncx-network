
import type { Metadata } from "next";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";

import Header from "./components/header/header";
import { gilroy, kufam } from "@/styles/font";
import classNames from "classnames";
import AosTransitionWrapper from "./components/aos-transition-wrapper/aos-transition-wrapper";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <main
          className={classNames("pt-16 overflow-hidden", "lg:pt-header-height")}
        >
          <AosTransitionWrapper>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            {children}
          </AosTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
