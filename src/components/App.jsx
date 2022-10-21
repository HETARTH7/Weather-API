import React from "react";
import axios from "axios";
import options from "../api";

const App = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.current.temp_c);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div>App</div>;
};

export default App;
