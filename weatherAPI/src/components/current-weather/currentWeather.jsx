import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
      </div>
      <img
        src={`icons/${data.weather[0].icon}.png`}
        alt="weather"
        className="weather-icon"
      />
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="row">
            <span className="label">Detalles</span>
          </div>
          <div className="row">
            <span className="label">Sensación</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="row">
            <span className="label">Viento</span>
            <span className="value">{data.wind.speed} m/s</span>
          </div>
          <div className="row">
            <span className="label">Humedad</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="row">
            <span className="label">Presión</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
