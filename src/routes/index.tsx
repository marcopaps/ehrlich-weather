import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { BrowserRouter, useRoutes } from "react-router-dom";

const Routes = () => {
  // TODO: Auth
  const isLoggedIn = true;
  const routes = isLoggedIn ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);
  return <>{element}</>;
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
