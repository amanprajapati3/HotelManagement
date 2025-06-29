import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="">

        <div
          className={`justify-between flex fixed top-0 z-50 transition-all duration-700 w-full px-2 sm:px-16 lg:px-28 py-2 md:py-4 ${
            scrolled
              ? "bg-white/30 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="flex text-2xl md:text-3xl">
            <img src="/favicon.svg" alt="" className="w-10" />
            <h1 className="font-bold text-blue-400 pt-1.5">TajMahal</h1>
          </div>
          <ul
            className={`md:flex mt-1 rounded-2xl font-sans hidden  backdrop-blur-md ${
              scrolled ? "text-gray-700" : "text-gray-900"
            }`}
          >
            <li className="px-4 py-2 ">
              <NavLink to={"/"}>
                <p className="hover:border-b-gray-700 hover:border-b-2 hover:text-black hover:scale-105 transition-all duration-200">
                  Home
                </p>
              </NavLink>
            </li>
            <li className="px-4 py-2  ">
              <NavLink to={"/hotels"}>
                <p className="hover:border-b-gray-700 hover:border-b-2 hover:text-black hover:scale-105 transition-all duration-200">
                  Hotels
                </p>
              </NavLink>
            </li>
            <li className="px-4 py-2  ">
              <NavLink to={"/experience"}>
                <p className="hover:border-b-gray-700 hover:border-b-2 hover:text-black hover:scale-105 transition-all duration-200">
                  Experience
                </p>
              </NavLink>
            </li>
            <li className="px-4 py-2  ">
              <NavLink to={"/about"}>
                <p className="hover:border-b-gray-700 hover:border-b-2 hover:text-black hover:scale-105 transition-all duration-200">
                  About
                </p>
              </NavLink>
            </li>
            <li className="px-4 py-2 ">
              <button className="cursor-pointer hover:border-b-gray-700 hover:border-b-2 hover:text-black hover:scale-105 transition-all duration-200">
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </button>
            </li>
          </ul>
          <div className="mt-1.5">
            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Bookings"
                    onClick={() => {
                      navigate("/my-bookings");
                    }}
                    labelIcon={<BookIcon />}
                  ></UserButton.Action>
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={openSignIn}
                className="bg-black py-2 px-5 cursor-pointer rounded-3xl text-white hover:text-gray-200 hover:bg-gray-800 active:scale-95 active:bg-black"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
