import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import { FAQs } from "../../constants/constants";

const FAQSection = () => {
  return (
    <div className="mx-80">
      <div className="mx-10 text-2xl font-medium text-white">
        <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
        {FAQs.map((FAQ) => (
          <Disclosure key={FAQ.id}>
            {({ open }) => (
              <>
                <DisclosureButton className="w-full flex items-center justify-between px-7 py-5 mt-2 bg-neutral-800 hover:bg-neutral-700">
                  <span>{FAQ.question}</span>
                  <IoCloseOutline
                    className={`${
                      open
                        ? "transform duration-100"
                        : "rotate-45 transform duration-100"
                    } h-11 w-11`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-neutral-800 px-7 py-5 mt-0.5">
                  {FAQ.answer}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
export default FAQSection;
