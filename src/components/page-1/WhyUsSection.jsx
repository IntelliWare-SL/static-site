import {Container} from "react-bootstrap";
import React from "react";
import BannerOverImage from "../common/BannerOverImage";

const WhyUsSection = () => {
  return (
    <section className="why-us-section bg-white pb-4 px-0">
      <Container className="pb-2">
        <BannerOverImage bannerTitle="Why Reamer Made?"
                         bannerContent="At Reamer Made, we understand that construction can be a tough business - but it
                         doesn't have to be. We are dedicated to helping you tell your story and branding yourself in the
                         industry."
                         buttonText="Know More"
                         buttonLink="/about-us"
                         imageUrl="https://www.sircapaints.com/wp-content/uploads/2021/07/exterior2.jpg"
                         altText="3D rendering of a modern house"
                         alignBannerRight={true}/>
      </Container>
    </section>
  );
}

export default WhyUsSection;
