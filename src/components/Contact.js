import React from "react";
import GlobalText from "./GlobalText";
import GlobalButton from "./GlobalButton";
import ImgContact from "../assets/img-contact.webp";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <div className="container relative z-10 flex flex-col-reverse items-center px-8 mt-20 md:flex-row md:mt-24">
        {/* Content Contact */}
        <div className="relative z-10 w-full mt-5 md:mt-0 Heading_contact md:w-2/5">
          <GlobalText className="mt-2">
            Interesting Collaboration With Us?
          </GlobalText>
          <p className="text-base font-light leading-normal tracking-wide text-gray-500 mt-7 font-secondary">
              Help you to reach your business goal
            </p>
            <div className="w-full mt-10">
              <GlobalButton>Get Started</GlobalButton>
            </div>
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-full content-contact md:w-10/12 lg:w-full">
            
            <div className=" img-contact">
              <img src={ImgContact} className="w-full" alt="" />
            </div>
          </div>
        </div>
        {/* Content Contact */}
      </div>
    </div>
  );
};

export default Contact;
