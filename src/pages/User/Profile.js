import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { Helmet } from "react-helmet";
import { BiChevronRight, BiSolidUserAccount } from "react-icons/bi";
import { BsFillFolderFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FaUserAlt, FaWallet } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const userName = user?.name;
  const [sidePage, setSidePage] = useState("profile_information");

  function handleSidePageClick(value) {
    setSidePage(value);
  }

  return (
    <>
      <Helmet>
        <title>Profile - SLV Galleria</title>
        <meta
          name="description"
          content="Discover who we are, our mission, and our commitment to serving our customers. Learn about our company's history, values, and the team behind our success."
        />
        <meta
          name="keywords"
          content="about us, company history, mission, values, team, customer service"
        />
      </Helmet>
      <div>
        <div className="p-9 bg-black"></div>
        <section className="py-5 md:px-2 px-[5%] xl:px-[5%] bg-gray-200">
          <div className="grid md:grid-cols-12 md:gap-2 gap-5 xl:gap-5">
            <div className="hidden md:flex md:col-span-4 lg:col-span-3 col-span-3 flex-col md:space-y-2 space-y-5 xl:space-y-5 h-min">
              <div className="bg-white flex space-x-3 items-center p-3">
                <Avatar name={userName} round={true} size="40"/>
                {/* <img
                  src="/images/1.jpg"
                  className="rounded-full h-14 w-14 bg-gray-500"
                /> */}
                <div>
                  <p className="text-[13px]">Hello,</p>
                  <h5 className="font-medium">{userName}</h5>
                </div>
              </div>
              <div className="bg-white flex flex-col">
                <Link
                  to="/orders"
                  className="flex items-center justify-between p-5 text-gray-500 hover:text-pink-500"
                >
                  <div className="flex items-center space-x-3">
                    <BsFillSuitHeartFill className="text-pink-500 text-2xl" />
                    <h5 className="text-lg font-medium">MY ORDERS</h5>
                  </div>
                  <BiChevronRight className="text-3xl text-gray-500" />
                </Link>
                <div className="border-b border-gray-200"></div>
                <div to="/orders" className="flex flex-col py-5">
                  <div className="flex items-center space-x-3 px-5 pb-5">
                    <FaUserAlt className="text-pink-500 text-2xl" />
                    <h5 className="text-lg text-gray-500">ACCOUNT SETTINGS</h5>
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3 cursor-pointer"
                      onClick={() => handleSidePageClick("profile_information")}
                    >
                      Profile Information
                    </h3>
                    <h3
                      className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3 cursor-pointer"
                      onClick={() => handleSidePageClick("manage_addresses")}
                    >
                      Manage Addresses
                    </h3>
                    <h3
                      className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3 cursor-pointer"
                      onClick={() =>
                        handleSidePageClick("pan_card_information")
                      }
                    >
                      PAN Card Information
                    </h3>
                  </div>
                </div>
                <div className="border-b border-gray-200"></div>
                <div to="/orders" className="flex flex-col py-5">
                  <div className="flex items-center space-x-3 px-5 pb-5">
                    <FaWallet className="text-pink-500 text-2xl" />
                    <h5 className="text-lg text-gray-500">PAYMENTS</h5>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3">
                      Gift Cards
                    </h3>
                    <h3 className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3">
                      Saved UPI
                    </h3>
                    <h3 className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3">
                      Saved Cards
                    </h3>
                  </div>
                </div>
                <div className="border-b border-gray-200"></div>
                <div to="/orders" className="flex flex-col py-5">
                  <div className="flex items-center space-x-3 px-5 pb-5">
                    <BsFillFolderFill className="text-pink-500 text-2xl" />
                    <h5 className="text-lg text-gray-500">MY STUFF</h5>
                  </div>
                  <div className="flex flex-col">
                    <Link className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3">
                      My Coupons
                    </Link>
                    <Link className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3">
                      All Notifications
                    </Link>
                    <Link className="hover:text-pink-600 hover:bg-pink-50 ps-14 py-3">
                      My Wishlist
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9 bg-white h-min">
              {sidePage === "profile_information" && (
                <div className="grid grid-cols-1 py-6 px-8 gap-14">
                  <div className="flex flex-col space-y-6">
                    <div className="flex space-x-6 items-center">
                      <h4 className="text-lg font-medium">
                        Personal Information
                      </h4>
                      <span className="text-sm text-pink-500 cursor-pointer font-medium">
                        Edit
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-5 sm:space-y-0 md:space-y-5 lg:space-y-0 sm:space-x-5 md:space-x-0 lg:space-x-5">
                      <input
                        className="p-2.5 bg-gray-100 border border-gray-300 w-64 sm:w-44 md:w-64 lg:w-56 xl:w-64"
                        placeholder="First Name"
                      />
                      <input
                        className="p-2.5 bg-gray-100 border border-gray-300 w-64 sm:w-44 md:w-64 lg:w-56 xl:w-64"
                        placeholder="Last Name"
                      />
                      <button className="bg-pink-500 px-10 py-2.5 w-32 text-white">
                        SAVE
                      </button>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-sm">Your Gender</h4>
                      <div className="flex space-x-10">
                        <div className="flex space-x-3">
                          <input type="radio" />
                          <h5>Male</h5>
                        </div>
                        <div className="flex space-x-3">
                          <input type="radio" />
                          <h5>Female</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div className="flex space-x-6 items-center">
                      <h4 className="text-lg font-medium">Email Address</h4>
                      <span className="text-sm text-pink-500 cursor-pointer font-medium">
                        Edit
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
                      <input
                        className="p-2.5 bg-gray-100 border border-gray-300 w-64"
                        placeholder="Email"
                      />
                      <button className="bg-pink-500 px-10 py-2.5 w-32 text-white">
                        SAVE
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div className="flex space-x-6 items-center">
                      <h4 className="text-lg font-medium">Mobile Number</h4>
                      <span className="text-sm text-pink-500 cursor-pointer font-medium">
                        Edit
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
                      <input
                        className="p-2.5 bg-gray-100 border border-gray-300 w-64"
                        placeholder="Mobile Number"
                      />
                      <button className="bg-pink-500 px-10 py-2.5 w-32 text-white">
                        SAVE
                      </button>
                    </div>
                  </div>
                  <button className="text-sm text-pink-500 cursor-pointer font-medium text-left">
                    Deactivate Account
                  </button>
                </div>
              )}
              <img
                src="/images/profilefooter.png"
                alt="Profile Footer"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
