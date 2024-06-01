import { useSection } from "../contexts/SectionContext";
import MoviesList from "../components/home/HomeSlider";
import PopularNowCards from "../components/home/PopularMoviesNowCards";
import PopularTVShowsNowCards from "../components/home/PopularTVShowsNowCards";
import TopRatedMovieCards from "../components/home/TopRatedMoviesCards";

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
				</div>
			)}
		</>
	);
};

export default Home;
