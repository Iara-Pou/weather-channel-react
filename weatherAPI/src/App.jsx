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
  const [todaysForecast, setTodaysForecast] = useState(null);

  const esHoy = (APIDate) => {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];
    const [datePart, timePart] = APIDate.split(" ");

    // Comparar si es hoy o mañana a las 12:00 am
    return (
      datePart === todayString ||
      (datePart === tomorrowString && timePart === "00:00:00")
    );
  };

  const conseguirClimaHoy = (forecastResponse) => {
    const climaExtendido = forecastResponse.list;
    const climaHoy = climaExtendido.filter((el) => esHoy(el.dt_txt));
    return climaHoy;
  };

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
        setTodaysForecast(conseguirClimaHoy(forecastResponse));
      })
      .catch((err) => console.error(err));
  };

  return (
    //si hay forecast, cargo el primer y segundo coso, pasandole el usestate nuevo como data
    //en otro componente voy a tener que renderizar dinámicamente
    <>
      <Navbar />
      <div className="contenedor">
        <Search onSearchChange={manejarBusqueda} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {todaysForecast && <CurrentForecast data={todaysForecast} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
