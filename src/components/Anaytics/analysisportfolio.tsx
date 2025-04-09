import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const DataAnalyticsPortfolio = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">

<SectionTitle
          title="Data Analysis Portfolio"
          paragraph=" A collection of data-driven insights to help businesses make informed decisions and forecast future trends."
          center
        />


      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
         Ecommerce Store Analysis Report
        </h2>
      

        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="relative aspect-[16/9] max-w-[800px] mx-auto">
              <Image
                src="/images/analysis1.jpg" // Change to your image path
                alt="Data Analytics"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/analysis1.jpg" // Change to your image path
                alt="Data Analytics"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Objective:</h3>
              <p className="text-base font-medium text-body-color mb-6">
                Using data analysis techniques, we focused on time series analysis to uncover trends and forecast future sales for business growth.
              </p>


              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Insights & Recommendations:</h3>
              <ul className="list-inside list-disc text-base font-medium text-body-color">
                <li><strong>Top Categories:</strong> Phones, Chairs, and Storage are the highest-grossing categories.</li>
                <li><strong>Sales by Region:</strong> California and Network regions had the highest sales.</li>
                <li><strong>Loyal Customers:</strong> Reward top customers like Tamara Chand and Raymond Buch with special offers.</li>
                <li><strong>Monthly Sales Insights:</strong> Detailed monthly sales data for 2014-2017 highlights key profit trends.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto text-center mt-20">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
        Hr  Analysis Report
        </h2>
      

        <div className="flex flex-col lg:flex-row lg:flex-row-reverse items-center justify-center text-center lg:text-left">
         
         {/* Image Section (Appear first on mobile) */}
         <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 order-first lg:order-last">
           <div className="relative aspect-[16/9] max-w-[800px] mx-auto">
             <Image
               src="/images/analysis2.jpg" // Change to your image path
               alt="Data Analytics"
               fill
               className="drop-shadow-three dark:hidden dark:drop-shadow-none"
             />
             <Image
               src="/images/analysis2.jpg" // Change to your image path
               alt="Data Analytics"
               fill
               className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
             />
           </div>
         </div>
       
         {/* Content Section (Appear second on mobile) */}
         <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
           <div className="max-w-lg mx-auto">
             <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Objective:</h3>
             <p className="text-base font-medium text-body-color mb-6">
               Help an organization to improve employee performance and understanding the points causing reduced attrition of employees from the company through an HR Analytics dashboard.
             </p>
       
             <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Insights & Recommendations:</h3>
             <ul className="list-inside list-disc text-base font-medium text-body-color">
               <li><strong>Top Attrition Age Group:</strong> The highest employee attrition is observed in the 26 to 35 age group.</li>
               <li><strong>High Attrition in Specific Fields:</strong> Maximum attrition is seen in the fields of Life Science Education and Laboratory Technician job roles.</li>
               <li><strong>Attrition by Tenure:</strong> Employees with 1 to 2 years of tenure are most likely to leave the company.</li>
               <li><strong>Salary Insights:</strong> The average salary is 6.65K, with employees earning less than this being more likely to leave the company.</li>
             </ul>
           </div>
         </div>
       
       </div>
       
      </div>
    </section>
  );
};

export default DataAnalyticsPortfolio;
