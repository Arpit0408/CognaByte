import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";


const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
};
// Helper function to clean tags (remove base URL from the string or array of strings)
const cleanTags = (tags: string | string[]): string => {
  const baseURL = process.env.BASE_URL || ''; // Get the base URL from the environment
  const escapedBaseURL = escapeRegExp(baseURL); // Escape any special characters in the baseURL

  if (typeof tags === 'string') {
    return tags.replace(new RegExp(`^${escapedBaseURL}/`), ''); // Clean the base URL from the tag
  } else if (Array.isArray(tags)) {
    return tags
      .map(tag => tag.replace(new RegExp(`^${escapedBaseURL}/`), '')) // Clean each tag
      .join(", "); // Join tags into a comma-separated string
  } else {
    return ''; // Fallback if the tags are neither a string nor an array
  }
};

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  const cleanedTags = cleanTags(tags); // Clean the tags

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark mt-10">
      {/* Link for the image */}
      <Link href={`/blog/${cleanedTags}`} className="relative block aspect-[37/22] w-full">
        <Image src={image} alt={title} fill />
      </Link>
      
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          {/* Link for the title */}
          <Link
            href={`/blog/${cleanedTags}`} // Use cleaned tags URL for the title link
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        {/* Paragraph, author, and publish date can be displayed here */}
        
      </div>
    </div>
  );
};

export default SingleBlog;
