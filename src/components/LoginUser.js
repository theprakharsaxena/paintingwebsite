import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { HiChevronDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";
import { removeAdmin } from "../redux/slice/adminSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LoginUser() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const user = useSelector((state) => state.user.value);
  const admin = useSelector((state) => state.admin.value);
  console.log("USER", user?._id);
  const uid = user?._id;
  const adminUID = admin?._id;
  const userName = user?.name;
  const adminName = admin?.name;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (adminUID) {
  //     setIsAdminLogin(true);
  //   } else {
  //     setIsAdminLogin(false);
  //   }
  // }, [adminUID]);

  useEffect(() => {
    if (uid) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [uid]);

  function handleremoveUser() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button>
          {!isAuthenticated ? (
            <Link to="/log-in" className="px-10 py-1 bg-pink-900">
              Login
            </Link>
          ) : (
            <div className="flex space-x-1 py-1 items-center">
              <h3 className="">{userName ? userName : ""}</h3>
              <HiChevronDown className="text-xl " />
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-pink-900 text-white shadow-lg focus:outline-none">
          <div className="py-1">
            {!isAuthenticated ? (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "text-black" : "",
                      "flex px-4 py-2 text-sm w-full"
                    )}
                  >
                    Log In
                  </button>
                )}
              </Menu.Item>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={classNames(
                        active ? "text-black" : "",
                        "block px-4 py-2 text-sm"
                      )}
                      to="/profile"
                    >
                      My Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={classNames(
                        active ? "text-black" : "",
                        "block px-4 py-2 text-sm"
                      )}
                      to="/orders"
                    >
                      Orders
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? "text-black" : "",
                        "flex px-4 py-2 text-sm w-full"
                      )}
                      onClick={() => {
                        handleremoveUser();
                      }}
                    >
                      Log Out
                    </button>
                  )}
                </Menu.Item>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
