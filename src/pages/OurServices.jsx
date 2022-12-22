import HeroSection3 from '../components/ourServices/HeroSection3'
import OurServicesSection from '../components/ourServices/OurServicesSection'
import OtherServicesSection from '../components/ourServices/OtherServicesSection'
import { useEffect } from 'react'

const OurServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroSection3 />
            <OurServicesSection />
            <OtherServicesSection />
        </>
    )
}

export default OurServices
