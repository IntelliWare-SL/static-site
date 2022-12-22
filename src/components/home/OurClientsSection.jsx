import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import CustomButton from '../common/CustomButton'
import ClientsMap from '../../../src/assets/images/clients-map.png'
import { Fade } from 'react-awesome-reveal'

const OurClientsSection = () => {
    return (
        <section className="clients-section px-4 px-md-0">
            <Container className="pt-4 pb-4 px-1 px-md-0">
                <Row className="flex-column-reverse flex-md-row px-2 px-md-0">
                    <Col xs={12} md={6} xxl={6} className="flex px-0 pe-md-4">
                        <Fade duration={3000}>
                            <img
                                src={ClientsMap}
                                className="clients-map px-0 px-md-2 py-1 my-2 pt-sm-3 mt-sm-3 pt-md-5 mt-md-5 pt-lg-2 mt-lg-2 pt-xl-3"
                                alt="Map of our clients"
                                width="100%"
                            />
                        </Fade>
                    </Col>

                    <Col
                        xs={12}
                        md={6}
                        xxl={6}
                        className="d-flex flex-column px-0 ps-md-4 justify-content-center pb-4"
                    >
                        <h2 className="mt-2 mb-1 section-title">Our Clients</h2>
                        <p className="section-subtitle my-2 my-md-3 py-2">
                            Reamer Made's experience doesn't stop at the
                            construction industry. We work with a variety of
                            companies and provide comprehensive solutions that
                            are customized to fit your business. We know how to
                            reach your target audience and get your message out
                            there, using strategies that are proven to be
                            effective to help your business grow.
                        </p>
                        <CustomButton
                            link={''}
                            text={'Explore More'}
                            customClasses={'me-auto mb-1'}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurClientsSection
