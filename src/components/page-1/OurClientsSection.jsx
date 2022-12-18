import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import CustomButton from "../common/CustomButton";
import ClientsMap from "../../../src/assets/images/clients-map.png";

const OurClientsSection = () => {
  return (
    <section className="clients-section">
      <Container className="pt-4 pb-4">
        <Row className="flex-column-reverse flex-md-row">
          <Col xs={12} md={6} xxl={6} className="flex px-2 px-md-3 pe-md-4">
            <img src={ClientsMap}
                 className="clients-map px-2 px-md-0 py-1 my-2 pt-sm-3 mt-sm-3 pt-md-5 mt-md-5 pt-lg-2 mt-lg-2 pt-xl-3"
                 alt="Map of our clients" width="100%"/>
          </Col>
          <Col xs={12} md={6} xxl={6}
               className="d-flex flex-column px-3 ps-md-4 justify-content-center pb-3">
            <h2 className="mt-2 mb-1 section-title">Our Clients</h2>
            <p className="section-subtitle my-2 my-md-3 py-2">
              Reamer Made's experience doesn't stop at the construction industry. We work with a variety of companies
              and provide comprehensive solutions that are customized to fit your business. We know how to reach your
              target audience and get your message out there, using strategies that are proven to be effective to help
              your business grow.
            </p>
            <CustomButton link={""} text={"Explore More"} customClasses={"me-auto mb-1"}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurClientsSection;
