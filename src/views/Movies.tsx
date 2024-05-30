import { useSection } from "../contexts/SectionContext";

const Movies = () => {
	const { currentSection } = useSection();

	return (
		<div>
			{currentSection === "movies" && <h1>Welcome to Movies section</h1>}
		</div>
	);
};

export default Movies;
