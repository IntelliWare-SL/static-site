import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import sampleIntro from "../../assets/videos/sample-intro.mp4";
import bgCurves from "../../assets/images/bg-curves.png";
import SocialMediaIcons from "../common/SocialMediaIcons";
import CustomButton from "../common/CustomButton";

const HeroSection1 = () => {
  return (
    <section className="hero-common-1 hero-section-1">
      <div className="hero-bg-image mt-3 pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="hero-section-1 px-0 pb-4 pb-md-5 pb-md-0">
        <Row className="m-0 p-0 px-3 px-md-0">
          <Col sm={12} md={6} className="hero-left d-flex my-auto pe-md-5">
            <section className="hero-content align-self-center pt-4 pb-4">
              <h1 className="text-white hero-title py-3 py-md-2">
                We <span>Work Hard</span> to
                Make You Look
                Good.
              </h1>
              <h5 className="text-white hero-subtitle py-1 py-sm-2 py-md-4 fw-normal pe-0 pe-md-5 me-md-5">
                A marketing firm that's truly made from the ground up.
                We know the construction industry inside and out,
                and we're here to help your business grow.
              </h5>
              <div className="hero-actions d-inline-flex">
                <CustomButton link={'/contact-us'} text={'Contact Us'}/>
              </div>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right h-100 px-md-0">
            {/*<Button className="play-button position-absolute">*/}
            {/*  <div className="play-button-icon ms-3">*/}
            {/*    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        d="M21.0001 0C9.4199 0 0 9.42081 0 21C0 32.5793 9.4199 42 21.0001 42C32.5801 42 42.0001 32.5793 42.0001 21C42.0001 9.42081 32.5801 0 21.0001 0ZM29.3485 21.7358L17.0985 29.6108C16.9549 29.7039 16.7891 29.75 16.625 29.75C16.4815 29.75 16.3362 29.7141 16.2064 29.6432C15.9244 29.4894 15.75 29.1955 15.75 28.875V13.125C15.75 12.8046 15.9244 12.5106 16.2064 12.3568C16.4832 12.2047 16.8302 12.2141 17.0985 12.3893L29.3485 20.2642C29.598 20.4249 29.7501 20.7027 29.7501 21C29.7501 21.2973 29.598 21.575 29.3485 21.7358Z"/>*/}
            {/*    </svg>*/}
            {/*  </div>*/}
            {/*</Button>*/}
            <div className="media-wrapper-full overflow-hidden">
              <video autoPlay loop muted>
                <source src={sampleIntro} type="video/mp4"/>
              </video>
              {/*<img src={heroImage} alt="Architectural house" className="m-auto"/>*/}
            </div>
          </Col>
        </Row>
        <Row className="overlay-row justify-content-end justify-content-lg-center">
          <Col xs={12} sm={8} md={8} className="">
            <div className="hero-banner">
              <svg className="arrow" width="255" height="250" viewBox="0 0 255 210" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.0421 102.711C34.1037 100.091 36.9867 98.5205 39.2315 99.8834L60.143 112.58C62.7227 114.147 62.1418 118.036 59.2163 118.785L48.7744 121.458C48.1496 121.618 47.5749 121.931 47.1023 122.369L39.2063 129.687C36.9942 131.737 33.3974 130.124 33.4682 127.114L34.0421 102.711Z"
                  fill="#EFEFEF" stroke="#EFEFEF" strokeWidth="0.430255"/>
                <path
                  d="M226.542 116.173C213.73 135.218 198.492 158.787 160.709 156.535C123.558 154.321 102.051 111.487 130.859 106.852C156.318 102.757 160.544 154.518 118.393 161.999C84.672 167.983 56.0992 136.152 47.1217 120.415"
                  stroke="#EFEFEF" strokeWidth="3.83629" strokeLinecap="round" strokeDasharray="6.39 12.79"/>
              </svg>
              <div className="banner-box d-inline-flex p-3 p-md-4">
                <h3 className="m-auto">
                  We’ ve been Building
                  <br/>Our Experience
                  <br/>since 2000
                </h3>
              </div>
              <SocialMediaIcons/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection1;
