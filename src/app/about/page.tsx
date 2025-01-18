import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
  pageName="About Cognabyte"
  description="At Cognabyte, we specialize in Next.js, Flutter app development, and data analysis services, delivering innovative solutions to drive your business forward."
/>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
