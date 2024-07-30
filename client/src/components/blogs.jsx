import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "slices/blogsSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const [loadingMessage, setLoadingMessage] = useState(
    "Fetching all the latest posts..."
  );

  const loadingMessages = useMemo(
    () => [
      "Fetching all the latest posts...",
      "Hang tight, fetching new content...",
      "Loading articles, please wait...",
    ],
    []
  );

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setLoadingMessage((prevMessage) => {
        const currentIndex = loadingMessages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000);

    return () => clearInterval(messageInterval);
  }, [loadingMessages]);

  return (
    <div className="flex-grow max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-semibold text-customColor2">
            {loadingMessage}
          </p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-semibold text-red-500">
            We&#39;re currently experiencing technical difficulties with our
            backend system. The issue is as follows: {error}. Our team is
            actively working on resolving this problem as quickly as possible.
            We apologize for any inconvenience this may cause and appreciate
            your patience. Thank you for understanding.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <div
                key={blog.token}
                className="col-span-1 relative group border-4 border-cColor3 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:border-cColor2 hover:bg-cColor2"
              >
                <div className="relative">
                  <div
                    className="bg-cover text-center overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      minHeight: "300px",
                      backgroundImage: `url(${
                        blog.backgroundimg || "/images/blog/default.jpg"
                      })`,
                    }}
                  />
                  <div className="absolute inset-0 border-b-4 border-cColor3 group-hover:border-cColor2 transition duration-300 ease-in-out"></div>
                </div>
                <div className="p-5 transition-all duration-300 ease-in-out group-hover:text-white">
                  <Link
                    to={`/post/${blog.token}`}
                    className="block text-cColor2 font-bold text-2xl mb-2 group-hover:text-white transition duration-500 ease-in-out"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-cColor2 text-base font-semibold group-hover:text-white transition duration-300 ease-in-out">
                    {blog.description}
                  </p>
                </div>
                <span className="absolute inset-0 bg-customColor1 opacity-20 group-hover:opacity-40 transition duration-300 ease-in-out"></span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
