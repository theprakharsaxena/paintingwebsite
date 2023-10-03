import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutUser() {
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="flex space-x-1 items-center">
          <h3 className="text-lg">More</h3>
          <HiChevronDown className="text-xl" />
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
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "text-black" : "",
                    "flex px-4 py-2 text-sm w-full"
                  )}
                  to="/about"
                >
                  About Us
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
                  to="/contact"
                >
                  Contact Us
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
                  to="/services"
                >
                  Services
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
