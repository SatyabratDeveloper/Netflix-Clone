import { useState } from "react";
import { UserHome, GuestHome } from "../../components";

const Home = () => {
  const [isUserActive, setIsUserActive] = useState(false);

  return <div>{isUserActive ? <UserHome /> : <GuestHome />}</div>;
};
export default Home;
