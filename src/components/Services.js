import React from "react";
import GlobalText from "./GlobalText";
import Gra from "../assets/gradient.webp";
import CardServices from "./CardServices";

const Services = () => {
  return (
    <div className="overflow-hidden h-[1300px] md:h-[600px]">
      <div className="container relative z-10 px-8 mt-20 md:mt-24">
        <div className="flex flex-col items-center justify-center space-x-8 lg:flex-row ">
          {/* Content Services */}

          <div className="w-full content-about md:1/2 lg:w-2/5">
            <div className="relative z-10 text-center md:text-left Heading_services">
              <p className="text-2xl font-normal text-gray-400 font-primary">
                Our Services
              </p>
              <GlobalText className="mt-2">
                Perfect and Fast Movement
              </GlobalText>
            </div>
            <p className="text-base font-light leading-normal tracking-wide text-gray-500 mt-7 font-secondary">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business.
            </p>

            <div className="relative z-10 flex items-center ">
              <div className="flex items-center mt-3 space-x-3 group">
              <a href="/" className="block text-blue-600 group-hover:text-blue-800">
                Read More
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600 group-hover:text-blue-800 group-hover:duration-300 group-hover:ease-in-out group-hover:transition group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              </div>
            </div>
          </div>
          {/* Content Services */}

          <div className="relative z-10 w-full lg:w-1/2">
            <CardServices />
          </div>
        </div>

        <div className="absolute -left-40  -top-[60px] opacity-10">
          <img src={Gra} alt="" className="md:w-[450px] w-[450px]" />
        </div>
        <div className="absolute bottom-0 right-0 md:-right-40 opacity-10 ">
          <img
            src={Gra}
            className="w-[300px] h-[300px] md:w-4/5 md:h-4/5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
