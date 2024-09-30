import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState, useRef, useCallback } from "react";
import { Languages } from "../constants/constants";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]); // Track selected language
  const dropdownRef = useRef(); // Ref to close dropdown when clicked outside

  const handleSelect = (language) => {
    setSelectedLanguage(language); // Set selected language
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
        className="flex items-center justify-center border border-gray-500 rounded-md px-4 py-[3px]"
      >
        <IoLanguage className="mr-1" />
        <span>{selectedLanguage}</span>
        <IoMdArrowDropdown className="ml-2.5" />
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-32 bg-white border border-gray-500 rounded-md shadow-lg">
          {Languages.map((language) => (
            <li
              key={language}
              onClick={() => handleSelect(language)}
              className="text-black cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
