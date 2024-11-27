import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  const handleSelect = (cca2) => {
    const selectedCountry = countries.find((country) => country.cca2 === cca2);
    navigate(`/countries/${selectedCountry.cca2}`, {
      state: { data: selectedCountry },
    });
  };

  return (
    <div className="container">
      <h1>World-Kingdoms</h1>
      <div className="countries">
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value="">Country</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
        <Outlet />
      </div>
    </div>
  );
};
