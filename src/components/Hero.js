import React from "react";
import GlobalText from "./GlobalText";
import GlobalButton from "./GlobalButton";
import ImgHero from "../assets/img-hero.webp";
import Gra from "../assets/gradient.webp";

const Hero = () => {
  return (
    <div>
      <div className="relative min-h-full overflow-hidden ">
        <div className="container relative w-full px-5 text-center ">
          <div className="relative z-10 mt-20 ContentHero">
            <GlobalText>
              Make your dream <br /> business goal come true
            </GlobalText>
            <p className="my-5 text-lg leading-normal tracking-wide text-gray-600 md:my-8 font-secondary">
              when you need us for improve your business, <br /> then come with
              us to help your business have reach it, you just sit and feel that
              goal
            </p>
            <GlobalButton>Start Project</GlobalButton>
          </div>

          <div className="relative z-10 flex justify-center ImageHero">
            <img src={ImgHero} alt="" />
          </div>

          <div className="absolute -left-60  -top-[60px] opacity-10">
            <img src={Gra} alt="" className="md:w-[350px] w-[450px]" />
          </div>
          <div className="absolute right-0 md:-right-40 top-[120px] opacity-10">
            <img src={Gra} className="w-[300px] h-[300px] md:w-4/5 md:h-4/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
