import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-3">
      <Container className="my-1">
        {/*<Navbar.Toggle />*/}
        <Button id="btn-navbar-options-toggle">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.625 2.125H26.375M1.625 10H26.375M1.625 17.875H14" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Button>
        <Navbar.Brand href="#home" className="mx-4">
          <svg width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.1919 26.753V19.5163L30.7197 16.9958V26.753H33.1919Z" fill="white"/>
            <path d="M20.0077 35.6837L3.49498 19.1813L19.1052 3.55973L35.1142 19.5564L36.8617 21.3039L38.6092 19.5564L42.206 15.9587V26.7499H44.6781V12.5871H42.2543L36.9224 17.8717L20.8527 1.81225L19.1031 0.0647583L17.3577 1.81225L1.74646 17.4338L0 19.1813L1.74749 20.9287L18.2623 37.4333L20.0098 39.1807L21.7573 37.4312L27.6062 31.5792L25.8567 29.8317L20.0077 35.6837Z" fill="white"/>
            <path d="M13.9254 26.7355H16.4253V20.276V16.9958H13.9254V26.7355Z" fill="white"/>
            <path d="M55.2526 17.443L39.5467 1.74746L37.7992 -3.05176e-05L36.0518 1.74951L29.5295 8.27484L31.277 10.0223L37.7992 3.49494L53.5051 19.1905L37.0283 35.6775L36.3416 35.0032L23.548 22.0317L23.3218 21.8209L24.0085 20.9523L24.0188 20.9308C25.5339 19.3734 26.0777 16.9825 24.9717 15.0397C24.8925 14.8999 24.8062 14.7611 24.7095 14.6275C23.8111 13.5286 22.8819 12.9643 21.9351 12.6857C21.7388 12.6281 21.5342 12.6014 21.3297 12.6014H13.9244V15.0499H16.4254L21.0419 15.0921H21.0974C21.6545 15.1466 22.1664 15.4097 22.5457 15.7942C22.6711 15.9206 22.7822 16.0614 22.8747 16.2115C23.3403 16.9598 23.3732 17.9569 22.5776 18.8163C21.598 19.9851 19.1936 19.5256 18.2531 19.6201C18.2531 19.6201 18.0321 19.8596 17.9354 19.9624C17.9097 19.9912 17.8912 20.0097 17.8912 20.0097L19.8207 22.1098H19.8166L36.9224 39.2064L38.7059 37.4969L55.2526 20.9369L57 19.1894L55.2526 17.443ZM23.6991 14.8187H23.6888C23.6867 14.8115 23.6837 14.8032 23.6785 14.7971C23.6878 14.8043 23.6929 14.8104 23.6991 14.8187Z" fill="white"/>
            <path d="M23.7003 14.8201C23.6927 14.8113 23.6872 14.8037 23.6785 14.7971C23.6839 14.8048 23.6872 14.8135 23.6894 14.8201H23.7003Z" fill="white"/>
          </svg>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="outline-secondary" className="border-white text-white cta-btn">Contact Us</Button>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
