"use client";

import React from "react";
import Container from "../container/container";
import GradientText from "../gradient-text/gradient-text";
import Slider from "react-slick";
import styles from "./testimonial-section.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { testimonials } from "@/app/util/testimonial";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container className="z-[10]">
      <GradientText
        text={`Our customers trust us`}
        className="mt-ct mb-ct-1.5-divide w-full text-section-title text-center font-kufam"
      />
      <div className="max-w-testimonial mx-auto w-full">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={`testimonial-${index}`}>
              <div
                className={classNames(
                  styles["item"],
                  "relative flex gap-5 m-4 items-center justify-center"
                )}
              >
                <picture className="min-w-[180px] max-w-[180px] rounded-full overflow-hidden mx-auto hidden md:block">
                  <Image
                    src={item.imageSrc}
                    width={0}
                    height={0}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
                <div>
                  <div className="text-tvl-sm leading-[1.3] italic">{`"${item.text}"`}</div>
                  <GradientText
                    className="mt-4 text-with-image-description"
                    text={item.anchor}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default TestimonialSection;
