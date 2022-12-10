import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const GallerySection = () => {
  return (
    <section className="gallery-section bg-white pb-5">
      <Container className="py-4">
        <Row sm={12} className="justify-content-center text-center mb-3">
          <Col sm={12}>
            <h2 className="section-title">Made From The Ground Up</h2>
          </Col>
        </Row>
        <Row className="gallery-photos py-4">
          <Col sm={6} md={3}>
            <div className="line mx-auto ms-0"></div>
            <div className="window">
              <img
                src="https://img.freepik.com/premium-photo/construction-workers-fabricating-steel-reinforcement-bar-construction-site_33835-197.jpg?w=2000"
                alt="gallery" width="100%" height="100%"/>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="window">
              <img
                src="https://img.freepik.com/premium-photo/3d-rendering-large-modern-contemporary-house-wood-concrete_190619-1484.jpg?w=2000"
                alt="gallery" width="100%" height="100%"/>
            </div>
            <div className="line mx-auto"></div>
          </Col>
          <Col sm={6} md={3}>
            <div className="line mx-auto me-0"></div>
            <div className="window">
              <img
                src="https://img.freepik.com/premium-photo/landlord-unlocks-house-key-new-home-real-estate-agents-sales-agents_112699-358.jpg?w=2000"
                alt="gallery" width="100%" height="100%"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GallerySection;
