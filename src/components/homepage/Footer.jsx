import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Footer = ({ img3, submit }) => {
  return (
    <footer className="mx-auto">
      <div className="container py-5">
        <div className="wrap flex flex-col md:flex-row justify-between md:px-20 ">
          <div className="right flex flex-col">
            <Link to="/">
              <img src={`${imgPath}/${img3}`} alt="" />
            </Link>

            <div className="right--contents flex flex-col md:items-end">
              <p>
                Get newsletter update for upcoming product and best discount for
                all item
              </p>
              <div className="flex md:flex-end gap-5 my-3 place-content-center">
                <input
                  type="text"
                  placeholder="Your Email"
                  className=" bg-transparent border border-gray-400 md:w-[20vw] rounded-3xl md:h-[50px] px-5"
                />
                <button className="text-white bg-black rounded-2xl py-2 px-4  text-[20px] font-semibold border hover:border-black hover:border hover:bg-transparent hover:text-black mb-5">
                  <Link to="/">{submit}</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="left md:flex md:flex-row grid grid-cols-[_1fr_.5fr] md:grid-cols-none gap-10 ">
            <div className="footer-box">
              <h6 className="mb-5">Product</h6>
              <ul>
                <li>
                  <Link to="/">TShirt</Link>
                </li>
                <li>
                  <Link to="/">Jacket</Link>
                </li>
                <li>
                  <Link to="/">Shoes</Link>
                </li>
                <li>
                  <Link to="/">Pants</Link>
                </li>
                <li>
                  <Link to="/">Sunglasses</Link>
                </li>
                <li>
                  <Link to="/">Tuxedo</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6 className="mb-5">Categories</h6>
              <ul>
                <li>
                  <Link to="/">Man</Link>
                </li>
                <li>
                  <Link to="/">Woman</Link>
                </li>
                <li>
                  <Link to="/">Kids</Link>
                </li>
                <li>
                  <Link to="/">Gifts</Link>
                </li>
                <li>
                  <Link to="/">New Arrival</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6 className="mb-5">Our Social Media</h6>
              <ul>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black text-white py-5 px-10">
        <div className="wraptwo flex flex-col md:flex-row md:justify-between justify-center items-center gap-3 md:gap-0">
          <small>© 2023 Tulos Production</small>
          <div>
            <ul className="flex gap-5">
              <li className="opacity-100">
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li className="opacity-100">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="opacity-100">
                <Link to="/">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
