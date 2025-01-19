import "./CurrentForecast.css";
import ForecastCard from "./ForecastCard";

const CurrentForecast = () => {
  return (
    <>
      <h3>Así estará el clima durante el día de hoy</h3>
      <div className="current-forecast">
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </>
  );
};

export default CurrentForecast;
