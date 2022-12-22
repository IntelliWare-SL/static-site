import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import FeatureCard from "../common/FeatureCard";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section mt-2 pt-2 px-4 px-md-0 pb-1 pb-md-3">
      <Container className="pt-5 pb-4 py-md-5 px-0 px-md-2 px-lg-5">
        <Row sm={12} className="justify-content-center text-center pt-1 pb-4 py-md-4">
          <Col sm={12}>
            <h2 className="section-title mb-4">Why Choose Us?</h2>
            <p className="section-subtitle mt-3 mb-1 mb-md-2 px-4">Because when you look good, we look good.</p>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 pb-lg-4 mt-3 justify-content-start gap-2 gap-lg-5">
          <Col sm={12} md={5} className="px-0">
            <FeatureCard title="Customer Service is Key"
                         content="We work hard to be transparent with our clients and act on feedback"/>
          </Col>
          <Col sm={12} md={5} className="px-0">
            <FeatureCard title="High-Quality Standards"
                         content="Challenge ourselves to exceed client expectations every time."/>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 pt-lg-4 mb-4 justify-content-end gap-2 gap-lg-5">
          <Col sm={12} md={5} className="px-0">
            <FeatureCard title="Committed to Teamwork & Innovation"
                         content="To continue to bring you the best possible experience."/>
          </Col>
          <Col sm={12} md={5} className="px-0">
            <FeatureCard title="Trustworthy"
                         content="We work tirelessly to provide you with quality products and services that you can trust"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;
