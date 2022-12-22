import HeroSection4 from '../components/contactUs/HeroSection4'
import ContactUsSection from '../components/contactUs/ContactUsSection'
import GetInTouchSection from '../components/contactUs/GetInTouchSection'
import { useEffect } from 'react'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroSection4 />
            <ContactUsSection />
            <GetInTouchSection />
        </>
    )
}

export default ContactUs
