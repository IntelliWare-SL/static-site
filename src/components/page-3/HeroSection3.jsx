import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";

const HeroSection3 = () => {
  return (
    <section className="hero-common-2 hero-section-3">
      <div className="hero-bg-image pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="px-0 pt-5 pb-5">
        <Row className="m-0 p-0 pt-5">
          <Col sm={12} md={6} className="hero-left pe-5 h-100">
            <section className="hero-content">
              <h6 className="breadcrumbs">Home / Services</h6>
              <h1 className="text-white hero-title py-2">We Work Hard
                <br/>
                To Make You
                <br/>
                <span>Look Good</span></h1>
              <div className="hero-text pt-3 pb-0">
                <p className="pt-2">
                  Our team of experts understands the industry and will help tell your story that engages your audience
                  and drives results. By creating customized campaigns for your company’s needs, together Reamer Made
                  can help define your brand, create customized proposal templates to win bids, and help recruit new
                  talent through social media.
                  Reamer Made is your trusted construction marketing
                </p>
              </div>

              <div className="arrow-wrapper float-end">
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
                  src="https://img.freepik.com/free-photo/positive-business-partners-meeting-office-building-shaking-hands-with-each-other-side-view-medium-shot-corporate-communication-handshake-concept_74855-7728.jpg?w=2000"
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

export default HeroSection3;
