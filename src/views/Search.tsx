import { useSection } from "../contexts/SectionContext";

const Search = () => {
	const { currentSection } = useSection();

	return (
		<div>
			{currentSection === "search" && <h1>Let's search some movies</h1>}
		</div>
	);
};

export default Search;
