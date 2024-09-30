const Button = (props) => {
  return (
  <button className={`${props.class}`}>
    {props.title}
  </button>
)
};
export default Button;
