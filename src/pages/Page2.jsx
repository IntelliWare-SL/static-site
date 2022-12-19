import HeroSection2 from "../components/page-2/HeroSection2";
import WhyChooseUsSection from "../components/page-2/WhyChooseUsSection";
import TeamMembersSection from "../components/page-2/TeamMembersSection";
import ScheduleAMeetingSection from "../components/page-2/ScheduleAMeetingSection";
import {useEffect} from "react";

const Page2 = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
    <>
      <HeroSection2/>
      <WhyChooseUsSection/>
      <TeamMembersSection/>
      <ScheduleAMeetingSection/>
    </>
  );
}

export default Page2
