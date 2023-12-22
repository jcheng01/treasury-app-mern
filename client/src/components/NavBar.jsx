import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">985</span>
            <span className="text-slate-700">Treasury</span>
          </h1>
        </Link>
        <form
          //   onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/signup">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Sign Up
            </li>
          </Link>
          <Link to="/signin">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Sign In
            </li>
          </Link>
          {/* <Link to="/profile">
            <img
              className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
              alt="profile"
            />
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};
