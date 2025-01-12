import Search from "./components/search/search";
import "./App.css";

function App() {
  const manejarBusqueda = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="contenedor">
      <Search onSearchChange={manejarBusqueda} />
    </div>
  );
}

export default App;
