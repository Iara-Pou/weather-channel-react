import "./CurrentForecast.css";
import ForecastCard from "./ForecastCard";

const CurrentForecast = ({ data }) => {
  return (
    <>
      <h3>Así estará el clima durante el día de hoy</h3>
      <div className="current-forecast">
        {data.map((weather) => {
          return (
            <ForecastCard
              clima={weather.main.temp}
              precipitaciones={weather.main.humidity}
              hora={weather.dt_txt}
              icono={`icons/${weather.weather[0].icon}.png`}
              key={weather.dt}
            />
          );
        })}
      </div>
    </>
  );
};

export default CurrentForecast;
