import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Services from "../pages/SLVMore/Services";
import About from "../pages/SLVMore/About";
import Contact from "../pages/SLVMore/Contact";
import Cart from "../pages/User/Cart";
import Home from "../pages/Main/Home";
import Shop from "../pages/ShowProducts/Shop";
import NavBar from "../components/NavBar/NavBar1";
import Login from "../pages/Main/Login";
import SignUp from "../pages/Main/SignUp";
import Profile from "../pages/User/Profile";
import Orders from "../pages/User/Orders";
import SingleProduct from "../pages/ShowProducts/SingleProduct";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminRegister from "../pages/admin/AdminRegister";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserNavBar from "./NavBar/UserNavBar";
import HomeNavBar from "./NavBar/HomeNavBar";
import AdminProduct from "../pages/admin/AdminProduct";
import NavBar3 from "../components/NavBar/NavBar3";

const Routes = () => {
  const userValue = useSelector((state) => state.user.value);
  const adminValue = useSelector((state) => state.admin.value);
  const customization = useSelector((state) => state.customization);
  const location = useLocation();
  const adminId = adminValue?._id;
  const uid = userValue?._id;
  const isAdminPage = location.pathname.startsWith("/admin/dashboard");

  return (
    <>
      <HomeNavBar />
      <UserNavBar />
      {isAdminPage ? <NavBar3 /> : <Outlet />}
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/dashboard/product" element={<AdminProduct />} />
        {/* <Route path="/admin-register" element={<AdminRegister />} /> */}
      </Switch>
    </>
  );
};

export default Routes;
