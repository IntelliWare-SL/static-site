import HeroSection3 from "../components/page-3/HeroSection3";
import OurServicesSection from "../components/page-3/OurServicesSection";
import OtherServicesSection from "../components/page-3/OtherServicesSection";
import {useEffect} from "react";

const Page3 = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
    <>
      <HeroSection3/>
      <OurServicesSection/>
      <OtherServicesSection/>
    </>
  );
}

export default Page3
