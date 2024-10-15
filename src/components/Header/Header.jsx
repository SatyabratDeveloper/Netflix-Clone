import Logo from "/images/logo.svg";
import Avatar from "/images/avatar.png";
import { NavItems } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoNotifications, IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { Button, DropdownMenu } from "../../components";
import { Languages } from "../../constants/constants";

const Header = () => {
  const [isUserActive, setIsUserActive] = useState(false);

  return (
    <div className="w-full absolute top-0 z-50">
      {isUserActive ? (
        <div className="h-20 flex items-center mx-16 text-white">
          <img src={Logo} alt="Netflix_Logo" className="h-10" />
          <div className="flex w-full justify-between">
            <div className="flex items-center ml-10 gap-5">
              {NavItems.map((NavItem) => (
                <NavLink
                  key={NavItem.name}
                  to={NavItem.slug}
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  {NavItem.name}
                </NavLink>
              ))}
            </div>

            <div className="flex gap-5">
              {/* Search button */}
              <button className="">
                <FaSearch className="size-6" />
              </button>

              {/* Notification */}
              <IoNotifications className="size-6" />

              {/* User account */}
              <div className="flex">
                <img src={Avatar} alt="User_Avatar" className="h-7" />
                <IoMdArrowDropdown className="size-6" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-20 mt-1 mx-80 px-9 flex items-center justify-between text-white">
          <img src={Logo} alt="Netflix_Logo" className="h-10" />

          <div className="flex gap-3">
            <DropdownMenu list={Languages} icon={<IoLanguage />} width={130} />
            <Button
              text="Sign In"
              style="w-20 bg-red-600 hover:bg-red-700 text-sm font-bold"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
