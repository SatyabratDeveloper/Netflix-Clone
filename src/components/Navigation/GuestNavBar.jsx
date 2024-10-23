import { Button, DropdownMenu } from "..";
import { Languages } from "../../constants/constants";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";

const GuestNavBar = () => {
  return (
    <div className="flex gap-3">
      <DropdownMenu
        list={Languages}
        icon={<IoLanguage />}
        height="h-8"
        width="w-32"
      />
      <Link to="/login">
        <Button
          buttonType="primary"
          height="h-8"
          width="w-20"
          label="Sign In"
          size="text-sm"
          font="font-bold"
        />
      </Link>
    </div>
  );
};

export default GuestNavBar;
