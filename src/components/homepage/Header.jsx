import { Search, ShoppingBag } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { imgPath } from "../helpers/functions-general";

const Header = ({ imgHead }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(scrollY));
    return window.removeEventListener("scroll", () =>
      setScrollPosition(scrollY)
    );
  }, []);

  return (
    <header className="fixed top-15 bg-white left-0 w-full z-10">
      <div className="container ">
        <div className="wrapper flex justify-between items-center gap-5 py-4 px-10">
          <button
            className={`${isOpen ? "active" : ""} menu-btn md:hidden `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`${scrollPosition === 0 ? "bg-black" : "bg-black"} ${
                isOpen && "!bg-black"
              }`}
            ></span>
            <span
              className={`${scrollPosition === 0 ? "bg-black" : "bg-black"} ${
                isOpen && "!bg-black"
              }`}
            ></span>
            <span
              className={`${scrollPosition === 0 ? "bg-black" : "bg-black"} ${
                isOpen && "!bg-black"
              }`}
            ></span>
          </button>
          {/* NAVIGATION */}
          <nav
            className={` md:static fixed top-[115px] left-0 bg-white w-full h-screen md:h-auto md:w-auto md:bg-transparent z-10 ${
              isOpen ? "text-black block" : "hidden md:block"
            }`}
          >
            <ul className="Navigation flex main-nav gap-5 flex-col md:flex-row translate-x-[50px] md:translate-x-0 translate-y-[50px] md:translate-y-0 w-[75%] md:w-auto">
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
                <NavLink to="/">New & Featured</NavLink>
              </li>
              <li>
                <NavLink to="/">Gift</NavLink>
              </li>
            </ul>
          </nav>
          {/* LOGO */}
          <div className="md:pr-[7rem]">
            <Link to="/">
              <img src={`${imgPath}/${imgHead}`} alt="" />
            </Link>
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
