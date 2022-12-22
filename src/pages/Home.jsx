import HeroSection1 from '../components/home/HeroSection1'
import WhatWeDoSection from '../components/home/WhatWeDoSection'
import ServicesSection from '../components/home/OurServicesSection'
import GallerySection from '../components/home/GallerySection'
import WhyUsSection from '../components/home/WhyUsSection'
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection'
import OurClientsSection from '../components/home/OurClientsSection'
import ContactUsSection from '../components/home/ContactUsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [searchParams] = useSearchParams()
    const RefFeaturedProjects = useRef(null)

    const scrollToFeatured = () => {
        if (
            searchParams.get('scroll') === 'featured-projects' &&
            RefFeaturedProjects?.current
        ) {
            RefFeaturedProjects.current.scrollIntoView()
        } else {
            window.scrollTo(0, 0)
        }
    }

    useEffect(() => {
        scrollToFeatured()
    }, [RefFeaturedProjects?.current])

    return (
        <>
            <HeroSection1 />
            <WhatWeDoSection />
            <GallerySection />
            <ServicesSection />
            <WhyUsSection />
            <div ref={RefFeaturedProjects}>
                <FeaturedProjectsSection ref={RefFeaturedProjects} />
            </div>
            <OurClientsSection />
            <TestimonialsSection />
            <ContactUsSection />
        </>
    )
}

export default Home
