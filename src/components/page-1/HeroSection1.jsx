import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import sampleIntro from "../../assets/videos/HomePage-Video-web-version.mov";
import bgCurves from "../../assets/images/bg-curves.png";
import SocialMediaIcons from "../common/SocialMediaIcons";
import CustomButton from "../common/CustomButton";

const HeroSection1 = () => {
  return (
    <section className="hero-common hero-section-home">
      <div className="hero-bg-image mt-3 pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="hero-section-home px-0 pb-4 pb-md-5 pb-md-0">
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
            <div className="media-wrapper-full overflow-hidden">
              <video autoPlay loop muted defaultMuted playsInline onContextMenu="return false;" preload="auto">
                <source src={sampleIntro} type="video/mp4"/>
              </video>
              <SocialMediaIcons customClasses={"justify-content-center position-absolute bottom-0"}/>
            </div>
          </Col>
        </Row>
        {/*<Row className="overlay-row justify-content-end justify-content-lg-center">*/}
        {/*  <Col xs={12} sm={8} md={8} className="">*/}
        {/*    <div className="hero-banner">*/}
        {/*      <svg className="arrow" width="255" height="250" viewBox="0 0 255 210" fill="none"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path*/}
        {/*          d="M34.0421 102.711C34.1037 100.091 36.9867 98.5205 39.2315 99.8834L60.143 112.58C62.7227 114.147 62.1418 118.036 59.2163 118.785L48.7744 121.458C48.1496 121.618 47.5749 121.931 47.1023 122.369L39.2063 129.687C36.9942 131.737 33.3974 130.124 33.4682 127.114L34.0421 102.711Z"*/}
        {/*          fill="#EFEFEF" stroke="#EFEFEF" strokeWidth="0.430255"/>*/}
        {/*        <path*/}
        {/*          d="M226.542 116.173C213.73 135.218 198.492 158.787 160.709 156.535C123.558 154.321 102.051 111.487 130.859 106.852C156.318 102.757 160.544 154.518 118.393 161.999C84.672 167.983 56.0992 136.152 47.1217 120.415"*/}
        {/*          stroke="#EFEFEF" strokeWidth="3.83629" strokeLinecap="round" strokeDasharray="6.39 12.79"/>*/}
        {/*      </svg>*/}
        {/*      <div className="banner-box d-inline-flex p-3 p-md-4">*/}
        {/*        <h3 className="m-auto">*/}
        {/*          We’ ve been Building*/}
        {/*          <br/>Our Experience*/}
        {/*          <br/>since 2000*/}
        {/*        </h3>*/}
        {/*      </div>*/}
        {/*      <SocialMediaIcons customClasses={"justify-content-center"}/>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Container>
    </section>
  );
}

export default HeroSection1;
