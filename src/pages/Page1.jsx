import HeroSection1 from "../components/page-1/HeroSection1";
import WhatWeDoSection from "../components/page-1/WhatWeDoSection";
import ServicesSection from "../components/page-1/OurServicesSection";
import GallerySection from "../components/page-1/GallerySection";
import WhyUsSection from "../components/page-1/WhyUsSection";
import FeaturedProjectsSection from "../components/page-1/FeaturedProjectsSection";
import OurClientsSection from "../components/page-1/OurClientsSection";
import ContactUsSection from "../components/page-1/ContactUsSection";
import TestimonialsSection from "../components/page-1/TestimonialsSection";
import {useEffect, useRef} from "react";
import { useSearchParams } from 'react-router-dom';

const Page1 = () => {
    const [searchParams] = useSearchParams();
    const RefFeaturedProjects = useRef(null)

    const scrollToFeatured=()=>{
        if(searchParams.get('scroll')==='featured' && RefFeaturedProjects?.current){
            RefFeaturedProjects.current.scrollIntoView()
        }else{
            window.scrollTo(0, 0);
        }
    }

    useEffect(()=>{
        scrollToFeatured()
    },[RefFeaturedProjects?.current])

  return (
    <>
      <HeroSection1/>
      <WhatWeDoSection/>
      <GallerySection/>
      <ServicesSection/>
      <WhyUsSection/>
        <div ref={RefFeaturedProjects}>
            <FeaturedProjectsSection />
        </div>

      <OurClientsSection/>
      <TestimonialsSection/>
      <ContactUsSection/>
    </>
  );
}

export default Page1;
