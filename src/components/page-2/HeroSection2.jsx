import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";
import {Link} from "react-router-dom";

const HeroSection2 = () => {
  return (
    <section className="hero-common hero-section-2">
      <div className="hero-bg-image pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="px-0 pt-5 pb-5">
        <Row className="m-0 p-0 pt-5 h-100">
          <Col sm={12} md={6} className="hero-left pe-5 h-100">
            <section className="hero-content">
              <h6 className="breadcrumbs">Home / About Us</h6>
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
              <Button variant="primary" className="hero-button px-5 py-2 me-2">
                <Link to="/contact-us">Contact Us</Link>
              </Button>
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
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection2;
