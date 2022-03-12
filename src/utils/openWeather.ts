import axios from "axios";

const OPEN_WEATHER_APP_ID = process.env.REACT_APP_OPEN_WEATHER_APP_ID;

const geoInstance = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0",
});

const weatherInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getLocations = (query: string) => {
  return geoInstance.get(
    `direct?q=${query}&limit=10&appid=${OPEN_WEATHER_APP_ID}`
  );
};

export const getWeatherData = (lat: string, lon: string) => {
  if (!lat || !lon) return;

  return weatherInstance.get(
    `weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APP_ID}`
  );
};
