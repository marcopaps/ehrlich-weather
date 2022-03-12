import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

interface LinkButtonProps extends ButtonProps {
  to: string;
  search?: string;
}

export const DefaultButton = (props: ButtonProps) => {
  return (
    <button className="border-2 p-2" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link
      className="underline text-blue-600"
      to={{ pathname: props.to, search: props.search }}
    >
      {props.label}
    </Link>
  );
};
