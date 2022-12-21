import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import PhotoGallery from "../common/PhotoGallery";

const OtherServicesSection = () => {
  return (
    <section className="other-services-section pt-2 pt-md-3 pb-2 pb-md-4 px-4 px-md-0">
      <Container className="pt-0 pt-md-2 pb-4 px-0 mx-0">
        <Row xs={12} className="justify-content-center text-center mb-0 mb-md-2 py-2 px-0 mx-0">
          <Col xs={12} md={8} className="mb-2">
            <h2 className="section-title">Our Services Are Not Limited to the Construction Industry</h2>
          </Col>
          <Col xs={12} md={10} className="pt-3 pb-2">
            Reamer Made's experience doesn't stop at the construction industry. We work with a variety of companies and
            provide comprehensive solutions that are customized to fit your business. We know how to reach your target
            audience and get your message out there, using strategies that are proven to be effective to help your
            business grow.
          </Col>
        </Row>
        <PhotoGallery/>
      </Container>
    </section>
  );
}

export default OtherServicesSection;
