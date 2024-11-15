import { Search, ShoppingBag } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { imgPath } from "../helpers/functions-general";

const Header = () => {
  return (
    <header className="top-0 left-0 w-full">
      <div className="container ">
        <div className="wrapper flex justify-between items-center gap-5 py-4 px-5">
          {/* NAVIGATION */}
          <nav className="h-auto w-auto">
            <ul className=" flex main-nav gap-5">
              <li>
                <NavLink to="/">Men</NavLink>
              </li>
              <li>
                <NavLink to="/">Women</NavLink>
              </li>
              <li>
                <NavLink to="/">Kids</NavLink>
              </li>
              <li>
                <NavLink to="/">New $ Featured</NavLink>
              </li>
              <li>
                <NavLink to="/">Gift</NavLink>
              </li>
            </ul>
          </nav>
          {/* LOGO */}
          <div>
            <img src={`${imgPath}/headerlogo.png`} alt="" />
          </div>
          {/* CART */}
          <ul className="flex gap-5">
            <li>
              <button>
                <Search strokeWidth={2} size={18} />
              </button>
            </li>
            <li>
              <ShoppingBag strokeWidth={2} size={18} />
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
