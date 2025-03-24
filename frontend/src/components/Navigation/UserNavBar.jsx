import Avatar from "/images/avatar.png";
import { NavItems, UserProfile } from "../../constants/constants";
import { Link, NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const UserNavBar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.userData?.username);

  const signout = async () => {
    try {
      // await firebaseSignOut();
      dispatch(logout());
    } catch (error) {
      console.log("Something went wrong. Please try again later.");
      console.log(`UserNavBar :: signout :: error: ${error}`);
    }
  };

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
          <FaSearch className="size-5" />
        </button>

        {/* Notification */}
        <button className="">
          <IoNotifications className="size-5" />
        </button>

        {/* User account */}
        <Menu>
          <MenuButton className="flex items-center gap-1">
            <img src={Avatar} alt="User_Avatar" className="h-7 rounded-sm" />
            <IoMdArrowDropdown className="size-5" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="mt-1 w-52 rounded-sm bg-black/75 text-sm text-white shadow-lg transition duration-100 ease-out"
          >
            <div className="flex items-center gap-3 my-3 mx-3 cursor-default">
              <img src={Avatar} alt="User_Avatar" className="h-7 rounded-sm" />
              <span>{username || "User"}</span>
            </div>

            <div className="h-0.5 bg-white/5" />

            {UserProfile.map((userProfileItem) => (
              <MenuItem key={userProfileItem.id} className="my-3 mx-3">
                <Link
                  to={userProfileItem.slug}
                  className="flex items-center gap-3 hover:underline"
                >
                  <userProfileItem.icon className="text-xl" />
                  <span>{userProfileItem.label}</span>
                </Link>
              </MenuItem>
            ))}

            <div className="h-0.5 bg-white/5" />

            <button
              onClick={signout}
              className="my-3 w-full hover:text-neutral-300"
            >
              Sign out of Netflix
            </button>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default UserNavBar;
