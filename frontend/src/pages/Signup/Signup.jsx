import { useForm } from "react-hook-form";
import { Button, InputField } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login as userLogin } from "../../store/authSlice";
import { extractUserInfo } from "../../utils/userAuth";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registeredEmail = useSelector((state) => state.auth.registeredEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", email: registeredEmail || "", password: "" },
  });

  /**
   * Function to sign up user using sign up form
   * @param {username, email, password} credentials
   */
  const signup = async (credentials) => {
    console.log(credentials);
    try {
      const { data } = await axios.post("/api/v1/users/register", credentials, {
        withCredentials: true,
      });
      console.log("Signup successfully:", data.data);

      // Dispatch user info and navigate to home
      dispatch(userLogin(extractUserInfo(data.data)));
      navigate("/");
    } catch (error) {
      console.error(
        `Signup :: signup :: error: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className="bg-authPageBg h-screen flex justify-center items-center text-white">
      <div className="px-16 py-16 bg-transparent/70 rounded-sm">
        <h1 className="text-3xl font-bold mb-7">Sign Up</h1>

        <form
          onSubmit={handleSubmit(signup)}
          className="flex flex-col gap-4 w-80"
        >
          {/* Username Input */}
          <InputField
            type="text"
            label="Username"
            width="w-full"
            errors={errors.username?.message}
            register={register("username", {
              required: "Please enter your username.",
              minLength: {
                value: 3,
                message:
                  "Your username must contain between 3 and 60 characters.",
              },
              maxLength: {
                value: 60,
                message:
                  "Your username must contain between 3 and 60 characters.",
              },
            })}
          />

          {/* Email Input */}
          <InputField
            type="email"
            label="Email"
            width="w-full"
            value={registeredEmail}
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
              validate: {
                matchPatern: (value) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    value
                  ) ||
                  "Password must contain at least one uppercase letter, one lowercase letter, one number and one symbol.",
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

        {/* Signin now section */}
        <p className="mt-10 text-neutral-400">
          Already have an account?
          <span className="text-white hover:underline ml-1">
            <Link to="/login">Sign in now.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
