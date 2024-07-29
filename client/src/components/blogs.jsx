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

  const handleDelete = async (token) => {
    try {
      const response = await axios.delete(`${backendUrl}/posts/${token}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.token !== token)
        );
      } else {
        console.error(
          "Failed to delete the post, status code:",
          response.status
        );
        console.error("Response:", response.data);
      }
    } catch (error) {
      console.error("An error occurred while deleting the post:", error);
      if (error.response) {
        console.error("Status code:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const [imageLoaded, setImageLoaded] = useState({});
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

  const handleImageLoad = (index) => {
    setImageLoaded((prevState) => ({ ...prevState, [index]: true }));
  };

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
            We're currently experiencing technical difficulties with our backend
            system. The issue is as follows: {error}. Our team is actively
            working on resolving this problem as quickly as possible. We
            apologize for any inconvenience this may cause and appreciate your
            patience. Thank you for understanding.
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
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            {articles.length > 0 && (
              <>
                <div className="sm:col-span-5">
                  <Link to={`/post/${articles[0].token}`}>
                    <div
                      className="bg-cover text-center overflow-hidden"
                      style={{
                        minHeight: "300px",
                        backgroundImage: `url(${
                          articles[0].backgroundimg ||
                          "/images/blog/default.jpg"
                        })`,
                      }}
                      title={articles[0].title}
                    />
                  </Link>
                  <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div>
                      <Link
                        to={`/category/${articles[0].category}`}
                        className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                      >
                        {articles[0].category}
                      </Link>
                      <Link
                        to={`/post/${articles[0].token}`}
                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        {articles[0].title}
                      </Link>
                      <p className="text-gray-700 text-base mt-2">
                        {articles[0].description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
                  {articles.slice(1).map((article, index) => (
                    <div key={article.token} className="relative">
                      {index >= 12 && (
                        <button
                          onClick={() => handleDelete(article.token)}
                          className="absolute top-0 right-0 mt-1 mr-1 p-1 bg-red-600 text-white rounded-full"
                        >
                          &times;
                        </button>
                      )}
                      <Link to={`/post/${article.token}`}>
                        <div
                          className="h-40 bg-cover text-center overflow-hidden"
                          style={{
                            backgroundImage: `url(${
                              article.backgroundimg ||
                              "/images/blog/default.jpg"
                            })`,
                          }}
                          title={article.title}
                        >
                          <img
                            src={
                              article.backgroundimg ||
                              "/images/blog/default.jpg"
                            }
                            alt={article.title}
                            className={`object-cover w-full h-full ${
                              !imageLoaded[index] ? "blur" : ""
                            }`}
                            onLoad={() => handleImageLoad(index)}
                            style={{ display: "none" }}
                          />
                        </div>
                      </Link>
                      <Link
                        to={`/post/${article.token}`}
                        className="text-gray-900 inline-block bg-inherent font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        {article.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
