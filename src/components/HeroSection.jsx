import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import heroImage from "../assets/images/hero-image.jpeg";
import bgCurves from "../assets/images/bg-curves.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-image mt-2 pt-5">
        <img src={bgCurves} alt="" width="100%"/>
      </div>
      <Container className="hero-section px-0">
        <Row className="m-0 p-0">
          <Col sm={12} md={6} className="hero-left my-auto">
            <section className="hero-content pb-4">
              <h1 className="text-white hero-title py-2">We Create Spaces For A <span>Happy</span> Life.</h1>
              <br/>
              <h5 className="text-white hero-subtitle py-2 fw-normal">
                A marketing firm that's truly made from the ground up.
                <br/>
                We know the construction industry inside and out,
                <br/>
                and we're here to help your business grow.
              </h5>
              <br/>
              <div className="hero-actions d-inline-flex">
                <Button variant="primary" className="hero-button px-5 py-2 me-2">Contact Us</Button>
                <Button className="play-button">
                  <div className="play-button-icon ms-3">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21.0001 0C9.4199 0 0 9.42081 0 21C0 32.5793 9.4199 42 21.0001 42C32.5801 42 42.0001 32.5793 42.0001 21C42.0001 9.42081 32.5801 0 21.0001 0ZM29.3485 21.7358L17.0985 29.6108C16.9549 29.7039 16.7891 29.75 16.625 29.75C16.4815 29.75 16.3362 29.7141 16.2064 29.6432C15.9244 29.4894 15.75 29.1955 15.75 28.875V13.125C15.75 12.8046 15.9244 12.5106 16.2064 12.3568C16.4832 12.2047 16.8302 12.2141 17.0985 12.3893L29.3485 20.2642C29.598 20.4249 29.7501 20.7027 29.7501 21C29.7501 21.2973 29.598 21.575 29.3485 21.7358Z"/>
                    </svg>
                  </div>
                </Button>
              </div>
            </section>
          </Col>
          <Col sm={12} md={6} className="hero-right px-0 position-absolute">
            <div className="image-wrapper">
              <img src={heroImage} alt="Architectural house" className="m-auto"/>
            </div>
          </Col>
        </Row>
        <Row className="overlay-row">
          <Col sm={12} className="">
            <div className="hero-banner">
              <svg width="255" height="250" viewBox="0 0 255 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.0421 102.711C34.1037 100.091 36.9867 98.5205 39.2315 99.8834L60.143 112.58C62.7227 114.147 62.1418 118.036 59.2163 118.785L48.7744 121.458C48.1496 121.618 47.5749 121.931 47.1023 122.369L39.2063 129.687C36.9942 131.737 33.3974 130.124 33.4682 127.114L34.0421 102.711Z"
                  fill="#EFEFEF" stroke="#EFEFEF" strokeWidth="0.430255"/>
                <path
                  d="M226.542 116.173C213.73 135.218 198.492 158.787 160.709 156.535C123.558 154.321 102.051 111.487 130.859 106.852C156.318 102.757 160.544 154.518 118.393 161.999C84.672 167.983 56.0992 136.152 47.1217 120.415"
                  stroke="#EFEFEF" strokeWidth="3.83629" strokeLinecap="round" strokeDasharray="6.39 12.79"/>
              </svg>
              <div className="banner-box d-inline-flex">
                <h3 className="m-auto">
                  We’ ve been Building
                  <br/>Our Experience
                  <br/>since 2000
                </h3>
              </div>
              <div className="icon-container d-flex justify-content-evenly align-items-center pb-1 px-1">
                <a href="https://facebook.com">
                  <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.40592 12.2185C3.32864 12.2185 1.62861 12.2185 0.855862 12.2185C0.443732 12.2185 0.314941 12.064 0.314941 11.6776C0.314941 10.6473 0.314941 9.59122 0.314941 8.56089C0.314941 8.14876 0.46949 8.01997 0.855862 8.01997H3.40592C3.40592 7.9427 3.40592 6.44872 3.40592 5.75325C3.40592 4.72293 3.58623 3.74412 4.10139 2.84258C4.64231 1.91529 5.41505 1.29709 6.39386 0.936479C7.03782 0.704656 7.68177 0.601624 8.37724 0.601624H10.9015C11.2622 0.601624 11.4167 0.756172 11.4167 1.11679V4.05322C11.4167 4.41383 11.2622 4.56838 10.9015 4.56838C10.2061 4.56838 9.5106 4.56838 8.81513 4.59414C8.11966 4.59414 7.75904 4.92899 7.75904 5.65022C7.73329 6.42297 7.75904 7.16995 7.75904 7.96845H10.747C11.1591 7.96845 11.3137 8.123 11.3137 8.53513V11.6519C11.3137 12.064 11.1849 12.1928 10.747 12.1928C9.8197 12.1928 7.83632 12.1928 7.75904 12.1928V20.5899C7.75904 21.0278 7.63025 21.1824 7.16661 21.1824C6.08477 21.1824 5.02868 21.1824 3.94684 21.1824C3.56047 21.1824 3.40592 21.0278 3.40592 20.6415C3.40592 17.9369 3.40592 12.2958 3.40592 12.2185Z"
                      fill="white"/>
                  </svg>
                </a>
                <a href="https://twitter.com">
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.7779 2.49107C20.0052 2.82592 19.2067 3.05775 18.3566 3.16078C19.2324 2.64562 19.9021 1.82136 20.2112 0.816788C19.387 1.30619 18.4854 1.64105 17.5324 1.84711C16.7596 1.02285 15.652 0.50769 14.4414 0.50769C12.0974 0.50769 10.2171 2.41379 10.2171 4.73203C10.2171 5.06688 10.2428 5.37598 10.3201 5.68508C6.81699 5.53053 3.72601 3.83049 1.6396 1.28043C0.145629 3.95928 1.81991 6.17448 2.92751 6.92147C2.2578 6.92147 1.58808 6.7154 1.02141 6.40631C1.02141 8.49271 2.48962 10.2185 4.39572 10.6049C3.98359 10.7337 3.0563 10.8109 2.48962 10.6822C3.03054 12.3564 4.60179 13.5928 6.43062 13.6186C4.98816 14.7519 2.87599 15.6535 0.171387 15.3701C2.05173 16.5808 4.26693 17.2762 6.66244 17.2762C14.4414 17.2762 18.6657 10.8367 18.6657 5.27295C18.6657 5.09264 18.6657 4.91233 18.64 4.73203C19.5158 4.08807 20.237 3.34109 20.7779 2.49107Z"
                      fill="white"/>
                  </svg>

                </a>
                <a href="https://linkedin.com">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_50_91)">
                      <path
                        d="M25.9936 25.7582V25.7571H26.0001V16.3103C26.0001 11.6888 25.0051 8.12885 19.6024 8.12885C17.0051 8.12885 15.2621 9.55413 14.5506 10.9054H14.4754V8.56029H9.35278V25.7571H14.6869V17.2419C14.6869 14.9998 15.1119 12.8319 17.8884 12.8319C20.6241 12.8319 20.6649 15.3905 20.6649 17.3857V25.7582H25.9936Z"
                        fill="white"/>
                      <path d="M0.666992 8.56134H6.00751V25.7581H0.666992V8.56134Z" fill="white"/>
                      <path
                        d="M3.33482 3.05176e-05C1.62727 3.05176e-05 0.241699 1.3856 0.241699 3.09315C0.241699 4.8007 1.62727 6.21526 3.33482 6.21526C5.04237 6.21526 6.42795 4.8007 6.42795 3.09315C6.42687 1.3856 5.0413 3.05176e-05 3.33482 3.05176e-05V3.05176e-05Z"
                        fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_50_91">
                        <rect width="25.7581" height="25.7581" fill="white"
                              transform="translate(0.241699 3.05176e-05)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
