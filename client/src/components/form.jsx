import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "slices/formSlice";
import { fetchBlogs } from "slices/blogsSlice";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: {
      name: "",
      email: "",
    },
    imageURL: null,
    backgroundimg: null,
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      const [, field] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        author: { ...prevData.author, [field]: value },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Main title is required";
    if (!formData.description) newErrors.description = "Blog title is required";
    if (!formData.content) newErrors.content = "Content is required";
    if (!formData.author.name) newErrors.authorName = "Author name is required";
    if (!formData.author.email) newErrors.authorEmail = "Author email is required";
    if (!formData.imageURL) newErrors.imageURL = "Main image is required";
    if (!formData.backgroundimg) newErrors.backgroundimg = "Background image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("authorName", formData.author.name);
    formDataToSend.append("authorEmail", formData.author.email);
    formDataToSend.append("imageURL", formData.imageURL);
    formDataToSend.append("backgroundimg", formData.backgroundimg);

    try {
      await dispatch(addNewBlog(formDataToSend));
      await dispatch(fetchBlogs());
      navigate("/blogs");
    } catch (error) {
      console.error("Upload failed:", error.message);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="w-full bg-customColor1 mt-8 p-4 md:p-8 lg:p-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 font-semibold text-gray-700"
              >
                Main Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="focus:outline-none bg-inherit w-full py-2"
                placeholder="Enter main title"
              />
              {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 font-semibold text-gray-700"
              >
                Blog Title:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="focus:outline-none bg-inherit w-full py-2"
                placeholder="Enter blog title"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
            </div>
            <div className="col-span-2 lg:flex lg:items-center lg:gap-8">
              <div className="lg:flex-1 lg:mr-8">
                <label
                  htmlFor="imageURL"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Upload Main Image:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="imageURL"
                  onChange={(e) => handleImageChange(e, "imageURL")}
                  className="py-2 text-green-700 inline-flex items-center justify-center"
                />
                {errors.imageURL && (
                  <p className="text-red-500">{errors.imageURL}</p>
                )}
              </div>
              <div className="lg:flex-1">
                <label
                  htmlFor="backgroundimg"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Upload Background Image:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="backgroundimg"
                  onChange={(e) => handleImageChange(e, "backgroundimg")}
                  className="py-2 text-green-700 inline-flex items-center justify-center"
                />
                {errors.backgroundimg && (
                  <p className="text-red-500">{errors.backgroundimg}</p>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 font-semibold text-gray-700"
              >
                Content:
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="focus:outline-none bg-inherit w-full py-2"
                placeholder="Enter content"
                style={{ height: "10em" }}
              />
              {errors.content && <p className="text-red-500">{errors.content}</p>}
            </div>
            <div>
              <input
                type="text"
                name="author.name"
                value={formData.author.name}
                onChange={handleChange}
                placeholder="Name"
                className="font-semibold text-gray-700 text-sm w-full focus:outline-none bg-inherit py-2"
              />
              {errors.authorName && (
                <p className="text-red-500">{errors.authorName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="author.email"
                value={formData.author.email}
                onChange={handleChange}
                placeholder="Email"
                className="font-semibold text-gray-600 text-xs w-full mt-2 focus:outline-none bg-inherit py-2"
              />
              {errors.authorEmail && (
                <p className="text-red-500">{errors.authorEmail}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 bg-cColor3 text-black px-4 py-2 rounded font-semibold"
            disabled={loading}
          >
            {loading ? "Bloging..." : "Add Blog"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
