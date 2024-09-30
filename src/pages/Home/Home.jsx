import { useState } from "react";
import { LogoutHome, LoginHome } from "../../components";

const Home = () => {
  const [isUserActive, setIsUserActive] = useState(true);

  return (
    <div className="">
      {isUserActive ? <LogoutHome /> : <LoginHome />}
    </div>
  );
};
export default Home;
