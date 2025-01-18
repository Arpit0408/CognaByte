import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  // Ensure `tags` is a string and clean it, or handle it if it's an array
  let cleanTags: string;

  if (typeof tags === 'string') {
    // If tags is a string, apply the replace method
    const baseURL = process.env.BASE_URL || ''; // Get the base URL from the environment
    cleanTags = tags.replace(new RegExp(`^${baseURL}/`), ''); // Replace the base URL part in the string
  } else if (Array.isArray(tags)) {
    // If tags is an array, map through each tag and clean them
    const baseURL = process.env.BASE_URL || ''; // Get the base URL from the environment
    cleanTags = tags
      .map(tag => tag.replace(new RegExp(`^${baseURL}/`), '')) // Apply the same replacement for each tag
      .join(", "); // Join them back into a comma-separated string
  } else {
    // If tags is neither a string nor an array, handle the fallback case
    cleanTags = '';
  }
  

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark mt-10">
      {/* Link for the image */}
      <Link href={cleanTags} className="relative block aspect-[37/22] w-full">
        <Image src={image} alt={title} fill />
      </Link>
      
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          {/* Link for the title */}
          <Link
            href={cleanTags} // Use cleaned tags URL for the title link
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        {/* You can also display other content like paragraph, author, and publish date */}
        {/* <p className="text-gray-600 dark:text-gray-300">{paragraph}</p>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          <span>By {author}</span> | <span>{publishDate}</span>
        </div> */}
      </div>
    </div>
  );
};

export default SingleBlog;
