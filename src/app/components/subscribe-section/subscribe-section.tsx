import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import Button from "../button/button";
import { DATA_AOS } from "@/app/util/aos";
import styles from "./subscribe-section.module.scss";
import classNames from "classnames";

const SubscribeSection = () => {
  return (
    <div className="mt-ct-4 py-ct-1.5 bg-gradient-to-r to-color3/20 from-color1/20">
      <Container>
        <div
          className={classNames(
            "px-ct flex flex-col gap-10 text-center items-center",
            "lg:flex-row lg:gap-0 lg:text-left"
          )}
        >
          <div>
            <GradientText
              component={`h2`}
              text={`Subscribe`}
              className="mb-5 text-subscribe-ttl font-bold font-kufam"
              data-aos={DATA_AOS.FADE_UP}
            />
            <p
              className="text-subscribe-description"
              data-aos={DATA_AOS.FADE_UP}
            >
              Be the first to know about our latest updates, releases, and
              useful insights.
            </p>
          </div>

          <div
            className={classNames(
              "text-right flex",
              "lg:w-[65%] lg:justify-end"
            )}
          >
            <div
              className={classNames(styles["form-control"], "lg:max-w-[600px]")}
              data-aos={DATA_AOS.FADE_UP}
            >
              <input type="email" placeholder="you@youremail.com" />

              {/* <span className="absolute bottom-1 left-8 text-red-500 text-sm group-focus-within:opacity-80 opacity-30 transition">
                Email is required
              </span> */}
              <Button className="m-2">Subscribe</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscribeSection;
