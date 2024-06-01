import { useSection } from "../contexts/SectionContext";

const Detail = () => {
	const { currentSection, selectedMediaId, selectedMediaType } = useSection();

	return (
		<>
			{currentSection === "detail" && (
				<div className="w-full h-full p-1 bg-dark_gray">
					This is the detail for... {selectedMediaId} {selectedMediaType}
				</div>
			)}
		</>
	);
};

export default Detail;
