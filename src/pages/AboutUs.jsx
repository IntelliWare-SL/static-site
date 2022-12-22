import HeroSection2 from '../components/aboutUs/HeroSection2'
import WhyChooseUsSection from '../components/aboutUs/WhyChooseUsSection'
import TeamMembersSection from '../components/aboutUs/TeamMembersSection'
import ScheduleAMeetingSection from '../components/aboutUs/ScheduleAMeetingSection'
import { useEffect } from 'react'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroSection2 />
            <WhyChooseUsSection />
            <TeamMembersSection />
            <ScheduleAMeetingSection />
        </>
    )
}

export default AboutUs
