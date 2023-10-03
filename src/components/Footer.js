import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-pink-900 p-10 sm:grid-cols-2 grid lg:grid-cols-4 grid-cols-1 gap-10 text-white">
      <div className="flex flex-col space-y-3">
        <Link to="/">
          <img src="/images/whitelogoslvgalleria.png" alt="Logo" className="w-20" />
        </Link>
        <p>
          Welcome to our Platform, where craftsmen can feature and offer their
          unprecedented compositions to an overall crowd. We give a dynamic and
          easy to understand online......
        </p>
        <Link className="border py-2 w-1/2 text-center">Know More</Link>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-2xl">Quick Links</h3>
        <Link className="font-normal" to="/">
          Home
        </Link>
        <Link className="font-normal" to="/about">
          About Us
        </Link>
        <Link className="font-normal" to="/services">
          Services
        </Link>
        <Link className="font-normal" to="/shop">
          Shop
        </Link>
        <Link className="font-normal" to="/contact">
          Contact
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-2xl">Site Links</h3>
        <Link className="font-normal" to="/about">
          Return Policy
        </Link>
        <Link className="font-normal" to="/services">
          Terms & Conditions
        </Link>
        <Link className="font-normal" to="/shop">
          Privacy Policy
        </Link>
        <Link className="font-normal" to="/contact">
          Shipping
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <h3 className="text-2xl">Social</h3>
        <div className="flex space-x-5">
          <Link>
            <img
              src="/images/instagramicon.png"
              alt="Instagram"
              className="w-7"
            />
          </Link>
          <Link>
            <img
              src="/images/facebookicon.png"
              alt="Facebook"
              className="w-7"
            />
          </Link>
          <Link>
            <img
              src="/images/linkedinicon.png"
              alt="LinkedIn"
              className="w-7"
            />
          </Link>
          <Link>
            <img src="/images/twittericon.png" alt="Twitter" className="w-7" />
          </Link>
        </div>
        <div className="flex space-x-2">
          <img src="/images/playstore.png" alt="Play Store" className="w-32" />
          <img src="/images/appstore.png" alt="App Store" className="w-32" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
