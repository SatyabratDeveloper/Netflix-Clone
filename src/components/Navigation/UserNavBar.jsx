import Avatar from "/images/avatar.png";
import { NavItems } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const UserNavBar = () => {
  return (
    <div className="flex w-full justify-between text-white">
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
        <button className="">
          <IoNotifications className="size-6" />
        </button>

        {/* User account */}
        <div className="flex cursor-pointer">
          <img src={Avatar} alt="User_Avatar" className="h-7" />
          <IoMdArrowDropdown className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
