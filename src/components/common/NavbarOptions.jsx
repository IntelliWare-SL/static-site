import {Col, Container, Dropdown, Row} from "react-bootstrap";

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
        <Container className="navbar-options-content px-4 py-5">
          <Row sm={12} className="justify-content-center px-4 pt-3">
            <Col sm={12} md={4} className="navbar-options-col">
              <h2>About Us</h2>
              <h2>Our Services</h2>
              <h2>Team</h2>
            </Col>
            <Col sm={12} md={4} className="navbar-options-col">
              <h2>About Us</h2>
              <h2>Our Services</h2>
              <h2>Team</h2>
            </Col>
            <Col sm={12} md={4} className="navbar-options-col">
              <h2>About Us</h2>
              <h2>Our Services</h2>
              <h2>Team</h2>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarOptions;
