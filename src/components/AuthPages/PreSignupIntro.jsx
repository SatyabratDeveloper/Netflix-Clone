import { Link } from "react-router-dom";
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
        <Link to="signup">
          <Button
            buttonType="primary"
            height="h-[3.5rem]"
            width="w-52"
            label="Get Started"
            size="text-2xl"
            font="font-bold"
            icon={<FaChevronRight />}
          />
        </Link>
      </div>
    </>
  );
};

export default PreSignupIntro;
