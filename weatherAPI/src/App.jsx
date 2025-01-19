import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/navbar/Navbar";
import CurrentForecast from "./components/current-forecast/CurrentForecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const manejarBusqueda = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const weatherApiFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const weatherApiForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([weatherApiFetch, weatherApiForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

        //clima de hoy sale de acá
        console.log(forecastResponse);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Navbar />
      <div className="contenedor">
        <Search onSearchChange={manejarBusqueda} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        <CurrentForecast />
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
