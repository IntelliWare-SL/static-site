import HeroSection2 from '../components/AboutUs/HeroSection2'
import WhyChooseUsSection from '../components/AboutUs/WhyChooseUsSection'
import TeamMembersSection from '../components/AboutUs/TeamMembersSection'
import ScheduleAMeetingSection from '../components/AboutUs/ScheduleAMeetingSection'
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
