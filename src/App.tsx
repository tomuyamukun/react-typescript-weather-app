import Title from "./components/Title";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";

function App() {
	const [city, setCity] = useState<string>("");
	const getWeather = (e: any) => {
		e.preventDefault();
		fetch(
			"https://api.weatherapi.com/v1/current.json?key=75fb970ecc064c4284e140356223107&q=London&aqi=no"
		)
			.then((res) => res.json())
			.then((date) => console.log(date));
	};

	return (
		<div className="test">
			<Title />
			<Form setCity={setCity} getWeather={getWeather} />
			<Result />
		</div>
	);
}

export default App;
