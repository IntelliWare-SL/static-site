import {Container} from "react-bootstrap";
import React from "react";
import BannerOverImage from "./BannerOverImage";

const ContactUsSection = () => {
  return (
    <section className="contact-us-section bg-white pt-4 pb-5 px-0">
      <Container className="mb-5">
        <BannerOverImage bannerTitle="Interested in our services?"
                         bannerContent="At Reamer Made, we understand that construction can be a tough business - but it
                         doesn't have to be. We are dedicated to helping you tell your story and branding yourself in the
                         industry."
                         buttonText="Contact Us"
                         buttonLink="#"
                         imageUrl="https://img.freepik.com/free-photo/skyscraper-view-city-leader-window-frame_1134-1034.jpg?w=2000&t=st=1670734476~exp=1670735076~hmac=57633e0d77536b1db1df1dfdb0e4e0a6e3f265056b68f9ed16de9e81411b1df6"
                         alignBannerRight={false}/>
      </Container>
    </section>
  );
}

export default ContactUsSection;
