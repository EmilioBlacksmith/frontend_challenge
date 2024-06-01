import { starSystem } from "./starSystem";

interface StarRatingProps {
	reviewCount: number;
}

const StarRating = ({ reviewCount }: StarRatingProps) => {
	const stars = starSystem(reviewCount);
	return (
		<div className="flex align-middle justify-center items-center gap-5">
			<div className="text-main_color">{stars}</div>
			<div className="pt-1">{Math.round(reviewCount * 10) / 10}</div>
		</div>
	);
};

export default StarRating;
