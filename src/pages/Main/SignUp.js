import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle, FcShop } from "react-icons/fc";
import { useDispatch } from "react-redux";
import signupapi from "../../services/authentication/signupapi";
import toast from "react-hot-toast";
import { addUser } from "../../redux/slice/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    answer: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signupapi({
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        address: inputs.address,
        answer: inputs.answer,
      });
      toast.success(data?.message);
      if (data?.success) {
        setLoading(false);
        dispatch(addUser(data?.user));
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-9 bg-black"></div>
      <section className="h-screen grid md:grid-cols-2 grid-cols-1">
        <div className="bg-white flex justify-start items-center px-[10%]">
          <div className="flex flex-col w-full space-y-5">
            <h3 className="text-3xl font-semibold pb-[3%]">Register Now</h3>
            <form
              onSubmit={(e) => {
                setLoading(true);
                handleSubmit(e);
              }}
            >
              <div className="flex flex-col space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1">
                    <label>Name</label>
                    <input
                      required
                      name="name"
                      value={inputs.name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      className="flex p-2 rounded-md w-full bg-pink-200 text-pink-900 placeholder:text-pink-900"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label>Email</label>
                    <input
                      required
                      name="email"
                      value={inputs.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      className="flex p-2 rounded-md w-full bg-pink-200 text-pink-900 placeholder:text-pink-900"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1">
                    <label>Password</label>
                    <input
                      required
                      name="password"
                      value={inputs.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="Enter Password"
                      className="flex p-2 rounded-md w-full bg-pink-200 text-pink-900 placeholder:text-pink-900"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label>Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={inputs.phone}
                      onChange={handleChange}
                      placeholder="Enter your Phone Number"
                      className="flex p-2 rounded-md w-full bg-pink-200 text-pink-900 placeholder:text-pink-900"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <label>Address</label>
                  <input
                    required
                    name="address"
                    value={inputs.address}
                    onChange={handleChange}
                    placeholder="Enter your Address"
                    className="flex p-2 rounded-md w-full bg-pink-200 text-pink-900 placeholder:text-pink-900"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 items-center mt-5">
                <input
                  required
                  name="answer"
                  value={inputs.answer}
                  onChange={handleChange}
                  placeholder="Enter your Favorite Sports"
                  className="flex p-2 rounded-md w-full bg-pink-200 text-pink-900 placeholder:text-pink-900"
                />
                <button
                  type="submit"
                  className="p-2 m-1 bg-pink-600 text-white rounded-lg max-h-10"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex space-x-2">
              <h5>Already have an account?</h5>
              <Link to="/log-in" className="text-pink-600 hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-pink-600 hidden md:flex justify-center items-center">
          <img src="/images/loginphoto.png" className="" alt="Login Photo" />
        </div>
      </section>
    </>
  );
};

export default SignUp;
