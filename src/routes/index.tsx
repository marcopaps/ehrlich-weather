import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { useRoutes } from "react-router-dom";
import { useIsLoggedIn } from "../hooks";

const Routes = () => {
  const isLoggedIn = useIsLoggedIn();
  const routes = isLoggedIn ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);
  return <>{element}</>;
};

export const AppRoutes = () => {
  return <Routes />;
};
