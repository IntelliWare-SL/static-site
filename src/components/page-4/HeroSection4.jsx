import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bgCurves from "../../assets/images/bg-curves.png";
import CustomButton from "../common/CustomButton";

const HeroSection4 = () => {
  return (
    <section className="hero-common hero-section">
      <div className="hero-bg-image pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="hero-section px-4 px-md-0 pb-4 pb-md-5 pb-md-0">
        <Row className="m-0 p-0">
          <Col sm={12} md={6} className="hero-left d-flex my-auto px-2 ps-md-2 pe-md-5">
            <section className="hero-content align-self-center pt-4 pb-4 ps-md-1">
              <h6 className="breadcrumbs">Home / Contact Us</h6>
              <h1 className="text-white hero-title py-2 py-md-1">
                Ready to get your <span>project</span> off the ground?
              </h1>
              <div className="hero-text pt-2">
                <p className="pt-2 pb-1 py-md-2">
                  Just like reamers, our services come in a variety of shapes and sizes. Contact us to learn more.
                </p>
              </div>
              <div className="hero-actions d-inline-flex">
                <CustomButton link={'/about-us'} text={'Learn More'}/>
              </div>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right ps-5 h-100">
            <div className="mb-3">
              <div className="v-line float-start"/>
              <div className="media-wrapper">
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
