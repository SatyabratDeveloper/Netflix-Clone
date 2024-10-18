import { useState } from "react";
import { UserNavBar, GuestNavBar } from "..";

const Header = () => {
  const [isUserActive, setIsUserActive] = useState(false);

  return (
    <div className="w-full absolute top-0 z-50">
      {isUserActive ? <UserNavBar /> : <GuestNavBar />}
    </div>
  );
};
export default Header;
