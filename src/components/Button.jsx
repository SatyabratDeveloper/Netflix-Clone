const Button = (props) => {
  return (
    <button className={`${props.class}`}>
      {props.title}
      <span className={props.iconClass}>{props.icon}</span>
    </button>
  );
};
export default Button;
