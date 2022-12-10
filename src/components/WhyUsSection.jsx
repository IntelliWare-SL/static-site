import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";

const WhyUsSection = () => {
  return (
    <section className="why-us-section bg-white pb-4 px-0">
      <Container className="pb-2 px-3">
        <Row className="align-items-center">
          <Col sm={12} md={8} className="image bg-black p-0">
            <img src="https://www.sircapaints.com/wp-content/uploads/2021/07/exterior2.jpg" height="100%"
                 alt="3D rendering of a modern house"/>
          </Col>
          <Col sm={12} md={5} className="banner px-0 text-white">
            <div className="banner-content">
              <h1 className="section-title pb-2">Why Reamer <br/>Made?</h1>
              <p className="section-subtitle my-4">At Reamer Made, we understand that construction can be a tough
                business - but it doesn't have to be. We
                are dedicated to helping you tell your story and branding yourself in the industry. </p>
              <Button variant="btn btn-primary py-3 px-4 my-3">Know More</Button>
            </div>
            <div className="line mx-auto me-0"></div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default WhyUsSection;
