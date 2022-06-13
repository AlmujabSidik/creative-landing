import React from "react";

const CardServices = () => {
  const Icon = [
    {
      title: "Social Media Management",
      picture: require("../assets/monitor.webp"),
    },
    {
      title: "Search Engine Opimization",
      picture: require("../assets/setting.webp"),
    },
    {
      title: "UI/UX Design",
      picture: require("../assets/pen.webp"),
    },
    {
      title: "Digital Marketing",
      picture: require("../assets/ads.webp"),
    },
  ];

  return (
    <div className="w-full">
     <div className="grid grid-cols-1 gap-6 mt-10 md:gap-10 md:grid-cols-2">
     {Icon.map((icons, index) => (
           <div
           className= "p-10 bg-white border border-gray-200 rounded-lg hover:shadow-xl hover:shadow-slate-300/30"
              key={index}
            >
              <div className="flex justify-center">
              <img src={icons.picture} className=" w-14" alt="" />
              </div>
              <h1 className="mt-4 text-lg font-light leading-6 text-center text-slate-800 font-secondary">
                {icons.title}
              </h1>
            </div>
          ))}
     </div>
    </div>
  );
};

export default CardServices;
