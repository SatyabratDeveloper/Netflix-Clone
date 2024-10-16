import { InputField, Button } from "..";
import { FaChevronRight } from "react-icons/fa6";

const PreSignupIntro = () => {
  return (
    <>
      <p className="text-base font-normal text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="w-full my-4 flex justify-center gap-2">
        <InputField type="email" label="Email address" width="w-[28rem]" />
        <Button
          type="primary"
          width="w-52"
          label="Get Started"
          size="text-2xl"
          font="font-bold"
          icon={<FaChevronRight />}
        />
      </div>
    </>
  );
};
export default PreSignupIntro;
