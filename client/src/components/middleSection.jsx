const middleSection = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Our Blogs
      </h2>
      <p className="mb-12 text-lg text-gray-500">
        Here are a few of the awesome reasons you must Yamublog.
      </p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customColor5 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-customColor5 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Express Yourself Freely
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customColor5 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Yamublog embraces all forms of expression. Whether you&apos;re
                  a seasoned tech writer, a budding photographer, or a
                  passionate foodie, there&apos;s a space for your unique voice
                  to shine.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customColor4 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-customColor4 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Content is King
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customColor4 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Yamublog empowers you to tell your story in the way that works
                  best for you. Share captivating text posts, stunning visuals,
                  or even video content to bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customColor2 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-customColor2 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Engage and Interact:
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customColor2 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Yamublog fosters meaningful connections. &quot;Like&quot; and
                  comment on posts to spark discussions, participate in Yamublog
                  challenges, and build relationships with your fellow creators.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Go Viral
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  The power of sharing is at your fingertips. Share your
                  Yamublogs on other social media platforms to expand your reach
                  and ignite conversations on a global scale.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customColor5 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-customColor5 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Find Your Tribe
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customColor5 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Connect with a community that shares your interests. Explore a
                  vast range of Yamublogs on diverse topics, or build your own
                  audience around your niche passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default middleSection;
