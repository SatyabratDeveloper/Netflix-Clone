import { FooterItems } from "../../constants/constants";
import { DropdownMenu } from "../../components";
import { Languages } from "../../constants/constants";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mx-80 pt-12 pb-24">
      <div className="mx-10 text-neutral-400 font-bold">
        <ul className="grid grid-cols-4 gap-3">
          {FooterItems.map((item) => (
            <li key={item.id} className="text-sm underline">
              {item.label}
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <DropdownMenu list={Languages} icon={<IoLanguage />} width="w-32" />
          <h1 className="text-sm mt-10">© 2024 Satyabrat Jha</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
