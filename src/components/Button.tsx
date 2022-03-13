import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

interface LinkProps extends ButtonProps {
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

export const DefaultLink = (props: LinkProps) => {
  return (
    <Link
      className="underline text-blue-600"
      to={{ pathname: props.to, search: props.search }}
    >
      {props.label}
    </Link>
  );
};

export const LinkButton = (props: LinkProps) => {
  return (
    <Link to={{ pathname: props.to, search: props.search }}>
      <DefaultButton label={props.label} />
    </Link>
  );
};

export const ExternalLink = (props: LinkProps) => {
  return (
    <a
      className="text-blue-600"
      href={props.to}
      target="_blank"
      rel="noreferrer"
    >
      {props.label}
    </a>
  );
};

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <DefaultButton label={"Login"} onClick={() => loginWithRedirect()} />;
};

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return <DefaultButton label={"Logout"} onClick={() => logout()} />;
};
