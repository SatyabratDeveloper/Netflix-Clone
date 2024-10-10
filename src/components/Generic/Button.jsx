const Button = ({ text, style, icon, iconStyle }) => {
  return (
    <button
      className={`transition duration-500 ease-in-out rounded-md flex justify-center items-center ${style}`}
    >
      {text}
      <span className={iconStyle}>{icon}</span>
    </button>
  );
};
export default Button;
