import { useState, Fragment } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";

const DropdownMenu = ({ list, icon, width }) => {
  const [selected, setSelected] = useState(list[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <ListboxButton
          className={`flex justify-between items-center gap-3 py-1 px-2 cursor-default text-white font-normal border border-neutral-500 rounded-md bg-black ${width}`}
        >
          <div className="flex items-center gap-2">
            {icon}
            {selected.label}
          </div>
          <IoMdArrowDropdown className="h-4 w-4" />
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            className={`absolute mt-0.5 rounded-md shadow-lg bg-white text-sm font-medium ${width}`}
          >
            {list.map((option) => (
              <ListboxOption
                key={option.code}
                className={({ active }) =>
                  `cursor-default px-4 py-1.5 ${
                    active
                      ? "first:rounded-t-md last:rounded-b-md bg-blue-600 text-white"
                      : "text-gray-900"
                  }`
                }
                value={option}
              >
                <span>{option.label}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};
export default DropdownMenu;
