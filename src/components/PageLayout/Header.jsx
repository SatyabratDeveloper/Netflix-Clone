import { useState } from "react";
import { UserNavBar, GuestNavBar } from "..";
import Logo from "/images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isUserActive, setIsUserActive] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full absolute top-0 z-50">
      <div
        className={`h-20 flex items-center justify-between mt-1 ${
          isUserActive ? "mx-16" : "mx-80 px-10"
        } `}
      >
        <Link to="/">
          <img src={Logo} alt="Netflix_Logo" className="h-10" />
        </Link>

        {isUserActive ? (
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
