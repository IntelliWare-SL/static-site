import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import PhotoGallery from "../common/PhotoGallery";

const FeaturedProjectsSection = () => {
  return (
    <section className="featured-projects-section pt-0 pb-3 pb-md-4 pt-0 mt-0 px-4 px-md-0">
      <Container className="pt-0 pb-3 px-0 mx-0">
        <Row xs={12} className="justify-content-center text-center mb-0 mb-md-3 pt-0 pb-0 px-0 mx-0">
          <Col xs={12} className="pt-0 mt-0">
            <h2 className="section-title pt-3 pt-md-5 mt-5">Featured Projects</h2>
          </Col>
        </Row>
        <PhotoGallery/>
      </Container>
    </section>
  );
}

export default FeaturedProjectsSection;
