import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";

export const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "*", element: <NotFound /> },
];
