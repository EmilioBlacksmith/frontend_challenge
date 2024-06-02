import StarRating from "../../utils/StarRating";
import { useSection } from "../../contexts/SectionContext";

interface CardData {
	posterURL: string;
	movieTitle: string;
	reviewCount: number;
	cardId: number;
	mediaType: string;
}

function CardComponent({
	posterURL,
	movieTitle,
	reviewCount,
	cardId,
	mediaType,
}: CardData) {
	const { setCurrentSection, setSelectedMediaId, setSelectedMediaType } =
		useSection();

	const handleMovieClick = (movieId: number, mediaType: string) => {
		setSelectedMediaId(movieId);
		setCurrentSection("detail");
		setSelectedMediaType(mediaType);
	};

	return (
		<div className="relative h-full w-full bg-cover border-gray border-2 overflow-hidden">
			<div
				className="absolute top-0 left-0 w-full h-full bg-black backdrop-blur-xl opacity-0 hover:opacity-90 hover:cursor-pointer transition ease-in duration-75"
				onClick={() => handleMovieClick(cardId, mediaType)}
			>
				<div className="flex flex-col justify-center items-center h-full p-6">
					<h3 className="text-2xl text-white font-extrabold text-center">
						{movieTitle}
					</h3>
					<StarRating reviewCount={reviewCount} />
				</div>
			</div>
			<img
				className="w-full h-full"
				src={posterURL}
				alt={movieTitle}
			/>
		</div>
	);
}

export default CardComponent;
