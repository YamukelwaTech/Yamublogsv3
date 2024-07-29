import assets from "assets";

const heroSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mt-4 text-4xl font-bold text-cColor2 lg:mt-8 sm:text-6xl xl:text-8xl">
              Track, share, measure—you have full control.
            </h1>
            <p className="mt-4 text-base text-cColor2 lg:mt-8 sm:text-xl">
              Interactivity between is the key to success.
            </p>

            <button
              type="button"
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-cColor2 transition-all duration-200 bg-cColor3 rounded-full lg:mt-16 hover:bg-yellow-600 focus:bg-cColor3"
            >
              Join for free
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <p className="mt-5 text-cColor2">
              Already a bloger?{" "}
              <button
                type="button"
                className=" text-cColor2 transition-all duration-200 hover:underline"
              >
                Log in
              </button>
            </p>
          </div>

          <div>
            <img className="w-full" src={assets.people} alt="Group of people" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroSection;
