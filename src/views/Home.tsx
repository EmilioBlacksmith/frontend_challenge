import { useSection } from "../contexts/SectionContext";
import MoviesList from "../components/home/HomeSlider";
import PopularNowCards from "../components/home/PopularMoviesNowCards";
import PopularTVShowsNowCards from "../components/home/PopularTVShowsNowCards";
import TopRatedMovieCards from "../components/home/TopRatedMoviesCards";
import TopRatedTVShowsCards from "../components/home/TopRatedTVShowsCards";

const Home = () => {
	const { currentSection } = useSection();

	return (
		<>
			{currentSection === "home" && (
				<div className="w-full h-full p-1 bg-dark_gray">
					<MoviesList />
					<PopularNowCards />
					<PopularTVShowsNowCards />
					<TopRatedMovieCards />
					<TopRatedTVShowsCards />
				</div>
			)}
		</>
	);
};

export default Home;
