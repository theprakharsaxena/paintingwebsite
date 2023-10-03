import React, { useEffect, useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(true);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setQuantity(inputValue ? inputValue : 0);
  };
  useEffect(() => {
    if (quantity === 1) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [quantity]);
  return (
    <div className="flex items-center space-x-2">
      <GrFormSubtract
        onClick={handleSubtract}
        className={classNames(
          active
            ? "cursor-pointer rounded-full bg-white border text-2xl border-pink-900"
            : "rounded-full bg-white/50 border text-2xl border-pink-900/50"
        )}
      />
      <input
        value={quantity}
        onChange={handleInputChange}
        className="w-12 border border-pink-900 text-center"
      />
      <GrFormAdd
        onClick={handleAdd}
        className="cursor-pointer rounded-full bg-white border text-2xl border-pink-900"
      />
    </div>
  );
};

export default Quantity;
