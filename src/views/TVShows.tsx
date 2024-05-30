import { useSection } from "../contexts/SectionContext";

const TVShows = () => {
	const { currentSection } = useSection();

	return (
		<div>
			{currentSection === "tvShows" && <h1>Welcome to TV Shows Section</h1>}
		</div>
	);
};

export default TVShows;
