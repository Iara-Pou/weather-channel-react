import icono from "../../../public/icons/09d.png";
import "./ForecastCard.css";

const ForecastCard = ({ clima, precipitaciones, hora, icono }) => {
  return (
    <div>
      <div className="forecast-card">
        <div className="top">
          <img src={icono} alt="icono-clima" />
          <p>{clima} °C</p>
        </div>
        <div className="bottom">
          <img
            src="https://www.awxcdn.com/adc-assets/images/components/weather/hourly-card-nfl/drop-icon.svg"
            alt="icono-precipitacion"
            className="icono-precipitacion"
          />
          <p>{precipitaciones} %</p>
        </div>
      </div>
      <p className="hora-mock">{hora} hs</p>
    </div>
  );
};

export default ForecastCard;
