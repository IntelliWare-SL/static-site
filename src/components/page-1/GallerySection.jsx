import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Zoom} from 'react-awesome-reveal';

const GallerySection = () => {
  return (
    <section className="gallery-section bg-white px-4 px-md-0 pb-2 pb-md-3">
      <Container className="py-4">
        <Row sm={12} className="justify-content-center text-center mb-3">
          <Col sm={12}>
            <h2 className="section-title">Made From The Ground Up</h2>
          </Col>
        </Row>
        <Row className="gallery-photos pt-4 pb-3">

            <Col xs={3} className="px-1 px-sm-2 px-md-3 ps-0">
              <Zoom>
              <div className="h-line mx-auto ms-0"></div>
              <div className="window">
                <img
                  src="https://img.freepik.com/premium-photo/construction-workers-fabricating-steel-reinforcement-bar-construction-site_33835-197.jpg?w=2000"
                  alt="gallery" width="100%" height="100%"/>
              </div>
              </Zoom>
            </Col>


            <Col xs={6} className="px-1 px-sm-2 px-md-3">
              <Zoom>
              <div className="window">
                <img
                    src="https://img.freepik.com/premium-photo/3d-rendering-large-modern-contemporary-house-wood-concrete_190619-1484.jpg?w=2000"
                    alt="gallery" width="100%" height="100%"/>
              </div>
              <div className="h-line mx-auto"></div>
              </Zoom>
            </Col>


            <Col xs={3} className="px-1 px-sm-2 px-md-3 pe-0">
              <Zoom>
              <div className="h-line mx-auto me-0"></div>
              <div className="window">
                <img
                    src="https://img.freepik.com/premium-photo/landlord-unlocks-house-key-new-home-real-estate-agents-sales-agents_112699-358.jpg?w=2000"
                    alt="gallery" width="100%" height="100%"/>
              </div>
              </Zoom>
            </Col>

        </Row>
      </Container>
    </section>
  )
}

export default GallerySection;
