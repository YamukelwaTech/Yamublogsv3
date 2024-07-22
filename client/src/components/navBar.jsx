import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import blog from "assets";

const navLinks = [
  { title: "FeedMe", url: "/" },
  { title: "PostUp", url: "/blog" },
  { title: "PostMe", url: "/newpost" },
];

const Navbar = () => {
  const [isMobile, /* setIsMobile */] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isSignedIn = true;

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className={`w-full bg-cColor1 ${isMobile ? "py-4 px-4" : "py-7 px-8 md:px-44"} sticky top-0 z-50`}>
      <div className="flex justify-between items-center">
        <div className="text-customColor2 font-bold text-xl flex items-center">
          YamukelwaBlogs
          <img src={blog} alt="Blog Icon" className="ml-2 h-6 w-6" />
        </div>
        {isMobile ? (
          <div className="flex items-center gap-4 text-customColor2 cursor-pointer">
            <FaBars
              onClick={handleToggleModal}
              className="text-customColor2 cursor-pointer"
              aria-label="Open menu"
            />
          </div>
        ) : (
          <ul className="flex gap-4 md:gap-8 items-center justify-center text-center cursor-pointer">
            {navLinks.map((link, index) => (
              <li key={index} className={`text-customColor2 font-bold text-l hover:underline ${(!isSignedIn && index > 0) ? 'pointer-events-none opacity-50' : ''}`}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showModal && isMobile && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-customColor1 opacity-90" />
          <FaTimes
            className="absolute top-6 right-6 text-customColor2 cursor-pointer"
            onClick={handleToggleModal}
            style={{ fontSize: "24px" }}
            aria-label="Close menu"
          />
          <div className="relative bg-customColor1 w-full max-w-sm mx-auto p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center justify-center">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  className={`text-customColor2 font-bold text-lg cursor-pointer hover:underline ${(!isSignedIn && index > 0) ? 'pointer-events-none opacity-50' : ''}`}
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

export default Navbar;
