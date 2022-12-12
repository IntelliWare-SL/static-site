import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";

const HeroSection2 = () => {
  return (
    <section className="hero-section-2">
      <div className="hero-bg-image pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="px-0 pt-5 pb-5">
        <Row className="m-0 p-0 pt-5 h-100">
          <Col sm={12} md={6} className="hero-left pe-5 h-100">
            <section className="hero-content">
              <h6 className="breadcrumbs">Home/About Us</h6>
              <h1 className="text-white hero-title py-2">We're Not Afraid
                <br/>
                Of <span>A Little Dirt</span></h1>
              <div className="hero-text py-2">
                <p className="py-2">
                  At Reamer Made, we understand the unique needs of the construction industry. Our founder, Allison
                  Murrell, started working in the industry in 2014 alongside her father at their family’s
                  third-generation
                  heavy civil construction company. Allison quickly realized that the construction industry was still
                  very
                  behind when it came to technology and marketing, so she decided to use her knowledge of construction
                  and
                  marketing to help other companies in this industry.
                </p>
                <p className="py-2">
                  By specializing in web development, digital marketing, and defining your brand – Reamer Made’s goal is
                  to help bridge the gap between the construction industry and technology. We want to help your company
                  tap into its potential for growth.
                </p>
              </div>

              <Button variant="primary" className="hero-button px-5 py-2 me-2 mt-2">Contact Us</Button>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right ps-5 h-100">
            <div className="mb-3">
              <div className="v-line float-start"/>
              <div className="image-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/positive-business-partners-meeting-office-building-shaking-hands-with-each-other-side-view-medium-shot-corporate-communication-handshake-concept_74855-7728.jpg?w=2000"
                  width="100%" height="100%" alt=""/>
              </div>
              <div className="h-line"></div>
            </div>
            <p className="hero-text pt-2 pb-0 mb-0">
              Reamer Made understands the unique needs of theconstruction industry. We know how to reach your target
              audience and get your message out there, using strategies that are proven to be effective. We are here to
              help you grow your business and reach your goals.
            </p>
          </Col>
          {/*<Col sm={12} md={6} className="hero-right px-0 position-absolute">*/}
          {/*  <div className="image-wrapper">*/}
          {/*    <img src={heroImage} alt="Architectural house" className="m-auto"/>*/}
          {/*  </div>*/}
          {/*</Col>*/}
        </Row>
        {/*<Row className="overlay-row">*/}
        {/*  <Col sm={12} className="">*/}
        {/*    <div className="hero-banner">*/}
        {/*      <svg width="255" height="250" viewBox="0 0 255 210" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path*/}
        {/*          d="M34.0421 102.711C34.1037 100.091 36.9867 98.5205 39.2315 99.8834L60.143 112.58C62.7227 114.147 62.1418 118.036 59.2163 118.785L48.7744 121.458C48.1496 121.618 47.5749 121.931 47.1023 122.369L39.2063 129.687C36.9942 131.737 33.3974 130.124 33.4682 127.114L34.0421 102.711Z"*/}
        {/*          fill="#EFEFEF" stroke="#EFEFEF" strokeWidth="0.430255"/>*/}
        {/*        <path*/}
        {/*          d="M226.542 116.173C213.73 135.218 198.492 158.787 160.709 156.535C123.558 154.321 102.051 111.487 130.859 106.852C156.318 102.757 160.544 154.518 118.393 161.999C84.672 167.983 56.0992 136.152 47.1217 120.415"*/}
        {/*          stroke="#EFEFEF" strokeWidth="3.83629" strokeLinecap="round" strokeDasharray="6.39 12.79"/>*/}
        {/*      </svg>*/}
        {/*      <div className="banner-box d-inline-flex">*/}
        {/*        <h3 className="m-auto">*/}
        {/*          We’ ve been Building*/}
        {/*          <br/>Our Experience*/}
        {/*          <br/>since 2000*/}
        {/*        </h3>*/}
        {/*      </div>*/}
        {/*      <SocialMediaIcons/>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Container>
    </section>
  );
}

export default HeroSection2;
