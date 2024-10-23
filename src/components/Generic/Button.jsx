// types: primary, secondary, tertiary

const Button = ({
  type = "button",
  buttonType = "primary",
  height,
  width,
  label,
  icon,
  size,
  font,
}) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-4 rounded-md transition duration-400 ease-in-out ${
        buttonType === "primary"
          ? "bg-red-600 hover:bg-red-700 text-white"
          : type === "secondary"
          ? "bg-white hover:bg-neutral-400 text-gray-900"
          : type === "tertiary"
          ? "bg-gray-200/25 hover:bg-gray-400/25 text-white"
          : ""
      } ${height} ${width} ${size} ${font}`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
