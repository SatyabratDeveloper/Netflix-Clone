import { UserLandingPage, GuestLandingPage } from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
  const userStatus = useSelector((state) => state.auth.status);

  return <div>{userStatus ? <UserLandingPage /> : <GuestLandingPage />}</div>;
};
export default Home;
