import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";
import CustomButton from "../common/CustomButton";

const HeroSection2 = () => {
  return (
    <section className="hero-common hero-section">
      <div className="hero-bg-image">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="hero-section px-0 pt-0 pb-4 pb-md-5">
        <Row className="m-0 p-0 pt-4 pt-md-3 h-100 align-items-center">
          <Col sm={12} md={6} className="hero-left px-4 px-md-2 pe-md-5 h-100">
            <section className="pe-md-0 ps-md-1 hero-content pb-3">
              <h6 className="breadcrumbs">Home / About Us</h6>
              <h1 className="text-white hero-title py-2">We're Not Afraid
                <br/>
                Of <span>A Little Dirt</span></h1>
              <div className="hero-text py-1">
                <p className="py-2">
                  At Reamer Made, we understand the unique needs of the construction industry. Our founder, Allison
                  Murrell, started working in the industry in 2014 alongside her father at their family’s
                  third-generation
                  heavy civil construction company.
                </p>
                <p className="m-0 pb-1 pb-md-5">
                  Allison quickly realized that the construction industry was still
                  very
                  behind when it came to technology and marketing, so she decided to use her knowledge of construction
                  and
                  marketing to help other companies in this industry.
                </p>
              </div>
              <CustomButton text={"Learn More"} link={"/about-us"} customClasses={"btn-lg d-none d-md-inline"}/>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right px-4 px-md-2 h-100 d-flex flex-column-reverse flex-md-column">
            <div className="pt-5 pe-1">
              <div className="ps-2 mb-3 pb-1 pb-md-0">
                <div className="v-line float-start"/>
                <div className="media-wrapper about-us-image">
                  <img
                    src="https://img.freepik.com/free-photo/positive-business-partners-meeting-office-building-shaking-hands-with-each-other-side-view-medium-shot-corporate-communication-handshake-concept_74855-7728.jpg?w=2000"
                    width="100%" height="100%" alt=""/>
                </div>
                <div className="h-line"></div>
              </div>
              <CustomButton text={"Learn More"} link={"/about-us"}
                            customClasses={"mt-4 mt-md-0 btn-lg d-block d-md-none text-center"}/>
            </div>
            <p className="hero-text pt-0 pt-md-1 pb-0 mb-0 text-white hero-image-caption">
              By specializing in web development, digital marketing, and defining your brand – Reamer Made’s goal is
              to help bridge the gap between the construction industry and technology. We want to help your company
              tap into its potential for growth.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection2;
