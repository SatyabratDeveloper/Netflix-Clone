import Avatar from "/images/avatar.png";
import { NavItems, UserProfile } from "../../constants/constants";
import { Link, NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdNotificationsOutline } from "react-icons/io";
import axios from "axios";

const UserNavBar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.userData?.username);

  const signout = async () => {
    try {
      await axios.post("/api/v1/users/logout");
      dispatch(logout());
    } catch (error) {
      console.error(
        `UserNavBar :: signout :: error: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className="flex w-full justify-between text-white">
      <div className="flex items-center ml-10 gap-6 text-sm font-light">
        {NavItems.map((NavItem) => (
          <NavLink
            key={NavItem.name}
            to={NavItem.slug}
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            {NavItem.name}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-5">
        {/* Search button */}
        <button className="">
          <IoSearchOutline className="size-6" />
        </button>

        {/* Notification */}
        <button className="">
          <IoMdNotificationsOutline className="size-6" />
        </button>

        {/* // TODO: add children functionality */}

        {/* User account */}
        <Menu>
          <MenuButton className="flex items-center gap-1">
            <img src={Avatar} alt="User_Avatar" className="h-8 rounded-md" />
            <IoMdArrowDropdown className="size-5" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="mt-1 w-52 rounded-sm bg-black/95 text-sm text-white shadow-lg transition duration-100 ease-in-out"
          >
            <div className="flex items-center gap-3 h-12 mx-3 cursor-default">
              <img src={Avatar} alt="User_Avatar" className="h-7 rounded-sm" />
              <span>{username || "User"}</span>
            </div>

            <div className="h-0.5 bg-white/20" />

            {UserProfile.map((userProfileItem) => (
              <MenuItem key={userProfileItem.id} className="my-3 mx-4">
                <Link
                  to={userProfileItem.slug}
                  className="flex items-center gap-3 hover:underline"
                >
                  <userProfileItem.icon className="text-2xl" />
                  <span>{userProfileItem.label}</span>
                </Link>
              </MenuItem>
            ))}

            <div className="h-0.5 bg-white/20" />

            <button
              onClick={signout}
              className="h-12 w-full hover:text-neutral-300 hover:underline"
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
