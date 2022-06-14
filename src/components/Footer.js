import React from "react";
import LogoFooter from "../assets/Logo.png";
import Facebook from "../assets/fb.png";
import Instagram from "../assets/ig.png";
import Linkedin from "../assets/in.png";
import Email from "../assets/em.png";
import Twitter from "../assets/tw.png";

const Footer = () => {
  return (
    <div className="text-white bg-blue-500 md:h-[560px] lg:h-[400px] w-full mt-10">
      <div className="container px-8 py-10 overflow-hidden">
        <div className="flex flex-col space-y-5 overflow-hidden md:space-y-0 md:space-x-10 md:flex-row">
          <div className="Logo_Footer">
            <img src={LogoFooter} alt="" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-primary">
                Terms & Policies
              </h1>
              <div className="inline-block space-y-2">
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  Terms of Service
                </a>
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-primary">Company</h1>
              <div className="inline-block space-y-2">
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-primary">Contact</h1>
              <div className="inline-block space-y-2">
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  (+62) 81247001234
                </a>
                <a
                  href="/"
                  className="block font-light font-secondary text-white/80"
                >
                  agen@email.com
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-primary">Location</h1>
              <div className="inline-block space-y-2">
                <p className="block font-light font-secondary text-white/80">
                  PT Agency Creative B
                </p>
                <p className="block font-light font-secondary text-white/80">
                  Street Pemancar Dok 8 Atas
                </p>
                <p className="block font-light font-secondary text-white/80">
                  Jayapura, Indonesia
                </p>
                <p className="block font-light font-secondary text-white/80">
                  team@agencycreative.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center space-x-5">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Email} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 line">
        <div className="w-full h-[2px] md:w-1/2  bg-gray-300 "></div>
      </div>
      <div className="mt-2 text-center">
        <p>&copy; Copyright 2022 Agency Creative. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
