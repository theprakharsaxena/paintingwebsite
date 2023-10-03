import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiFillShop } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import LoginUser from "../LoginUser";
import { BsCart3 } from "react-icons/bs";
import AboutUser from "../AboutUser";

const NavBarData = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/shop",
    title: "Shop",
  },
];

const NavBar1 = () => {
  const [nav, setNav] = useState(false);
  const [color, setcolor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [image, setImage] = useState("/images/logoslvgalleria.png");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setcolor("#000000");
        setTextColor("#ffffff");
        setImage("/images/logoslvgalleria.png");
      } else {
        setcolor("transparent");
        setTextColor("#ffffff");
        setImage("/images/logoslvgalleria.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: `${color}`,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      >
        <div className="max-w-[1280px] m-auto flex justify-between items-center py-1 px-4 md:px-0 text-white">
          <Link to="/">
            <img src={image} width={60} height={60} alt="SLV Galleria Logo" />
          </Link>
          <ul
            style={{ color: `${textColor}` }}
            className="hidden sm:flex items-center"
          >
            <li className="m-4 hover:underline hover:underline-offset-8 font-mono hover:text-pink-500">
              <Link to="shop">Shop</Link>
            </li>
            <li className="m-4 font-mono hover:text-pink-500">
              <LoginUser />
            </li>
            {/* <li className="m-4 hover:underline hover:underline-offset-8 font-mono hover:text-pink-500">
              <Link to="/shop">Become a Seller</Link>
            </li> */}
            <li className="m-4 font-mono hover:text-pink-500">
              <AboutUser />
            </li>
            <li className="m-4 font-mono hover:text-pink-500">
              <Link to="/cart" className="relative inline-block">
                <BsCart3 className="text-xl" />
                <span className="absolute top-[-11px] right-[-11px] bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                  3
                </span>
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div
            onClick={handleNav}
            className="block sm:hidden z-10 cursor-pointer hover:text-pink-500 mr-1"
          >
            {nav ? (
              <AiOutlineClose size={20} className="hover:text-pink-500" />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul className="flex flex-col items-center">
              {NavBarData.map(({ link, title }, id) => {
                return (
                  <li
                    key={id}
                    className="m-4 text-4xl hover:underline hover:underline-offset-8 font-mono hover:text-pink-500"
                  >
                    <Link to={link} onClick={handleNav}>
                      {title}
                    </Link>
                  </li>
                );
              })}
              <li className="m-4 text-4xl font-mono hover:text-pink-500">
                <Link to="/cart" className="flex items-center space-x-2">
                  <span>&#8377;0.00</span>
                  <HiShoppingBag />
                </Link>
              </li>
              <li className="m-4 text-4xl font-mono hover:text-pink-500">
                <Link to="/loginsignup">
                  <FaUserAlt />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <p style={{ backgroundColor: `${scrollColor}` }} className="h-0.5"></p> */}
      </div>
    </>
  );
};

export default NavBar1;
