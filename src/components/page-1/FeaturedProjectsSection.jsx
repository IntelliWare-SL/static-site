import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import PhotoGallery from "../common/PhotoGallery";

const FeaturedProjectsSection = () => {
  return (
    <section className="featured-projects-section pt-2 pt-md-4 pb-2 pb-md-4">
      <Container className="pt-0 pt-md-2 pb-3">
        <Row xs={12} className="justify-content-center text-center mb-0 mb-md-3 py-2">
          <Col xs={12}>
            <h2 className="section-title">Featured Projects</h2>
          </Col>
        </Row>
        <PhotoGallery/>
      </Container>
    </section>
  );
}

export default FeaturedProjectsSection;
