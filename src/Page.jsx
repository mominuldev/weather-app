import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";
import { WeatherProvider } from "./provider";

const Page = () => {
	return (
		<WeatherProvider>
			<div className="grid place-items-center h-screen">
				<Header />
				<main>
					<WeatherBoard />
				</main>
			</div>
		</WeatherProvider>
	);
};

export default Page;
