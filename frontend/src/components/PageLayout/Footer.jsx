import { Languages, FooterItems } from "../../constants/constants";
import { DropdownMenu } from "..";
import { IoLanguage } from "react-icons/io5";
import { useSelector } from "react-redux";

const Footer = () => {
  const userStatus = useSelector((state) => state.auth.status);

  return (
    <div className="mx-80 pt-12 pb-24">
      <div className="mx-10 text-neutral-400 font-medium">
        <ul className="grid grid-cols-4 gap-4">
          {FooterItems.map((item) => (
            <li
              key={item.id}
              className={`text-xs ${
                userStatus ? "hover:underline" : "underline"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="mt-16">
          {userStatus ? (
            ""
          ) : (
            <DropdownMenu list={Languages} icon={<IoLanguage />} width="w-32" />
          )}

          <h1 className="text-sm mt-10">© 2025 developed by Satyabrat Jha</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
