import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import FeatureCard from "../common/FeatureCard";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section mt-2 pt-4 px-5 pb-3">
      <Container className="py-5 px-5">
        <Row sm={12} className="justify-content-center text-center pt-4 pb-4">
          <Col sm={12}>
            <h2 className="section-title mb-4">Why Choose Us?</h2>
            <p className="section-subtitle mt-3 mb-2">Because when you look good, we look good.</p>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 my-3 justify-content-start gap-5">
          <Col sm={12} md={5}>
            <FeatureCard title="Customer Service is Key"
                         content="We work hard to be transparent with our clients and act on feedback"/>
          </Col>
          <Col sm={12} md={5}>
            <FeatureCard title="High-Quality Standards"
                         content="Challenge ourselves to exceed client expectations every time."/>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 my-3 justify-content-end gap-5">
          <Col sm={12} md={5}>
            <FeatureCard title="Committed to Teamwork & Innovation"
                         content="To continue to bring you the best possible experience."/>
          </Col>
          <Col sm={12} md={5}>
            <FeatureCard title="Trustworthy"
                         content="We work tirelessly to provide you with quality products and services that you can trust"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;
