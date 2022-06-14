import React from "react";
import GlobalButton from "./GlobalButton";
import GlobalText from "./GlobalText";

const Portfolio = () => {
  const works = [
    {
      title: "Web Development",
      picture: require("../assets/web.webp"),
    },
    {
      title: "Mobile Development",
      picture: require("../assets/app.webp"),
    },
    {
      title: "UI/UX Design",
      picture: require("../assets/ux.webp"),
    },
  ];

  return (
    <div className="">
      <div className="container relative z-10 px-8 mt-20 md:mt-24">
        <div className="">
          {/* Content Portfolio */}

          <div className="relative z-10 text-center Heading_Portfolio">
            <p className="text-2xl font-normal text-gray-400 font-primary">
              Our Portfolio
            </p>
            <GlobalText className="mt-2">What do we do</GlobalText>
          </div>
          <p className="text-base font-light leading-normal tracking-wide text-center text-gray-500 mt-7 font-secondary">
            all projects that we have already done , proven can help to use more
            <br />
            comfortable, then can used by client from our business
          </p>

          <div className="relative flex flex-col items-center justify-center gap-5 mt-10 md:flex-row md:gap-8 ">
            {works.map((work, index) => (
              <div className="group" key={index}>
                <div className="relative group-hover">
                  <img src={work.picture} alt="" />
                  <div className="absolute w-full group-hover:opacity-60  group-hover:top-0 group-hover:transition group-hover:duration-500 group-hover:ease-in-out right-0 left-0 top-0 bottom-0 bg-black opacity-0 h-full rounded-[30px] ">
                    <div className="relative flex items-center justify-center h-full">
                      <h1 className="text-lg font-light leading-6 text-center text-white l font-secondary">
                        {work.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="items-center justify-center w-full my-5 sm:flex ">
            <div>
              <GlobalButton className="flex items-center justify-center w-full py-1.5 text-base tracking-wide text-blue-600 transition duration-300 ease-in-out bg-white border border-blue-500 rounded-full shadow-none sm:w-40 hover:text-white hover:bg-blue-600 mt-4 sm:mt-0">
                <div className="mt-1">See Portfolio</div>
              </GlobalButton>
            </div>
          </div>

          {/* Content Portfolio */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
