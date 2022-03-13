import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import WeatherPage from "../pages/WeatherPage";

export const protectedRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "weather", element: <WeatherPage /> },
  { path: "*", element: <NotFound /> },
];
