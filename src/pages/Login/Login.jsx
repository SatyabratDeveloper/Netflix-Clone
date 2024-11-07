import { useForm } from "react-hook-form";
import { Button, InputField } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseSignin } from "../../firebase/authService";
import { useDispatch } from "react-redux";
import { login as userLogin } from "../../store/authSlice";
import { extractUserInfo } from "../../utils/userAuth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Function to Log in a user using log in form
   * @param {email, password}
   */
  const login = async ({ email, password }) => {
    try {
      const user = await firebaseSignin(email, password);

      if (!user) {
        console.log(
          "Login failed. Please check your email and password and try again."
        );
        return;
      }

      // Dispatch user info and navigate to home on successful login
      dispatch(userLogin(extractUserInfo(user)));
      navigate("/");
    } catch (error) {
      console.log("Something went wrong. Please try again later.");
      console.log(`Login :: login :: error: ${error}`);
    }
  };

  return (
    <div className="bg-authPageBg h-screen flex justify-center items-center text-white">
      <div className="px-16 py-16 bg-transparent/70 rounded-sm">
        <h1 className="text-3xl font-bold mb-7">Sign In</h1>

        <form
          onSubmit={handleSubmit(login)}
          className="flex flex-col gap-4 w-80"
        >
          {/* Email Input */}
          <InputField
            type="email"
            label="Email"
            width="w-full"
            errors={errors.email?.message}
            register={register("email", {
              required: "Please enter your email.",
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Please enter a valid email address.",
              },
            })}
          />

          {/* Password Input */}
          <InputField
            type="password"
            label="Password"
            width="w-full"
            errors={errors.password?.message}
            register={register("password", {
              required: "Please enter your password.",
              minLength: {
                value: 8,
                message:
                  "Your password must contain between 8 and 60 characters.",
              },
              maxLength: {
                value: 60,
                message:
                  "Your password must contain between 8 and 60 characters.",
              },
            })}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            buttonType="primary"
            height="h-10"
            width="w-full"
            label="Sign In"
            font="font-semibold"
          />
        </form>

        {/* Signup now section */}
        <p className="mt-10 text-neutral-400">
          New to Netflix?
          <span className="text-white hover:underline ml-1">
            <Link to="/">Sign up now.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
