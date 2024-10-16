import { Button, Input } from "../../components";
import { FaChevronRight } from "react-icons/fa6";
import HomeBorder from "/images/home-border.png";

const LogoutHome = () => {
  return (
    <div className="bg-homeBg h-screen text-white pt-20 flex justify-center">
      <div className="flex flex-col justify-center items-center h-full w-2/5">
        <h1 className="text-6xl font-black text-center leading-tight">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-xl font-bold my-7">
          Starts at ₹149. Cancel at any time.
        </h2>
        <p className="text-base font-normal">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="w-full my-4 flex justify-center gap-2">
          <Input type="email" label="Email address" />
          <Button
            type="primary"
            width="w-52"
            label="Get Started"
            size="text-2xl"
            font="font-bold"
            icon={<FaChevronRight />}
          />
        </div>
      </div>
      <img
        src={HomeBorder}
        alt="home_border"
        className="absolute bottom-1 left-0"
      />
    </div>
  );
};
export default LogoutHome;
