import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Alook</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="/" className="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="match" className="cursor-pointer">
                Match
              </Link>
            </li>
            <li>
              <Link to="daily" className="cursor-pointer">
                Daily
              </Link>
            </li>
            <li>
              <Link to="closet" className="cursor-pointer">
                Closet
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="px-8 py-3 mr-4 text-black bg-transparent border border-slate-600 hover:bg-slate-600 hover:text-white rounded-md">
            Sign In
          </button>
          <button className="px-8 py-3 text-white border bg-slate-600 border-slate-600 hover:bg-transparent hover:text-slate-600 rounded-md">
            Sign Up
          </button>
        </div>
        <div className="mr-4 md:hidden" onClick={() => setNav(!nav)}>
          {!nav ? (
            <FaAlignJustify className="w-5" />
          ) : (
            <FaTimes className="w-5" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="w-full border-b-2 border-zinc-300">
          <Link onClick={() => setNav(false)} to="/" className="cursor-pointer">
            Home
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="about"
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="match"
            className="cursor-pointer"
          >
            Match
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="daily"
            className="cursor-pointer"
          >
            Daily
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="closet"
            className="cursor-pointer"
          >
            Closet
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4 text-slate-600 bg-transparent border border-slate-600 hover:bg-slate-600 hover:text-white rounded-md">
            Sign In
          </button>
          <button className="px-8 py-3 text-white border bg-slate-600 border-slate-600 hover:bg-transparent hover:text-slate-600 rounded-md">
            Sign Up
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
