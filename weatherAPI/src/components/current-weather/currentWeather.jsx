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
    </div>
  );
};

export default CurrentWeather;
