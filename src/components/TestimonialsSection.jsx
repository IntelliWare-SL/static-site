import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import userAvatar from "../assets/images/user-avatar.png";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section pt-3 pb-3">
      <Container className="py-4">
        <Row sm={12} className="justify-content-center text-center mb-2 pt-4">
          <Col sm={12}>
            <h2 className="section-title">Testimonials</h2>
          </Col>
        </Row>
        <Row sm={12} className="justify-content-between align-items-center">
          <Col sm={12} md={7}>
            <div className="testimonial-container">
              <svg width="838" height="438" viewBox="0 0 838 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_14_8)">
                  <path
                    d="M69 66C69 55.5066 77.5066 47 88 47H750C760.493 47 769 55.5066 769 66V306.571C769 317.065 760.493 325.571 750 325.571H106.021C102.172 325.571 98.4137 326.741 95.2437 328.924L69 347V66Z"
                    fill="white"/>
                </g>
                <path
                  d="M114.333 114.867C112.566 114.867 111.133 113.434 111.133 111.667V95.6667C111.133 90.9539 114.954 87.1334 119.667 87.1334V89.2667C116.132 89.2667 113.267 92.1321 113.267 95.6667V102.067H120.733C122.501 102.067 123.933 103.499 123.933 105.267V111.667C123.933 113.434 122.501 114.867 120.733 114.867H114.333Z"
                  fill="#ED882D"/>
                <path
                  d="M129.267 114.867C127.499 114.867 126.067 113.434 126.067 111.667V95.6667C126.067 90.9539 129.887 87.1334 134.6 87.1334V89.2667C131.065 89.2667 128.2 92.1321 128.2 95.6667V102.067H135.667C137.434 102.067 138.867 103.499 138.867 105.267V111.667C138.867 113.434 137.434 114.867 135.667 114.867H129.267Z"
                  fill="#ED882D"/>
                <defs>
                  <filter id="filter0_d_14_8" x="0" y="0" width="838" height="438" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="22"/>
                    <feGaussianBlur stdDeviation="34.5"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.562559 0 0 0 0 0.562559 0 0 0 0 0.562559 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_8"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_8" result="shape"/>
                  </filter>
                </defs>
              </svg>
              <div className="bubble-content position-absolute">
                <Row sm={12}>
                  <Col sm={12}>
                    <p className="testimonial-text">Elementum quam auctor est et congue. Vitae placerat egestas nisl
                      ultricies cursus. Dictumst proin mattis elit, tincidunt nunc aliquet sem. Parturient magna
                      tincidunt euismod etiam venenatis.
                    </p>
                  </Col>
                </Row>

                <Row sm={12} className="my-4 testimonial-author">
                  <Col sm={2}>
                    <img className="user-avatar" src={userAvatar} alt=""/>
                  </Col>
                  <Col sm={10}>
                    <h3>Zuren Joe</h3>
                    <h5>Product Manager</h5>
                  </Col>
                </Row>


              </div>
            </div>
          </Col>
          <Col sm={12} md={5} className="pb-5">
            <h3 className="section-subtitle py-3">
              What our clients <br/>say
            </h3>
            <p className="my-4">Cras aliquam ultrices ipsum mi. Dis vitae mattis cursus in. Bibendum urna, sem lobortis
              ac mattis ut hac
              sit. At ut nibh amet, phasellus nibh facilisi viverra ut. Tellus a est eget fringilla.</p>
          </Col>
        </Row>
        <Row sm={12}>
          <Col sm={12} className="circles text-center">
            <div className="circle selected"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
