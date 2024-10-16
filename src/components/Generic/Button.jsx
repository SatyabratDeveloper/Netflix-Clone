// types: primary, secondary, tertiary

const Button = ({ type, height, width, label, icon, size, font }) => {
  return (
    <button
      className={`flex justify-center items-center gap-4 rounded-md transition duration-400 ease-in-out ${
        type === "primary"
          ? "bg-red-600 hover:bg-red-700"
          : type === "secondary"
          ? "bg-white hover:bg-neutral-400 text-gray-900"
          : type === "tertiary"
          ? "bg-gray-200/25 hover:bg-gray-400/25"
          : ""
      } ${height} ${width} ${size} ${font}`}
    >
      {label}
      {icon}
    </button>
  );
};
export default Button;
