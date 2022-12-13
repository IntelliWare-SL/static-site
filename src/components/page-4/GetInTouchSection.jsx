import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const GetInTouchSection = () => {
  return (
    <section className="get-in-touch-section pt-1 px-5 pb-3">
      <Container className="py-2 px-5">
        <Row sm={12} className="justify-content-center text-center pt-4 pb-4">
          <Col sm={12}>
            <h2 className="section-title mb-4">Get in touch</h2>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-3 my-3 justify-content-center gap-5">
          <Col sm={12} md={10}>
            <Form>
              <Row className="mb-2">
                <Col sm={12}>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>What Can We Help You With?</Form.Label>
                    <Form.Select size="lg" multiple={true}>
                      <option value=""></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="first-name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="last-name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="email-address">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="phone-no">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="job-title">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="company-name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Label>Company Size</Form.Label>
                      <Form.Select>
                        <option value=""></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>How did you hear about Reamer Made?</Form.Label>
                    <Form.Select>
                      <option value=""></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4 mb-2">
                <Col sm={12}>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Tell Us About Your Project</Form.Label>
                    <Form.Control as="textarea" rows={8}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center mb-1">
                <Col sm={12} md={6}>
                  <Button variant="primary" className="mt-3 mb-3 w-75">Book Now</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GetInTouchSection;
