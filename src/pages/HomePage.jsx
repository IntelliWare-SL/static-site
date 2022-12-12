import CustomNavbar from "../components/common/CustomNavbar";
import HeroSection1 from "../components/page-1/HeroSection1";
import WhatWeDoSection from "../components/page-1/WhatWeDoSection";
import GallerySection from "../components/page-1/GallerySection";
import ServicesSection from "../components/page-1/ServicesSection";
import WhyUsSection from "../components/page-1/WhyUsSection";
import FeaturedProjectsSection from "../components/page-1/FeaturedProjectsSection";
import TestimonialsSection from "../components/page-1/TestimonialsSection";
import ContactUsSection from "../components/page-1/ContactUsSection";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <>
      <CustomNavbar/>
      <HeroSection1/>
      <WhatWeDoSection/>
      <GallerySection/>
      <ServicesSection/>
      <WhyUsSection/>
      <FeaturedProjectsSection/>
      <TestimonialsSection/>
      <ContactUsSection/>
      <Footer/>
    </>
  );
}

export default HomePage;
