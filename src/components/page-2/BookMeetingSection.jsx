import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const BookMeetingSection = () => {
  return (
    <section className="book-meeting-section pt-1 px-5 pb-3">
      <Container className="py-2 px-5">
        <Row sm={12} className="justify-content-center text-center pt-4 pb-3">
          <Col sm={12}>
            <h2 className="section-title mb-4">Book A Meeting</h2>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-3 my-2 justify-content-center gap-5">
          <Col sm={12} md={10}>
            <Form>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="company-name">
                    <Form.Label>Your Company Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="company-website">
                    <Form.Label>Your Company Website</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"/>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4 mb-2">
                <Col sm={12}>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Your message</Form.Label>
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

export default BookMeetingSection;
