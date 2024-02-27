import AddToFavorite from "./weatherBoard/AddToFavorite";
import WeatherCondition from "./weatherBoard/WeatherCondition";
import WeatherHeadline from "./weatherBoard/WeatherHeadline";
// Use context to get the data from the API
import { useContext } from "react";
import { WeatherContext } from "../context";

const WeatherBoard = () => {
	const { weather, loading } = useContext(WeatherContext);

	console.log(loading);

	return (
		<section>
			<div className="container">
				<div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-6">
						{loading.state ? (
							<div className="grid place-items-center">
								<p className="text-2xl text-white">
									{loading.message}
								</p>
							</div>
						) : (
							<>
								<AddToFavorite />
								<WeatherHeadline />
								<WeatherCondition />
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeatherBoard;
