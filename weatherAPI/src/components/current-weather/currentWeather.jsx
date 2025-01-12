import "./currentWeather.css";
import fotoClima from "../../icons/01d.png";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Buenos Aires</p>
        <p className="weather-description">Soleado</p>
      </div>
      <img src={fotoClima} alt="weather" className="weather-icon" />
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="row">
            <span className="label">Detalles</span>
          </div>
          <div className="row">
            <span className="label">Sensación</span>
            <span className="value">22°C</span>
          </div>
          <div className="row">
            <span className="label">Viento</span>
            <span className="value">2 m/s</span>
          </div>
          <div className="row">
            <span className="label">Humedad</span>
            <span className="value">50%</span>
          </div>
          <div className="row">
            <span className="label">Presión</span>
            <span className="value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
