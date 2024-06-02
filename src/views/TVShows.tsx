import TvShowsCardList from "../components/tvshows/TVShowsCardList";
import { useSection } from "../contexts/SectionContext";

const TVShows = () => {
	const { currentSection } = useSection();

	return <div>{currentSection === "tvShows" && <TvShowsCardList />}</div>;
};

export default TVShows;
