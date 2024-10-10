import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState, useRef, useCallback } from "react";

const DropdownMenu = ({ list, style, icon, iconStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(list[0]);
  const dropdownRef = useRef(); // Ref to close dropdown when clicked outside

  const handleSelect = (language) => {
    setSelectedOption(language); // Set selected language
    setIsOpen(false); // Close dropdown after selection
  };

  // Close the dropdown if clicked outside
  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-between px-3 font-normal border border-neutral-500 rounded-md cursor-default ${style}`}
      >
        <div className="flex justify-center items-center">
          <span className={iconStyle}>{icon}</span>
          <span>{selectedOption}</span>
        </div>
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <ul className="absolute w-11/12 left-0 right-0 m-auto bg-white rounded-lg shadow-lg">
          {list.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="text-sm text-gray-900 cursor-default px-4 py-1 hover:bg-blue-600 hover:text-white first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
