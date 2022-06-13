import React from "react";
import GlobalText from "./GlobalText";
import GlobalButton from "./GlobalButton";
import ImgAbout from "../assets/img-about.webp";
import Gra from "../assets/gradient.webp";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="container relative z-10 px-8 mt-20 md:mt-24">
      {/* Content About */}
        <div className="relative z-10 text-center Heading_about">
          <p className="text-2xl font-normal text-gray-400 font-primary">
            About Us
          </p>
          <GlobalText className="mt-2">Our Teammate</GlobalText>
        </div>
        <div className="relative z-10 flex flex-col-reverse items-center justify-center md:flex-row">
          <div className="mt-8 img-about">
            <img src={ImgAbout} className="w-full" alt="" />
          </div>

          <div className="w-full content-about md:1/2 lg:w-2/5">
            <p className="text-base font-light leading-normal tracking-wide text-gray-500 mt-7 font-secondary">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business2
              <br />
              <br />
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="flex justify-center w-full my-5 lg:justify-start space-x-7">
              <GlobalButton>Contacts Us</GlobalButton>
              <div>
                <GlobalButton className="flex items-center justify-center w-40 py-2 text-base tracking-wide text-blue-600 transition duration-300 ease-in-out bg-white border border-blue-500 rounded-full shadow-none hover:text-white hover:bg-blue-600">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <div className="mt-1">Our Story</div>
                  </div>
                </GlobalButton>
              </div>
            </div>
          </div>
        </div>
      {/* Content About */}


        <div className="absolute -left-40  -top-[60px] opacity-10">
          <img src={Gra} alt="" className="md:w-[450px] w-[450px]" />
        </div>
        <div className="absolute right-0 md:right-[270px] w-[600px] top-[150px] opacity-10 ">
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

export default About;
