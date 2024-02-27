import { useContext } from "react";
import { WeatherContext } from "../../context";

import temMax from "../../assets/icons/temp-max.svg";
import temMin from "../../assets/icons/temp-min.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import cloud from "../../assets/icons/cloud.svg";
import WindIcon from "../../assets/icons/wind.svg";

const WeatherCondition = () => {
	const { weather } = useContext(WeatherContext);

	console.log(weather);

	const {
		climate,
		maxTemperature,
		minTemperature,
		humidity,
		wind,
		cloudPercentage,
	} = weather;

	return (
		<div>
			<p className="text-sm lg:text-lg font-bold uppercase mb-8">
				The climate is {climate}
			</p>
			<ul className="space-y-6 lg:space-y-6">
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Temp max</span>
					<div className="inline-flex space-x-4">
						<p>{Math.round(maxTemperature)}°</p>
						<img src={temMax} alt="temp-max" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Temp min</span>
					<div className="inline-flex space-x-4">
						<p>{Math.round(minTemperature)}°</p>
						<img src={temMin} alt="temp-min" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Humadity</span>
					<div className="inline-flex space-x-4">
						<p>{humidity}58%</p>
						<img src={HumidityIcon} alt="HumidityIcon" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Cloudy</span>
					<div className="inline-flex space-x-4">
						<p>{cloudPercentage}%</p>
						<img src={cloud} alt="cloudy" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Wind</span>
					<div className="inline-flex space-x-4">
						<p>{wind}km/h</p>
						<img src={WindIcon} alt="WindIcon" />
					</div>
				</li>
			</ul>
		</div>
	);
};

export default WeatherCondition;
