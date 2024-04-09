import React from "react";
import Container from "../container/container";
import Button from "../button/button";
import { DATA_AOS } from "@/app/util/aos";

interface ProductButtonSectionProps {
  to: string;
  label: string;
}

const ProductButtonSection = ({ to, label }: ProductButtonSectionProps) => {
  return (
    <div className="py-ct mb-ct-2 z-[10] relative bg-gradient-to-r bg-black to-color3/20 from-color1/20">
      <Container>
        <div
          className="flex gap-5 justify-center items-center"
          data-aos={DATA_AOS.FADE_UP}
        >
          <Button href={to} component={`a`} size="lg">
            {label}
          </Button>
          <Button
            variant="outlined"
            href={`https://docs.uncx.network/`}
            component={`a`}
            size="lg"
          >
            {`Documentation`}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProductButtonSection;
