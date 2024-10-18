import Logo from "/images/logo.svg";
import { Button, DropdownMenu } from "../../components";
import { Languages } from "../../constants/constants";
import { IoLanguage } from "react-icons/io5";

const GuestNavBar = () => {
  return (
    <div className="h-20 mt-1 mx-80 px-9 flex items-center justify-between">
      <img src={Logo} alt="Netflix_Logo" className="h-10" />

      <div className="flex gap-3">
        <DropdownMenu list={Languages} icon={<IoLanguage />} width="w-32" />
        <Button
          type="primary"
          width="w-20"
          label="Sign In"
          size="text-sm"
          font="font-bold"
        />
      </div>
    </div>
  );
};
export default GuestNavBar;
