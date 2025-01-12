import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url_GEO_API, options_GEO_API } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (valorInput) => {
    return fetch(
      `${url_GEO_API}/cities?namePrefix=${valorInput}`,
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
    />
  );
};

export default Search;
