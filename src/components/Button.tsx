interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="border-2 p-2" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
