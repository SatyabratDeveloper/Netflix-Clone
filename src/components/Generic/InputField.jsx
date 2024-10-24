import { useId } from "react";
import { InputError } from "..";

const InputField = ({ label, type, width, errors, register }) => {
  const id = useId();

  return (
    <>
      <div className="relative">
        <input
          type={type}
          id={id}
          autoComplete="off"
          placeholder={label}
          {...register}
          className={`peer p-3.5 block text-gray-100 border rounded-md bg-transparent text-base font-normal placeholder:text-transparent
        focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 h-[3.5rem] ${width} ${
            errors ? "border-red-600" : "border-neutral-500"
          }`}
        />
        <label
          htmlFor={id}
          className="absolute top-0 start-0 p-3.5 h-full text-base font-bold text-gray-400 truncate pointer-events-none transition ease-in-out duration-200
            border border-transparent origin-[0_0] peer-focus:scale-75 peer-focus:translate-x-1 peer-focus:-translate-y-1 peer-focus:text-gray-400
            peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:translate-x-1 peer-[:not(:placeholder-shown)]:-translate-y-1
            peer-[:not(:placeholder-shown)]:text-gray-400"
        >
          {label}
        </label>
      </div>

      {/* To display InputField errors */}
      {errors && <InputError errors={errors} />}
    </>
  );
};

export default InputField;
