import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import blog from "assets";

const navLinks = [
  { title: "FeedMe", url: "/" },
  { title: "PostUp", url: "/blog" },
  { title: "PostMe", url: "/newpost" },
];

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <nav className="w-full bg-customColor1 py-4 px-4 md:py-7 md:px-8 lg:px-44 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-customColor2 font-bold text-xl flex items-center">
          YamukelwaBlogs
          <img src={blog} alt="Blog Icon" className="ml-2 h-6 w-6" />
        </div>
        <div className="flex items-center gap-4 text-customColor2 md:hidden">
          {showModal ? (
            <FaTimes
              onClick={handleToggleModal}
              className="text-customColor2 cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <FaBars
              onClick={handleToggleModal}
              className="text-customColor2 cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>
        <ul className="hidden md:flex gap-4 md:gap-8 items-center justify-center text-center cursor-pointer">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-customColor2 font-bold text-l hover:underline"
            >
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-customColor1 opacity-90"
            onClick={handleToggleModal}
          />
          <div className="relative bg-customColor1 w-full max-w-sm mx-auto p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center justify-center">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  className="text-customColor2 font-bold text-lg cursor-pointer hover:underline"
                  onClick={handleToggleModal}
                >
                  <Link to={link.url}>{link.title}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
