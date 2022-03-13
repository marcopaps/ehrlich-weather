import { useAuth0 } from "@auth0/auth0-react";
import qs from "query-string";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  DefaultButton,
  SearchBox,
  DefaultLink,
  ExternalLink,
} from "../components";
import { BasicLayout } from "../layouts";
import { getLocations } from "../utils/openWeather";

interface LocationCardProps {
  name: string;
  country: string;
  lon: number;
  lat: number;
}

const fetchLocations = async ({ queryKey }: any) => {
  const [, query] = queryKey;
  if (!query) return;

  return getLocations(query);
};

const HomePage = () => {
  const [textValue, setTextValue] = useState("");
  const [query, setQuery] = useState("");
  const { data, status } = useQuery(["locations", query], fetchLocations);
  const { user } = useAuth0();

  const handleChangeText = (value: string) => {
    setTextValue(value);
  };

  const handleSubmit = () => {
    setQuery(textValue);
  };

  const LocationCard = (props: LocationCardProps) => {
    const label = `${props.name}, ${props.country}`;

    const queryParam = qs.parse(window.location.search);
    const search = qs.stringify({
      ...queryParam,
      lat: props.lat,
      lon: props.lon,
    });

    return (
      <div className="border-t py-4 text-left">
        <DefaultLink to={"/weather"} search={search} label={label} />
        <div className="py-4">{`Geo coordinates: [${props.lat}, ${props.lon}]`}</div>
      </div>
    );
  };

  const Locations = () => {
    return data?.data.map((item: any, key: number) => {
      return (
        <LocationCard
          name={item.name}
          country={item.country}
          lat={item.lat}
          lon={item.lon}
          key={key}
        />
      );
    });
  };

  return (
    <BasicLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center">
        <div></div>
        <div>
          {user?.name && <div className="text-xl">{user?.name}</div>}
          {user?.nickname && (
            <ExternalLink
              to={`https://github.com/${user?.nickname}`}
              label={`https://github.com/${user?.nickname}`}
            />
          )}
          <div className="my-16 block">
            <SearchBox
              placeholder="City"
              onChange={handleChangeText}
              value={textValue}
            />

            <div className="my-4">
              <DefaultButton label="Display Weather" onClick={handleSubmit} />
            </div>

            {status === "success" && (
              <div className="flex justify-center flex-col w-full my-24">
                {data?.data.length && <Locations />}
              </div>
            )}
          </div>
        </div>

        <div></div>
      </div>
    </BasicLayout>
  );
};

export default HomePage;
