import HeroSection4 from "../components/page-4/HeroSection4";
import ContactUsSection from "../components/page-4/ContactUsSection";
import GetInTouchSection from "../components/page-4/GetInTouchSection";
import {useEffect} from "react";

const Page4 = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
    <>
      <HeroSection4/>
      <ContactUsSection/>
      <GetInTouchSection/>
    </>
  );
}

export default Page4
