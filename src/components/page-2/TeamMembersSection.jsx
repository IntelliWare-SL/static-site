import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import TeamMemberCard from "../common/TeamMemberCard";

const TeamMembersSection = () => {
  return (
    <section className="team-members-section px-3 px-md-5 pt-3 pb-2 mb-0 mb-md-2">
      <Container className="pt-0 pt-md-2 pb-2 pb-md-5 px-0 mx-0">
        <Row sm={12} className="justify-content-center text-center pt-0 pb-4">
          <Col sm={12}>
            <h2 className="section-title pb-2 mb-3">Meet Our Team</h2>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 my-3 justify-content-between">
          <Col xs={6} md={6} lg={3} className="pb-2 pb-md-3 mb-4 mb-md-5">
            <TeamMemberCard name="Allison Murrell" role="President Manager"
                            imgUrl="https://images.unsplash.com/photo-1587398099807-ff052ff03b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
          </Col>
          <Col xs={6} md={6} lg={3} className="pt-2 pt-md-3 mt-4 mt-md-5">
            <TeamMemberCard name="Callie Costello" role="Marketing Manager"
                            imgUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXN8ZW58MHx8MHx8&w=1000&q=80"/>
          </Col>
          <Col xs={6} md={6} lg={3} className="pb-4 pb-md-4 mb-4 mb-md-5">
            <TeamMemberCard name="Amy Sonnicksen" role="Creative Director"
                            imgUrl="https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=979&q=80"/>
          </Col>
          <Col xs={6} md={6} lg={3} className="pt-1 pt-md-2 mt-4 mt-md-5">
            <TeamMemberCard name="Reamer" role="Company Mascot"
                            imgUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeamMembersSection;
