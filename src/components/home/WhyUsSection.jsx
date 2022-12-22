import { Container } from 'react-bootstrap'
import React from 'react'
import BannerOverImage from '../common/BannerOverImage'

const WhyUsSection = () => {
    return (
        <section className="why-us-section bg-white pb-2 px-4 px-md-2 pt-3">
            <Container className="pb-2 pb-md-4 pt-md-3 px-0 px-md-2">
                <BannerOverImage
                    bannerTitle="Why Reamer Made?"
                    bannerContent="A marketing company made from the ground up for businesses in the dirt world. We understand your industry"
                    buttonText="Know More"
                    buttonLink="/about-us"
                    imageUrl="https://www.sircapaints.com/wp-content/uploads/2021/07/exterior2.jpg"
                    altText="3D rendering of a modern house"
                    alignBannerRight={true}
                />
            </Container>
        </section>
    )
}

export default WhyUsSection
