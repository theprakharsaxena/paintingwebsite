import React, { useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import ReorderIcon from "@mui/icons-material/Reorder";
import Category from "./Category";
import Product from "./Product";
import Order from "./Order";
// import Header from "../../components/Header";
// import BlogsTable from "./BlogsTable";

const OldDashboard = () => {
  const [sidePage, setSidePage] = useState("profile_information");

  function handleAdminSideBar(value) {
    setSidePage(value);
  }

  return (
    <>
      <div className="bg-pink-200">
        <div className="flex items-center space-x-2 text-xl font-mono w-full px-10 py-3 border-4 border-b-black">
          <AdminPanelSettingsIcon />
          <h2>Admin Panel</h2>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-1 w-full border border-r-2 border-black">
            <ul className=" flex flex-col space-y-1 py-1">
              <li
                className="cursor-pointer pl-5 py-1.5 border border-b-black hover:bg-black hover:text-white flex space-x-3"
                onClick={() => handleAdminSideBar("category")}
              >
                <CategoryIcon />
                <h3>Category</h3>
              </li>
              <li
                className="cursor-pointer pl-5 py-1.5 border border-b-black hover:bg-black hover:text-white flex space-x-3"
                onClick={() => handleAdminSideBar("product")}
              >
                <InventoryIcon />
                <h3>Product</h3>
              </li>
              <li
                className="cursor-pointer pl-5 py-1.5 border border-b-black hover:bg-black hover:text-white flex space-x-3"
                onClick={() => handleAdminSideBar("order")}
              >
                <ReorderIcon />
                <h3>Order</h3>
              </li>
              <li
                className="cursor-pointer pl-5 py-1.5 border border-b-black hover:bg-black hover:text-white flex space-x-3"
                onClick={() => handleAdminSideBar()}
              >
                <h3>Home1</h3>
              </li>
              <li
                className="cursor-pointer pl-5 py-1.5 border border-b-black hover:bg-black hover:text-white flex space-x-3"
                onClick={() => handleAdminSideBar()}
              >
                <h3>Home1</h3>
              </li>
            </ul>
          </div>
          <div className="col-span-5 w-full border border-l-2 border-black">
            {sidePage === "category" && <Category />}
            {sidePage === "product" && <Product />}
            {sidePage === "order" && <Order />}
          </div>
        </div>
      </div>
    </>
  );
};

export default OldDashboard;
