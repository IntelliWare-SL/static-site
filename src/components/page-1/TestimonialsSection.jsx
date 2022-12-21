import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import SwiperCore, {EffectCoverflow, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const TestimonialCard = ({content, author}) => {
  return (
    <div className="testimonial-card pt-4 pb-3 pb-md-4 mb-0 d-flex justify-content-center px-4 px-md-5">
      <Row className="py-4 testimonial-card-content text-center px-0 px-md-5 justify-content-around">
        <Col className="px-0 quotes">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.74941 25.5999C2.1754 25.5999 0.899414 24.3239 0.899414 22.7499V8.49986C0.899414 4.30249 4.30205 0.899855 8.49941 0.899855V2.79985C5.35139 2.79985 2.79941 5.35183 2.79941 8.49986V14.1999H9.44941C11.0234 14.1999 12.2994 15.4758 12.2994 17.0499V22.7499C12.2994 24.3239 11.0234 25.5999 9.44941 25.5999H3.74941Z"
              fill="#50504F"/>
            <path
              d="M17.0494 25.5999C15.4754 25.5999 14.1994 24.3239 14.1994 22.7499V8.49986C14.1994 4.30249 17.602 0.899855 21.7994 0.899855V2.79985C18.6514 2.79985 16.0994 5.35183 16.0994 8.49986V14.1999H22.7494C24.3234 14.1999 25.5994 15.4758 25.5994 17.0499V22.7499C25.5994 24.3239 24.3234 25.5999 22.7494 25.5999H17.0494Z"
              fill="#50504F"/>
          </svg>
        </Col>
        <Col xs={10} className="px-0">
          <p className="mb-3 mb-md-2 px-0">
            {content}
          </p>
          <p className="testimonial-card-author py-3 mb-4 mb-md-3">
            {author}
          </p>
        </Col>
        <Col className="px-0 quotes">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.2496 25.5999C23.8236 25.5999 25.0996 24.3239 25.0996 22.7499V8.49986C25.0996 4.30249 21.697 0.899855 17.4996 0.899855V2.79985C20.6476 2.79985 23.1996 5.35183 23.1996 8.49986V14.1999H16.5496C14.9756 14.1999 13.6996 15.4758 13.6996 17.0499V22.7499C13.6996 24.3239 14.9756 25.5999 16.5496 25.5999H22.2496Z"
              fill="#50504F"/>
            <path
              d="M8.94961 25.5999C10.5236 25.5999 11.7996 24.3239 11.7996 22.7499V8.49986C11.7996 4.30249 8.39697 0.899855 4.19961 0.899855V2.79985C7.34763 2.79985 9.89961 5.35183 9.89961 8.49986V14.1999H3.24961C1.6756 14.1999 0.399611 15.4758 0.399611 17.0499V22.7499C0.399611 24.3239 1.6756 25.5999 3.24961 25.5999H8.94961Z"
              fill="#50504F"/>
          </svg>
        </Col>
      </Row>
    </div>
  );
}

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section pt-2 pt-md-4 pb-3 pb-md-4 mb-2 mb-md-5">
      <Container className="pt-5 pb-5">
        <Row sm={12} className="justify-content-center text-center mb-0 mb-md-2 pt-3  ">
          <Col sm={12}>
            <h2 className="section-title">Testimonials</h2>
          </Col>
        </Row>
        <Row sm={12} className="justify-content-between align-items-center">
          <Col sm={12}>
            <div>
              <Swiper
                effect={"slide"}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={1}
                pagination={true}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <TestimonialCard content="They know what they are doing, they do their best, and they are all super
            friendly, reliable, communicative people." author="Ntini Sri-- Spark Techno"/>
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard content="They know what they are doing, they do their best, and they are all super
            friendly, reliable, communicative people." author="Ntini Sri-- Spark Techno"/>
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard content="They know what they are doing, they do their best, and they are all super
            friendly, reliable, communicative people." author="Ntini Sri-- Spark Techno"/>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
