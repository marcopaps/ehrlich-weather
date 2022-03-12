import qs from "query-string";
import { useState } from "react";
import { useQuery } from "react-query";
import { DefaultButton, SearchBox, LinkButton } from "../components";
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

  const handleChangeText = (value: string) => {
    setTextValue(value);
  };

  const handleSubmit = () => {
    setQuery(textValue);
  };

  const LocationCard = (props: LocationCardProps) => {
    const label = `${props.name}, ${props.country}`;

    // eslint-disable-next-line no-restricted-globals
    const queryParam = qs.parse(location.search);
    const search = qs.stringify({
      ...queryParam,
      lat: props.lat,
      lon: props.lon,
    });

    return (
      <div className="border-t-2 py-4">
        <LinkButton to={"/weather"} search={search} label={label} />
        <div>{`Geo coordinates [${props.lat}, ${props.lon}]`}</div>
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
      <div className="block text-center">
        <div className="text-xl">John Smith</div>
        <div className="text-lg my-4">https://github.com/smithjohn</div>
        <div className="my-16 block">
          <SearchBox
            placeholder="City"
            onChange={handleChangeText}
            value={textValue}
          />
          <DefaultButton label="Search" onClick={handleSubmit} />

          {status === "success" && (
            <div className="flex justify-center flex-col w-96 mx-auto my-24">
              {data?.data.length && <Locations />}
            </div>
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

export default HomePage;
