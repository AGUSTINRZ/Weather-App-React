import React, { useState, useEffect } from "react";
import Loading from "./Loading";

function WeatherContainer({ city }) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const API_KEY = "73dccbb1b77541cbad8143524231503";
	const imgWind = './src/assets/images/wind.png';
	const imgThermometer = './src/assets/images/global-warming.png';
	const imgHumidity = './src/assets/images/humidity.png';

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const response = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
			);
			const data = await response.json();
			setData(data);
			setIsLoading(false);
		}
		fetchData();
	}, [city]);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<section className="w-full max-w-[1000px] mx-auto md:my-16 p-2 lg:p-0">
					<div className="flex justify-between py-2">
						<div className="flex flex-col">
							<h2 className="font-medium text-3xl">
								{data?.location?.name}, {data?.location?.country}
							</h2>
							<p className="font-medium text-gray-500 mb-full">
								{data?.location?.region}
							</p>
							<div className="mt-auto">
								<span className="text-3xl font-medium">
									{data?.current?.temp_c}° C
								</span>
								<span className="ml-4 font-medium text-gray-500">
									{data?.current?.temp_f}° F
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center">
							<img
								src={data?.current?.condition?.icon}
								alt=""
								className="min-w-[100px]"
							/>
							<p className="text-xl font-medium text-center">
								{data?.current?.condition?.text}
							</p>
						</div>
					</div>
					<div className="bg-gray-200 p-2 rounded-xl">
						<p className="font-medium text-gray-600">
							Current time:{" "}
							{data?.location?.localtime.slice(
								data?.location?.localtime.length - 5
							)}
						</p>
						<section className="flex flex-col md:flex-row md:justify-around gap-y-4 mt-4 text-gray-600">
							<article className="flex justify-around items-center gap-2 py-4">
								<img src={imgThermometer} alt="" className="max-w-[120px]" />
								<div className="text-center">
									<h3 className="font-medium">Feels like:</h3>
									<p>{data?.current?.feelslike_c}° C</p>
									<p>{data?.current?.feelslike_f}° F</p>
								</div>
							</article>
							<article className="flex justify-around items-center gap-2 py-4">
								<img src={imgHumidity} alt="" className="max-w-[120px]" />
								<div className="text-center">
									<h3 className="font-medium">Humidity:</h3>
									<span>{data?.current?.humidity}%</span>
								</div>
							</article>
							<article className="flex justify-around items-center gap-2 py-4">
								<img src={imgWind} alt="" className="max-w-[120px]" />
								<div className="text-center">
									<h3 className="font-medium">Wind velocity:</h3>
									<p>{data?.current?.wind_kph} Km/h</p>
									<p>{data?.current?.wind_mph} mph</p>
								</div>
							</article>
						</section>
					</div>
				</section>
			)}
		</>
	);
}

export default WeatherContainer;
