import icono from "../../../public/icons/09d.png";
import "./ForecastCard.css";

const ForecastCard = () => {
  let climaMock = 10;
  let precipitacionMock = 10;
  let horaMock = "10:10";
  return (
    <div>
      <div className="forecast-card">
        <div className="top">
          <img src={icono} alt="icono-clima" />
          <p>{climaMock} °C</p>
        </div>
        <div className="bottom">
          <img
            src="https://www.awxcdn.com/adc-assets/images/components/weather/hourly-card-nfl/drop-icon.svg"
            alt="icono-precipitacion"
            className="icono-precipitacion"
          />
          <p>{precipitacionMock} %</p>
        </div>
      </div>
      <p className="hora-mock">{horaMock} hs</p>
    </div>
  );
};

export default ForecastCard;
