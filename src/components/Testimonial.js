import React from "react";
import GlobalText from "./GlobalText";
import ImgCircle from '../assets/circle.webp'

const Testi = () => {
  const testimonial = [
    {
      name: "Angel Rose",
      title: "Creative Manager",
      picture: require("../assets/img-testi1.webp"),
      text: "There are many variations passages of Lorem Ipsum majority some by words which don't look . ",
    },
    {
      name: "Jhonny D.",
      title: "Front End Developer",
      picture: require("../assets/img-testi2.webp"),
      text: "There are many variations passages of Lorem Ipsum majority some by words which don't look . ",
    },
    {
      name: "Jenny Marchel",
      title: "UI/UX Designer",
      picture: require("../assets/img-testi3.webp"),
      text: "There are many variations passages of Lorem Ipsum majority some by words which don't look . ",
    },
  ];
  return (
    <div className="relative overflow-hidden w-ful">
     <div className="min-h-full pb-10 sm:h-[680px] md:h-[400px]">
     <div className="container relative z-10 px-8 mt-20 md:mt-24 ">
        {/* Content About */}
        <div className="relative z-10 text-center heading_testimonial">
          <p className="text-2xl font-normal text-gray-400 font-primary">
            Testimonial
          </p>
          <GlobalText className="mt-2">People Talk about us</GlobalText>
        </div>

        <div className="relative z-10 mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {testimonial.map((testi, index) => (
              <div className="p-5 bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-3 shadow-gray-200/40" key={index}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <img src={testi.picture} alt="" />
                    <div>
                      <h1 className="text-xl font-semibold leading-8 tracking-tight text-blue-500 font-primary">{testi.name}</h1>
                      <p className="text-base font-light leading-5 tracking-wide text-gray-400 font-primary">{testi.title}</p>
                    </div>
                    
                  </div>
                  <div>
                            <p className="text-lg font-normal text-gray-500 font-secondary">{testi.text}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Testimonial */}
        <div className="absolute bottom-0 left-0 right-0 top-24 md:top-0">
          <img src={ImgCircle} alt="" className="" />
        </div>
        <div className="absolute right-0 -bottom-10 sm:right-60 md:-bottom-10">
          <img src={ImgCircle} alt="" className="" />
        </div>


      </div>
     </div>
    </div>
  );
};

export default Testi;
