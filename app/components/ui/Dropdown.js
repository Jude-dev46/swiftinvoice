"use client";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]); // Initialize with the first item

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      <button
        onClick={toggleDropdown}
        className="text-black border-black border-2 bg-white focus:ring-4 focus:outline-none focus:ring-[#ffd875] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <span>{selectedItem}</span>
        <RiArrowDropDownFill />
      </button>

      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg border-2 border-black shadow sm:w-44">
          <ul
            className="py-2 text-sm text-black"
            aria-labelledby="dropdownDividerButton"
          >
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`block px-4 py-2 hover:bg-[#ffd875] ${
                    item === selectedItem ? " font-bold" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
