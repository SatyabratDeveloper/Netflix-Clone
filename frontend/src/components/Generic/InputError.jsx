import { IoCloseCircleOutline } from "react-icons/io5";

const InputError = ({ errors }) => {
  return (
    <p className="flex text-red-600 text-xs font-medium mb-2">
      <IoCloseCircleOutline className="text-base mr-0.5" />
      {errors}
    </p>
  );
};

export default InputError;
