import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import Link from "next/link";
import { DATA_AOS } from "@/app/util/aos";

const NewsFeedSection = () => {
  return (
    <Container className="text-center mt-ct-2">
      <div className="px-ct">
        <div className="mt-ct" data-aos={DATA_AOS.FADE_UP}>
          <GradientText
            className="text-section-title mb-ct-1.5"
            text={`News Feed`}
          />
        </div>
        <p
          className="my-ct-1.5 text-section-description"
          data-aos={DATA_AOS.FADE_UP}
          data-aos-delay={100}
        >
          Keep up to date with the latest innovations in the DeFi space.
        </p>
        <Link
          href={`https://twitter.com/UNCX_token?ref_src=twsrc%5Etfw`}
          className="text-base"
          data-aos={DATA_AOS.FADE_UP}
          data-aos-delay={100}
        >
          Tweets by UNCX_token
        </Link>
      </div>
    </Container>
  );
};

export default NewsFeedSection;
