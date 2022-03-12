import HomePage from "../pages/HomePage";
import WeatherPage from "../pages/WeatherPage";

export const protectedRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "weather", element: <WeatherPage /> },
];
