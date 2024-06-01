import StarRating from "../../utils/StarRating";
import { useSection } from "../../contexts/SectionContext";

interface CardData {
	posterURL: string;
	movieTitle: string;
	reviewCount: number;
	movieId: number;
}

function CardComponent({
	posterURL,
	movieTitle,
	reviewCount,
	movieId,
}: CardData) {
	const { setCurrentSection } = useSection();

	const handleSectionChange = (section: string) => {
		setCurrentSection(section);
	};

	return (
		<>
			<div
				className="h-full w-full bg-cover border-gray border-2"
				style={{
					backgroundImage: `url(${posterURL})`,
				}}
			></div>
			<div
				className="w-full h-full bg-black backdrop-blur-xl opacity-0 absolute inset-0 hover:opacity-90 hover:cursor-pointer flex flex-col justify-center items-center p-6"
				onClick={() => handleSectionChange("detail")}
			>
				<h3 className="text-2xl text-white font-extrabold text-center">
					{movieTitle}
				</h3>
				<StarRating reviewCount={reviewCount} />
			</div>
		</>
	);
}

export default CardComponent;
