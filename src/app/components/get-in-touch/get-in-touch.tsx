import React from "react";
import Container from "../container/container";
import Social from "../social/social";
import { DATA_AOS } from "@/app/util/aos";

const GetInTouch = () => {
  return (
    <div className="mb-ct-2 py-ct bg-gradient-to-r to-color3/20 from-color1/20">
      <Container className="flex gap-5 justify-center items-center flex-col lg:flex-row">
        <h2
          data-aos={DATA_AOS.FADE_UP}
          className="text-get-in-touch font-kufam"
        >
          Get in touch with us...
        </h2>
        <Social data-aos={DATA_AOS.FADE_UP} />
      </Container>
    </div>
  );
};

export default GetInTouch;
