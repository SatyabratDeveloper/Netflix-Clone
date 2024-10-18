import { useState } from "react";
import { UserLandingPage, GuestLandingPage } from "../../components";

const Home = () => {
  const [isUserActive, setIsUserActive] = useState(false);

  return <div>{isUserActive ? <UserLandingPage /> : <GuestLandingPage />}</div>;
};
export default Home;
