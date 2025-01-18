import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
        <SectionTitle
  title="Our Core Services"
  paragraph="At Cognbyte, we specialize in providing innovative web and mobile development solutions, leveraging modern technologies like MERN, MEAN, Next.js, Flutter, and more. We also offer expert business analysis and data insights using tools such as Power BI, Excel, and Python to help you make informed decisions and drive growth."
  center
/>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
