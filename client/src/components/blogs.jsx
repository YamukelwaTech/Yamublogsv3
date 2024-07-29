import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import assets from "assets";

const backendUrl = "https://blogbackend-yy9j.onrender.com";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${backendUrl}/posts`);
        console.log(response.data); // Log the response
        if (Array.isArray(response.data)) {
          setArticles(response.data);
        } else {
          throw new Error("Unexpected response format");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (!loading && articles.length > 0 && !logged) {
      articles.forEach((article) => {
        console.log("Token:", article.token);
      });
      setLogged(true);
    }
  }, [articles, loading, logged]);

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
        <>
          <div className="flex items-end justify-between mb-12 header">
            <div className="title md:ml-20">
              <p className="mb-4 text-3xl font-bold text-customColor2">
                Latest YamuBlogs
              </p>
              <p className="text-sm md:text-xl font-semibold text-customColor2 flex items-center">
                All articles are verified
                <span className="ml-2 text-customColor2">
                  <img
                    src={assets.check}
                    alt="Right Icon"
                    className="h-4 w-4 md:h-6 md:w-6"
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {articles.length > 0 &&
              articles.map((article) => (
                <div key={article.token} className="col-span-1">
                  <Link to={`/post/${article.token}`}>
                    <div
                      className="bg-cover text-center overflow-hidden"
                      style={{
                        minHeight: "300px",
                        backgroundImage: `url(${
                          article.backgroundimg || "/images/blog/default.jpg"
                        })`,
                      }}
                      title={article.title}
                    />
                  </Link>
                  <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div>
                      <Link
                        to={`/category/${article.category}`}
                        className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                      >
                        {article.category}
                      </Link>
                      <Link
                        to={`/post/${article.token}`}
                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        {article.title}
                      </Link>
                      <p className="text-gray-700 text-base mt-2">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
