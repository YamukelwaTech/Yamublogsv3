import assets from "assets";

const Footer = () => {
  return (
    <div className="bg-customColor1 mt-12">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-4/12">
          <div className="flex items-center mb-4">
            <h3 className="font-bold text-xl text-cColor2">YamukelwaBlogs</h3>
            <img src={assets.blog} alt="Blog Icon" className="ml-2 h-6 w-6" />
          </div>
          <p className="text-gray-500 text-sm mb-5 font-semibold">
            Track, share, measure—you have full control.
          </p>
          <div className="flex-row flex">
            <span className="w-6 mx-1">
              <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-customColor4"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              ></svg>
            </span>
          </div>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-cColor2 font-semibold mb-6">
            Links
          </div>
          <a
            href="/faq"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            FAQ
          </a>
          <a
            href="/help"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Help
          </a>
          <a
            href="/support"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Support
          </a>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-cColor2 font-semibold mb-6">
            Legal
          </div>
          <a
            href="/terms"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Privacy
          </a>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-cColor2 font-semibold mb-6">
            Social
          </div>
          <a
            href="https://github.com/YamukelwaTech"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/yamukelwa-msimango-/"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            LinkedIn
          </a>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-cColor2 font-semibold mb-6">
            Company
          </div>
          <a
            href="/blog"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Official Blog
          </a>
          <a
            href="/about"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="my-3 block text-gray-300 hover:text-cColor5 text-sm font-medium duration-700"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="py-6 text-sm text-cColor2 border-t border-cColor2 text-center font-semibold">
        ©YamukelwaTech.2024.
      </div>
    </div>
  );
};

export default Footer;
