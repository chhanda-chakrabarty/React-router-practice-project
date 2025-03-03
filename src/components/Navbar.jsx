import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div class="border-b-2 shadow-md border-gray-100 pb-5">
        <div class="max-w-7xl mx-auto my-5 px-4 sm:px-6 "></div>
        <nav id="bar" class="flex justify-center ">
          <div class=" flex flex-col gap-x-10 md:flex-row justify-center md:space-y-0 my-4 space-y-4  text-center text-gray-500">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/review"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
            >
              Review
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-900" : "text-black"
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
