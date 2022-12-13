import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";
import followersCard from "../../assets/images/followers-card.png";
import {Link} from "react-router-dom";

const HeroSection4 = () => {
  return (
    <section className="hero-common-2 hero-section-4">
      <div className="hero-bg-image pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="px-0 pt-5 pb-5">
        <Row className="m-0 p-0 pt-5">
          <Col sm={12} md={6} className="hero-left pe-3 h-100">
            <section className="hero-content">
              <h6 className="breadcrumbs">Home / Contact Us</h6>
              <h1 className="text-white hero-title py-2">Ready to get your
                <br/>
                <span>project</span> off the
                <br/>
                ground?</h1>
              <Row className="hero-text pt-3 pb-4">
                <Col sm={12} md={8}>
                  <p className="pt-1 pb-2">
                    Just like reamers, our services come in a variety of shapes and sizes. Contact us to learn more.
                  </p>
                </Col>
                <Col sm={12} md={4} className="ps-5">
                  <img src={followersCard} width="100%" alt="" className="followers-card"/>
                </Col>
              </Row>
              <Button variant="primary" className="hero-button px-5 py-2 me-2">
                <Link to="/about-us">Learn More</Link>
              </Button>
              <div className="arrow-wrapper float-end pe-5">
                <svg width="168" height="175" viewBox="0 0 168 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M38.4503 65.931L33.4169 65.5157C32.5128 65.4411 31.6043 65.5938 30.7741 65.9597L26.1528 67.9971C24.9855 68.5117 23.7741 67.3686 24.22 66.1734L28.8278 53.8251C29.2159 52.7851 30.5843 52.5552 31.2909 53.4113L39.681 63.5759C40.4931 64.5597 39.7217 66.0359 38.4503 65.931Z"
                    fill="#EFEFEF" stroke="#EFEFEF" strokeWidth="4"/>
                  <path
                    d="M150.541 104.185C137.826 113.778 122.493 125.789 98.2862 115.741C74.4836 105.861 70.1577 72.8732 90.0604 76.3656C107.649 79.452 98.6373 114.38 69.3575 109.729C45.9336 106.008 34.4815 78.6371 32.1883 66.2728"
                    stroke="#EFEFEF" strokeWidth="4" strokeLinecap="round" strokeDasharray="6.39 12.79"/>
                </svg>
              </div>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right ps-5 h-100">
            <div className="mb-3">
              <div className="v-line float-start"/>
              <div className="image-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/successful-business-man-signing-documents-modern-office_158595-5381.jpg?w=2000&t=st=1670876754~exp=1670877354~hmac=7b2ba79bb1f491dea1777a8e1e006e849207a9503ff227191cf87ae5f097286f"
                  width="100%" height="100%" alt=""/>
              </div>
              <div className="h-line"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection4;