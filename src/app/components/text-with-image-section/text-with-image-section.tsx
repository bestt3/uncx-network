import React from "react";
import Container from "../container/container";
import Image from "next/image";
import classNames from "classnames";
import { DATA_AOS } from "@/app/util/aos";
import GradientText from "../gradient-text/gradient-text";

interface ContentType {
  title: string;
  description: string[];
  imageSrc: string;
  className?: string;
}
interface TextWithImageSectionProps {
  contents: ContentType[];
}

const TextWithImageSection = ({ contents }: TextWithImageSectionProps) => {
  return (
    <section className={`p-ct mt-ct relative`}>
      <Container className={`z-[10]`}>
        {contents.map((item, index) => (
          <div
            key={`text-with-image-${index}`}
            className={classNames("flex items-center", item.className, {
              "mt-ct-2-divide": index > 0,
            })}
          >
            <div className="p-ct w-full lg:w-1/2">
              <picture data-aos={DATA_AOS.FADE_UP} data-aos-delay={100}>
                <Image
                  src={item.imageSrc}
                  width={0}
                  height={0}
                  alt=""
                  className="w-[80%] h-auto mx-auto lg:m-0 object-contain"
                />
              </picture>
            </div>
            <div className="w-full lg:w-1/2">
              <GradientText
                text={item.title}
                component="h2"
                className="font-kufam text-with-image-title w-full text-center"
                data-aos={DATA_AOS.FADE_UP}
              />
              <div className="mt-ct-1.5-divide text-with-image-description leading-[1.6] text-center">
                {item.description.map((desc, dIndex) => (
                  <p
                    key={`${index}-${dIndex}`}
                    className={dIndex > 0 ? "mt-ct-2-divide" : ""}
                    data-aos={DATA_AOS.FADE_UP}
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Container>
      <picture className="left-0 absolute top-[50%] translate-y-[-50%] w-full z-[-1]">
        <Image
          src={`/bg-unicorn-two.png`}
          width={0}
          height={0}
          sizes={`100vw`}
          alt=""
          className="w-full h-auto"
        />
      </picture>
    </section>
  );
};

export default TextWithImageSection;
