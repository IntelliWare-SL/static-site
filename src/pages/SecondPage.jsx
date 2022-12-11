import CustomNavbar from "../components/common/CustomNavbar";
import HeroSection2 from "../components/page-2/HeroSection2";
import WhyChooseUsSection from "../components/page-2/WhyChooseUsSection";
import TeamMembersSection from "../components/page-2/TeamMembersSection";
import BookMeetingSection from "../components/page-2/BookMeetingSection";
import Footer from "../components/common/Footer";

const SecondPage = () => {
  return (
    <>
      <CustomNavbar/>
      <HeroSection2/>
      <WhyChooseUsSection/>
      <TeamMembersSection/>
      <BookMeetingSection/>
      <Footer/>
    </>
  );
}

export default SecondPage
