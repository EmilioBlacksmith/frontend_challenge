import { useSection } from "../contexts/SectionContext";
import MovieCardList from "../components/movies/MovieCardList";

const Movies = () => {
	const { currentSection } = useSection();

	return <>{currentSection === "movies" && <MovieCardList />}</>;
};

export default Movies;
