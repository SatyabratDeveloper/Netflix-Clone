import { useEffect, useState } from "react";
import { UserNavBar, GuestNavBar } from "..";
import Logo from "/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const userStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  console.log("User status:", userStatus);
  console.log("User Data:", userData);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full top-0 transition-all duration-300  ${
        userStatus ? "fixed z-50" : "absolute"
      } ${
        isScrolled && userStatus
          ? "bg-black"
          : "bg-gradient-to-t from-transparent to-black/25"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          userStatus ? "mx-16 my-4" : "mx-80 px-9 my-6"
        } `}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Netflix_Logo"
            className={`${userStatus ? "h-7" : "h-10"}`}
          />
        </Link>

        {userStatus ? (
          <UserNavBar />
        ) : location.pathname === "/login" ||
          location.pathname === "/signup" ? (
          ""
        ) : (
          <GuestNavBar />
        )}
      </div>
    </div>
  );
};

export default Header;
