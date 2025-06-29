import React from "react";
import { assets } from "../quickStay-assets/assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:p-5 p-5 border-t-2 border-b-2 border-gray-500">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-gray-800  md:px-20">
          <div className="text-center">
            <div className="flex mb-3 text-2xl md:text-3xl">
              <img src="/favicon.svg" alt="" className="w-10" />
              <h1 className="font-bold  pt-1.5">TajMahal</h1>
            </div>
            <p className="text-sm">
              Discover the world's most extraordinary places to stay, from
              boutique to luxury villas and private islands.
            </p>
            <div className="flex justify-center gap-3 my-8">
              <img
                src={assets.instagramIcon}
                alt=""
                className=" hover:-translate-y-2 transition-all duration-300 w-6 cursor-pointer hover:scale-110"
              />
              <img
                src={assets.facebookIcon}
                alt=""
                className=" hover:-translate-y-2 transition-all duration-300 w-6 cursor-pointer hover:scale-110"
              />
              <img
                src={assets.linkendinIcon}
                alt=""
                className=" hover:-translate-y-2 transition-all duration-300 w-6 cursor-pointer hover:scale-110"
              />
              <img
                src={assets.twitterIcon}
                alt=""
                className=" hover:-translate-y-2 transition-all duration-300 w-6 cursor-pointer hover:scale-110"
              />
            </div>
          </div>
          <div className="mt-3.5 text-sm text-center">
            <h1 className="font-bold">COMPANY</h1>
            <ul className="mt-5">
              <li className="py-0.5">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Career</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Press</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Blogs</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Partners</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-3.5 text-sm text-center">
            <h1 className="font-bold">SUPPORT</h1>
            <ul className="mt-5">
              <li className="py-0.5">
                <NavLink to={"/"}>Help Centre</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Safety Information</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Cancellation OPtions</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Contact Us</NavLink>
              </li>
              <li className="py-0.5">
                <NavLink to={"/"}>Accessibility</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-3.5 text-sm">
            <h1 className="font-bold">STAY UPDATED</h1>
            <p className="pt-5">
              Subscribe to our newsletter for travel inspiration and special
              offers.
            </p>
            <div className="flex mt-5 sm:w-fit w-[150px] ">
              <input
                type="email"
                placeholder=" email"
                className="py-2 pl-2 text-gray-800 outline-none bg-orange-200 focus:bg-orange-300 rounded-l-md border-amber-500 w-full border-2"
              />
              <button className="py-2 px-4 rounded-r-md  bg-orange-700 w-fit active:bg-orange-400 hover:bg-amber-500 active:scale-95 cursor-pointer">
                <img src={assets.arrowIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-10 py-2 text-sm flex text-gray-800 flex-wrap-reverse md:justify-between justify-center-safe px-5  md:px-28">
            <p>@2025 QuickStay All Rights Reserved</p>
            <div className="flex gap-5">
               <NavLink to={'/'}>Privacy</NavLink>
               <NavLink to={'/'}>Terms</NavLink>
               <NavLink to={'/'}>Sitemap</NavLink>
            </div>
      </div>
    </>
  );
};

export default Footer;
