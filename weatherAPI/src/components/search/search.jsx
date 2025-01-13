import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url_GEO_API, options_GEO_API } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#fff" : state.isFocused ? "#000" : "#555",
      backgroundColor: state.isSelected
        ? "#0073e6"
        : state.isFocused
        ? "#f0f0f0"
        : "#fff",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#888",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
    }),
  };

  const loadOptions = (valorInput) => {
    return fetch(
      `${url_GEO_API}/cities?minPopulation=1000000&namePrefix=${valorInput}`,
      options_GEO_API
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const manejarBusqueda = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Ingresá la ciudad"
      debounceTimeout={600}
      value={search}
      onChange={manejarBusqueda}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};

export default Search;
