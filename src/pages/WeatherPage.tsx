import { useQuery } from "react-query";
import { LinkButton } from "../components";
import useQueryParams from "../hooks/useQueryParams";
import { BasicLayout } from "../layouts";
import { getWeatherData } from "../utils/openWeather";

const Th = ({ children }: { children: React.ReactChild }) => {
  return (
    <th className="border-b font-bold p-4 pl-8 pt-0 pb-3 text-left">
      {children}
    </th>
  );
};

const Td = ({ children }: { children: React.ReactChild }) => {
  return (
    <th className="border-b font-medium border-slate-100 p-4 pl-8 text-gray-500 text-left">
      {children}
    </th>
  );
};

const fetchWeather = async ({ queryKey }: any) => {
  const [, lat, lon] = queryKey;
  if (!lat || !lon) return;

  return getWeatherData(lat, lon);
};

const WeatherPage = () => {
  const query = useQueryParams();
  const lat = query.get("lat") ?? "";
  const lon = query.get("lon") ?? "";

  const { data, status } = useQuery(["weather", lat, lon], fetchWeather);

  const weatherData = data?.data;
  const date = weatherData?.dt;
  const temperature = weatherData?.main.temp;
  const description = weatherData?.weather[0].description;
  const main = weatherData?.weather[0].main;
  const pressure = weatherData?.main.pressure;
  const humidity = weatherData?.main.humidity;

  return (
    <BasicLayout>
      <div className="px-96">
        <div>
          <LinkButton label={"Back"} to={"/"} />

          {weatherData && status === "success" && (
            <table className="border-collapse table-auto w-full text-sm font-medium mt-12">
              <thead>
                <tr>
                  <Th>{"Date (mm/dd/yyy)"}</Th>
                  <Th>{"Temp (F)"}</Th>
                  <Th>{"Description"}</Th>
                  <Th>{"Main"}</Th>
                  <Th>{"Pressure"}</Th>
                  <Th>{"Humidity"}</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>{date}</Td>
                  <Td>{temperature}</Td>
                  <Td>{description}</Td>
                  <Td>{main}</Td>
                  <Td>{pressure}</Td>
                  <Td>{humidity}</Td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

export default WeatherPage;
