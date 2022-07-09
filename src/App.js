import "./App.css";
import { useEffect, useState } from "react";
import Daily from "./Components/Daily/Daily";
import Details from "./Components/Details/Details";
import Top from "./Components/Top/Top";

const lat = "54.217515";
const lon = "49.623924";

const API_key = "1205b526194480e63526d3ecc0e98d5d";

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru&units=metric`;

function App(props) {
  const [daily, setdaily] = useState([]);
  const [details, setdetails] = useState("Пусто");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const json = await response.json();

        setdaily(json.daily);
        setdetails(json.current);
      } else {
        console.error("Ошибка");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Top details={details} />
      <Daily daily={daily} />
      <Details details={details} />
    </div>
  );
}

export default App;