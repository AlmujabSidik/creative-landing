import React, { Fragment } from "react";
import GlobalButton from "./GlobalButton";
import { Menu, Transition } from "@headlessui/react";
import Logo from "../assets/logo.webp";

const NavMenu = () => {
  return (
    <div>
      {/* Menu Desktop */}
      <div className="container hidden md:flex justify-between items-center px-2.5 h-20 ">
        <div className="brand">
          <img src={Logo} alt="" />
        </div>

        <div className="">
          <ul className="flex items-center space-x-10">
            <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
              Home
            </li>
            <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
              About
            </li>
            <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
              Services
            </li>
            <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
              Projects
            </li>
          </ul>
        </div>
        
        <div>
        <GlobalButton>Contact Us</GlobalButton>
        </div>
      </div>

      {/* Menu Desktop */}

      {/* Menu Mobile */}
      <div className="flex items-center justify-between space-x-5 md:hidden px-2.5 h-20 w-full relative z-50">
      <div className="brand">
          <img src={Logo} alt="" />
        </div>
        

        <div className="flex items-center space-x-4">
        <GlobalButton>Contact Us</GlobalButton>
        
        <Menu as="div" className="relative flex items-center">
          <Menu.Button>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-45"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-48 h-48 bg-white border border-gray-100 rounded-md shadow-lg top-14 shadow-slate-200/70 focus:outline-0">
              <Menu.Item>
                <ul className="flex flex-col m-5 space-y-5">
                  <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
                    Home
                  </li>
                  <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
                    About
                  </li>
                  <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
                    Services
                  </li>
                  <li className="text-base transition duration-300 ease-in-out font-secondary text-slate-800 hover:text-slate-500 ">
                    Projects
                  </li>
                </ul>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
      </div>

      {/* Menu Mobile */}
    </div>
  );
};

export default NavMenu;
