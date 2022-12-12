import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ServiceCard from "../common/ServiceCard";

const OurServicesSection = () => {
  return (
    <section className="our-services-section pt-2 px-5 pb-5">
      <Container className="py-5 px-5">
        <Row sm={12} className="justify-content-center text-center pt-5 pb-2">
          <Col sm={12}>
            <h2 className="section-title mb-2">Our Services</h2>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 justify-content-center">
          <ServiceCard cardTitle="Strategy"
                       cardText="The foundation for all that we do.design services are tailored to help you succeed"
                       cardImageUrl="https://img.freepik.com/free-photo/businessmen-businesswomen-meeting-brainstorming-ideas_7861-3065.jpg?w=2000"
                       listItems={["The foundation for all that we do - Digital Strategy", "Content Strategy", "Media Planning", "Consumer & Market Research"]}
          />
          <ServiceCard cardTitle="Media"
                       cardText="A new and unique way to tell your story"
                       cardImageUrl="https://ecija.com/wp-content/uploads/2021/05/austin-distel-tLZhFRLj6nY-unsplash-1.jpg"
                       listItems={["Photography", "Video", "Animation"]}
          />
          <ServiceCard cardTitle="Experience & Design"
                       cardText="Creative branding that engages your audience and drives results."
                       cardImageUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                       listItems={["Website Design", "Mobile App Design", "Branding & Identity", "User Experience", "Content Creation"]}
          />
          <ServiceCard cardTitle="Data, Analytics, Optimization"
                       cardText="Consumer-centric, data-driven insights that go beyond impressions, visits, and clicks"
                       cardImageUrl="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80"
                       listItems={["Advanced Analytics Consulting", "Conversion Rate Optimization", "Site Speed & Performance Optimization", "Marketing Automation"]}
          />
          <ServiceCard cardTitle="Digital Marketing & Promotion"
                       cardText="It’s about standing out from your competition and connecting with quality visitors"
                       cardImageUrl="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                       listItems={["Social Media", "SEO Optimization", "Paid Media Marketing", "Email Campaigns", "Lead Generation Strategies", "Book a Meeting"]}
          />
        </Row>
      </Container>
    </section>
  );
}

export default OurServicesSection;
