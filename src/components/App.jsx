import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [temp, setTemp] = useState();
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("jaipur");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    setCityName(city);
    e.preventDefault();
  };
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: cityName },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((res) => {
      setTemp(res.data.current.temp_c);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Search City"></input>
        <input type="submit"></input>
      </form>
      <h1>
        Temperature in {cityName} is {temp}
      </h1>
    </div>
  );
};

export default App;
