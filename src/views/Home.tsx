import { useSection } from "../contexts/SectionContext";
import MoviesList from "../components/home/HomeSlider";

const Home = () => {
	const { currentSection } = useSection();

	return (
		<>
			{currentSection === "home" && (
				<div className="w-full h-full p-1 bg-dark_gray">
					<MoviesList />
				</div>
			)}
		</>
	);
};

export default Home;
