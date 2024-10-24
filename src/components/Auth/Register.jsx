import { useNavigate } from "react-router-dom";
import { InputField, Button } from "..";
import { FaChevronRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const preSignup = (data) => {
    console.log(data);
    navigate("/signup");
  };

  return (
    <>
      <p className="text-base font-normal text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <form
        onSubmit={handleSubmit(preSignup)}
        className="flex justify-center gap-2 w-full my-4"
      >
        <div className="flex flex-col gap-3 w-[28rem]">
          {/* Email Input */}
          <InputField
            type="email"
            label="Email address"
            width="w-full"
            errors={errors.email?.message}
            register={register("email", {
              required: "Email is required.",
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Please enter a valid email address.",
              },
            })}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          buttonType="primary"
          height="h-[3.5rem]"
          width="w-52"
          label="Get Started"
          size="text-2xl"
          font="font-bold"
          icon={<FaChevronRight />}
        />
      </form>
    </>
  );
};

export default Register;
