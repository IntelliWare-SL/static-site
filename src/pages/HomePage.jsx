import CustomNavbar from "../components/CustomNavbar";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import GallerySection from "../components/GallerySection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";

const HomePage = () => {
  return (
    <>
      <CustomNavbar/>
      <HeroSection/>
      <WhatWeDoSection/>
      <GallerySection/>
      <ServicesSection/>
      <WhyUsSection/>
      <FeaturedProjectsSection/>
      {/*<TestimonialsSection/>*/}
    </>
  );
}

export default HomePage;
