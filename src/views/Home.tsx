import { useSection } from "../contexts/SectionContext";
import MoviesList from "../components/home/HomeSlider";
import PopularNowCards from "../components/home/PopularMoviesNowCards";
import PopularTVShowsNowCards from "../components/home/PopularTVShowsNowCards";
import TopRatedMovieCards from "../components/home/TopRatedMoviesCards";
import TopRatedTVShowsCards from "../components/home/TopRatedTVShowsCards";
import Footer from "../components/footer/footer";

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
					<Footer />
				</div>
			)}
		</>
	);
};

export default Home;
