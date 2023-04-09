import React from "react";
import Logo from '../assets/logo.svg'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.png'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="text-gray-600 body-font header sticky top-0 z-30 bg-gray-100 p-5">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="Binks" />
          <span className="ml-3 text-xl">Social</span>
        </Link>
        <div className="flex items-center">
          <button className="inline-flex items-center m-2 py-2.5 px-4 border-0 focus:outline-none bg-blue-300 hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
            Logout
          </button>
          {/* <button className="inline-flex items-center m-2 border-0 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <img className="h-10" src={Sun} />
            <img className="h-10" src={Moon} />
          </button> */}
        </div>
      </div>
    </header>
  );
};
