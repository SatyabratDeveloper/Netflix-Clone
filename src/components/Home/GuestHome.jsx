import { PreSignup } from "..";
import HomeBorder from "/images/home-border.png";

const GuestHome = () => {
  return (
    <div className="bg-homeBg h-screen text-white pt-20 flex justify-center">
      <div className="flex flex-col justify-center items-center h-full w-2/5">
        <h1 className="text-6xl font-black text-center leading-tight">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-xl font-bold my-7">
          Starts at ₹149. Cancel at any time.
        </h2>

        <PreSignup />
      </div>
      <img
        src={HomeBorder}
        alt="home_border"
        className="absolute bottom-1 left-0"
      />
    </div>
  );
};
export default GuestHome;
