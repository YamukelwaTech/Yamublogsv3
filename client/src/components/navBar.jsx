import { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBlogView, setDefaultView, setAnimation } from "slices/navSlice";

import assets from "assets";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "Yablogs", url: "/blogs" },
  { title: "BlogMe", url: "/newblog" },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { title, icon, animation } = useSelector((state) => state.navigation);
  const [showModal, setShowModal] = useState(false);
  const [lastRouteChange, setLastRouteChange] = useState(0);
  const animationDuration = 2000;

  const handleToggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const updateAnimation = useCallback(() => {
    const now = Date.now();
    if (now - lastRouteChange < animationDuration) {
      return;
    }
    setLastRouteChange(now);

    if (location.pathname === "/blogs") {
      dispatch(setBlogView());
    } else {
      dispatch(setDefaultView());
    }

    dispatch(
      setAnimation({
        opacity: 0,
        x: location.pathname === "/blogs" ? -50 : 50,
      })
    );

    const timer = setTimeout(() => {
      dispatch(
        setAnimation({
          opacity: 1,
          x: 0,
        })
      );
    }, 50);

    return () => clearTimeout(timer);
  }, [dispatch, lastRouteChange, location.pathname]);

  useEffect(() => {
    updateAnimation();
  }, [location, updateAnimation]);

  return (
    <nav className="w-full py-4 px-4 md:py-7 md:px-8 lg:px-44 sticky top-0 z-50 bg-cColor1">
      <div className="flex justify-between items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="text-cColor2 font-bold text-xl flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={animation}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {title}
            <img src={assets[icon]} alt="Icon" className="ml-2 h-6 w-6" />
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-4 md:hidden">
          {showModal ? (
            <FaTimes
              onClick={handleToggleModal}
              className="text-cColor4 cursor-pointer animate-spin"
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
              className="text-cColor2 font-bold text-l hover:underline"
            >
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="bg-cColor2 absolute inset-0 opacity-80 animate-fadeIn"
            onClick={handleToggleModal}
          />
          <div className="relative w-full max-w-sm mx-auto p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center justify-center">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  className="font-bold text-xl cursor-pointer hover:underline transition-colors duration-100 ease-in-out"
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
