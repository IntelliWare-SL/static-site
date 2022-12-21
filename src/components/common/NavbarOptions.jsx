import {Col, Container, Dropdown, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React, {useRef} from "react";

const NavbarOptions = () => {
  const navbarOptionsToggle = useRef(null);
  const handleLinkClick = () => navbarOptionsToggle.current.click();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="navbar-options-toggle-btn" className="ps-0" ref={navbarOptionsToggle}>
        <label htmlFor="check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Container className="navbar-options-content px-4 py-4 py-md-5">
          <Row sm={12} className="justify-content-center px-4 pt-3 pb-4">
            <Col sm={12} md={6} className="navbar-options-col">
              <NavLink to="/about-us" onClick={handleLinkClick}>About Us</NavLink><br/>
              <NavLink to="/our-services" onClick={handleLinkClick}>Our Services</NavLink><br/>
              <NavLink to="/our-team" onClick={handleLinkClick}>Our Team</NavLink><br/>
            </Col>
            <Col sm={12} md={6} className="navbar-options-col">
              <NavLink to="/?scroll=featured-projects" onClick={handleLinkClick}>Featured Projects</NavLink><br/>
              {/*<NavLink to="/book-a-meeting" onClick={handleLinkClick}>Book A Meeting</NavLink><br/>*/}
              <NavLink to="/contact-us" onClick={handleLinkClick}>Contact Us</NavLink><br/>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarOptions;
