import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Portfolio from "@/components/Portfolio";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CognaByte | Innovative App, Web Development & Data Analysis Solutions",
  description: "Cognabyte offers high-performance Next.js development, Flutter app solutions, and data analysis to help startups and enterprises thrive."
  
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
