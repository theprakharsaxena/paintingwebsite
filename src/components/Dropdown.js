import React, { useState } from "react";
import { BiUpArrow, BiRightArrow } from "react-icons/bi";

const Dropdown = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-pink-900">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="text-lg">{title}</h3>
        <span
          className={`transition-transform ${
            isOpen ? "transform rotate-50" : "transform rotate-0"
          }`}
        >
          {isOpen ? <BiUpArrow className="text-pink-900"/> : <BiRightArrow className="text-pink-900"/>}
        </span>
      </div>
      {isOpen && (
        <div className="faq-dropdown__description mb-3">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
