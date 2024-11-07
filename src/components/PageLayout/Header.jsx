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

  return (
    <div className="w-full absolute top-0 z-50">
      <div
        className={`h-20 flex items-center justify-between mt-1 ${
          userStatus ? "mx-16" : "mx-80 px-10"
        } `}
      >
        <Link to="/">
          <img src={Logo} alt="Netflix_Logo" className="h-10" />
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
