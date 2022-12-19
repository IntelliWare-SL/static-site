import {Container} from "react-bootstrap";
import React from "react";
import BannerOverImage from "../common/BannerOverImage";

const ContactUsSection = () => {
  return (
    <section className="contact-us-section bg-white pt-5 pt-md-3 pb-4 mb-3 mb-md-3">
      <Container className="mb-2 mb-md-5 px-2">
        <BannerOverImage bannerTitle="Interested in our services?"
                         bannerContent="At Reamer Made, we understand that construction can be a tough business - but it
                         doesn't have to be. We are dedicated to helping you tell your story and branding yourself in the
                         industry."
                         buttonText="Contact Us"
                         buttonLink="/contact-us"
                         imageUrl="https://img.freepik.com/free-photo/skyscraper-view-city-leader-window-frame_1134-1034.jpg?w=2000&t=st=1670734476~exp=1670735076~hmac=57633e0d77536b1db1df1dfdb0e4e0a6e3f265056b68f9ed16de9e81411b1df6"
                         alignBannerRight={false}
                         bannerCustomClasses="mobile-full-width mt-2 mt-md-0"
                         imageCustomClasses="d-none d-md-block"/>
      </Container>
    </section>
  );
}

export default ContactUsSection;
