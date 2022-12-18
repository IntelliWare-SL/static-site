import {Col, Container, Dropdown, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

const NavbarOptions = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="navbar-options-toggle-btn" className="ps-0">
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.625 2.125H26.375M1.625 10H26.375M1.625 17.875H14" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Container className="navbar-options-content px-4 py-4 py-md-5">
          <Row sm={12} className="justify-content-center px-4 pt-3 pb-4">
            <Col sm={12} md={6} className="navbar-options-col">
              <NavLink to="/about-us">About Us</NavLink><br/>
              <NavLink to="/our-services">Our Services</NavLink><br/>
              <NavLink to="/our-team">Our Team</NavLink><br/>
            </Col>
            <Col sm={12} md={6} className="navbar-options-col">
              <NavLink to="/featured-projects">Featured Projects</NavLink><br/>
              <NavLink to="/book-a-meeting">Book A Meeting</NavLink><br/>
              <NavLink to="/contact-us">Contact Us</NavLink><br/>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarOptions;
