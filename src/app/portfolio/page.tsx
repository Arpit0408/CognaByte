import SingleBlog from "@/components/Portfolio/SingleBlog";
import blogData from "@/components/Portfolio/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";  // Import SectionTitle component

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empowering Your Digital Future",
  description: "We offer cutting-edge solutions in web and mobile app development, business analysis, and data analytics. Our expert team helps businesses build scalable solutions that drive efficiency, growth, and success.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
       pageName="Empowering Your Digital Future"
       description="We offer cutting-edge solutions in web and mobile app development, business analysis, and data analytics. Our expert team helps businesses build scalable solutions that drive efficiency, growth, and success."
      />

     

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
