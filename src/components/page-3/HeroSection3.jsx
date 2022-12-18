import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";
import sampleIntro from "../../assets/videos/sample-intro.mp4";

const HeroSection3 = () => {
  return (
    <section className="hero-common hero-section">
      <div className="hero-bg-image pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="hero-section px-4 px-md-0 pb-4 pb-md-5 pb-md-0">
        <Row className="m-0 p-0">
          <Col sm={12} md={6} className="hero-left d-flex my-auto px-2 ps-md-2 pe-md-5">
            <section className="hero-content align-self-center pt-4 pb-4 ps-md-1">
              <h6 className="breadcrumbs">Home / Services</h6>
              <h1 className="text-white hero-title py-3 py-md-2">
                We Work Hard to
                Make You <span>Look
                Good</span>
              </h1>
              <div className="hero-text py-2">
                <p className="pt-3 pb-2 pt-md-4 pb-md-5">
                  Just like reamers, our services come in a variety of shapes and sizes. Contact us to learn more.
                </p>
                {/*<p className=" m-0 pb-5">*/}
                {/*  By specializing in web development, digital marketing, and defining your brand – Reamer Made’s goal is*/}
                {/*  to help bridge the gap between the construction industry and technology. We want to help your company*/}
                {/*  tap into its potential for growth.*/}
                {/*</p>*/}
              </div>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right ps-4 ps-md-5 h-100">
            <div className="mb-3">
              <div className="v-line float-start"/>
              <div className="media-wrapper">
                <video autoPlay loop muted width="100%" height="100%">
                  <source src={sampleIntro} type="video/mp4"/>
                </video>
              </div>
              <div className="h-line"></div>
            </div>
            {/*<p className="hero-text pt-2 pb-0 mb-0">*/}
            {/*  Reamer Made understands the unique needs of theconstruction industry. We know how to reach your target*/}
            {/*  audience and get your message out there, using strategies that are proven to be effective. We are here to*/}
            {/*  help you grow your business and reach your goals.*/}
            {/*</p>*/}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection3;
