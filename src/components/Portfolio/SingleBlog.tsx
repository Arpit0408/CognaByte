import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

// Helper function to escape special characters in a string for use in a RegExp
const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&'); // Escape special characters
};

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  // Ensure `tags` is either a string or array of strings
  let cleanTags: string = '';

  if (Array.isArray(tags)) {
    // If tags is an array, map through each tag and clean them
    const baseURL = process.env.BASE_URL || ''; // Get the base URL from the environment
    const escapedBaseURL = escapeRegExp(baseURL); // Escape any special characters in the baseURL
    cleanTags = tags
      .map(tag => tag.replace(new RegExp(`^${escapedBaseURL}/`), '')) // Apply the same replacement for each tag
      .join(", "); // Join them back into a comma-separated string
  }

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark mt-10">
      {/* Link for the image */}
      <Link href={`${cleanTags}`} className="relative block aspect-[37/22] w-full">
        <Image src={image} alt={title} fill />
      </Link>
      
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          {/* Link for the title */}
          <Link
            href={cleanTags} // Assuming a blog URL structure
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        
        {/* Optional content like paragraph, author, and publish date */}
      

        {/* Display tags if available */}
        
      </div>
    </div>
  );
};

export default SingleBlog;
