import Title from "./components/Title";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import React, { useState } from "react";

type ResultStateType = {
	country: string;
	cityName: string;
	temperature: string;
	conditionText: string;
	icon: string;
};

function App() {
	const [city, setCity] = useState<string>("");
	const [results, setResults] = useState<ResultStateType>({
		country: "",
		cityName: "",
		temperature: "",
		conditionText: "",
		icon: "",
	});
	const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch(
			`https://api.weatherapi.com/v1/current.json?key=75fb970ecc064c4284e140356223107&q=${city}&aqi=no`
		)
			.then((res) => res.json())
			.then((data) => {
				setResults({
					country: data.location.country,
					cityName: data.location.name,
					temperature: data.current.temp_c,
					conditionText: data.current.condition.text,
					icon: data.current.condition.icon,
				});
			});
	};

	return (
		<div className="test">
			<Title />
			<Form setCity={setCity} getWeather={getWeather} />
			<Results results={results} />
		</div>
	);
}

export default App;
