import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";

function App() {
  const manejarBusqueda = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="contenedor">
      <Search onSearchChange={manejarBusqueda} />
      <CurrentWeather />
    </div>
  );
}

export default App;
