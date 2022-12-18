import HeroSection1 from "../components/page-1/HeroSection1";
import WhatWeDoSection from "../components/page-1/WhatWeDoSection";
import ServicesSection from "../components/page-1/OurServicesSection";
import GallerySection from "../components/page-1/GallerySection";
import WhyUsSection from "../components/page-1/WhyUsSection";
import FeaturedProjectsSection from "../components/page-1/FeaturedProjectsSection";
import OurClientsSection from "../components/page-1/OurClientsSection";

const Page1 = () => {
  return (
    <>
      <HeroSection1/>
      <WhatWeDoSection/>
      <GallerySection/>
      <ServicesSection/>
      <WhyUsSection/>
      <FeaturedProjectsSection/>
      <OurClientsSection/>
      {/*<TestimonialsSection/>*/}
      {/*<ContactUsSection/>*/}
    </>
  );
}

export default Page1;
