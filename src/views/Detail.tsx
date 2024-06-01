import { useSection } from "../contexts/SectionContext";

const Detail = () => {
	const { currentSection, selectedMovieId } = useSection();

	return (
		<>
			{currentSection === "detail" && (
				<div className="w-full h-full p-1 bg-dark_gray">
					This is the detail for... {selectedMovieId} Movie
				</div>
			)}
		</>
	);
};

export default Detail;
