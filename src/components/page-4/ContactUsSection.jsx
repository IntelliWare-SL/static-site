import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import ContactDetailsField from "../common/ContactDetailsField";
import {BsFillEnvelopeFill, BsFillTelephoneFill, BsGeoAltFill} from "react-icons/bs";

const ContactUsSection = () => {
  return (
    <section className="contact-us-section-2 pt-1 pt-md-2 pb-2 px-4">
      <Container className="py-md-5">
        <Row sm={12} className="justify-content-between text-center pt-4 pb-2 flex-column-reverse flex-md-row">
          <Col md={7} lg={8} className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.973144008044!2d-73.9897804!3d40.7186077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598725afe255%3A0xff8cc6165b925ad0!2s100%20Orchard%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2slk!4v1670878555764!5m2!1sen!2slk"
              width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col md={5} lg={3} className="px-2 pt-2 pt-md-4 pb-3 pb-md-0">
            <h3 className="section-title pt-3 pt-lg-0 pb-3 mb-4">Contact Us</h3>
            <ContactDetailsField type="phone" icon={
              <BsFillTelephoneFill/>
            } line1="+1-8058476323" line2="+1-8795847362"/>
            <ContactDetailsField icon={
              <BsGeoAltFill/>
            } line1="100 Orchard St," line2="New York, NY 10002, USA"/>
            <ContactDetailsField type="email" icon={
              <BsFillEnvelopeFill/>
            } line1="ready@gmail.com" line2="read24@gmail.com"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUsSection;
