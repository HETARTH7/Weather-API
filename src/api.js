const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "Jaipur" },
  headers: {
    "X-RapidAPI-Key":process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};
export default options;
