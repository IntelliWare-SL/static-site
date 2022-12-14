import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import TeamMemberCard from "../common/TeamMemberCard";

const TeamMembersSection = () => {
  return (
    <section className="team-members-section pt-1 px-5 pb-3">
      <Container className="pt-4 pb-5 px-5">
        <Row sm={12} className="justify-content-center text-center pt-4 pb-4">
          <Col sm={12}>
            <h2 className="section-title mb-2">Meet Our Team<br/>Members</h2>
          </Col>
        </Row>
        <Row sm={12} className="card-wrapper py-2 my-3 justify-content-between">
          <Col sm={6} md={3}>
            <TeamMemberCard name="Allison Murrell" role="President Manager"
                            imgUrl="https://images.unsplash.com/photo-1587398099807-ff052ff03b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
          </Col>
          <Col sm={6} md={3}>
            <TeamMemberCard name="Callie Costello" role="Marketing Manager"
                            imgUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXN8ZW58MHx8MHx8&w=1000&q=80"/>
          </Col>
          <Col sm={6} md={3}>
            <TeamMemberCard name="Amy Sonnicksen" role="Creative Director"
                            imgUrl="https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=979&q=80"/>
          </Col>
          <Col sm={6} md={3}>
            <TeamMemberCard name="Reamer" role="Company Mascot"
                            imgUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeamMembersSection;
