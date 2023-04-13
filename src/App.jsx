import React, { useState } from "react";
import WeatherContainer from "./components/WeatherContainer";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";

function App() {

  const [value, setValue] = useState("");
  const [city, setCity] = useState('London');

	return (
		<section className="min-h-screen font-rubik">
      <SearchBar value={value} setValue={setValue} setCity={setCity}/>
      <WeatherContainer city={city} />
		</section>
	);
}

export default App;
