import StarRating from "../../utils/StarRating";
import RuntimeInString from "../../utils/runtimeInString";

interface Media {
	vote_average: number;
	vote_count?: number;
	release_date?: string;
	runtime?: number;
	first_air_date?: string;
	number_of_seasons?: number;
}

function ReviewsComponent({
	vote_average,
	vote_count,
	release_date,
	runtime,
	first_air_date,
	number_of_seasons,
}: Media) {
	return (
		<div className="flex gap-10 text-gray text-xl w-full">
			<StarRating reviewCount={vote_average} />
			{vote_count !== undefined && (
				<>
					<p className="pt-1">•</p>
					<p className="pt-1">{vote_count} Reviews</p>
				</>
			)}
			{(release_date || first_air_date) && (
				<>
					<p className="pt-1">•</p>
					<p className="pt-1">
						{first_air_date
							? `First Air Date: ${first_air_date.split("-").join(" ")}`
							: `Release Date: ${release_date?.split("-").join(" ")}`}
					</p>
				</>
			)}
			{runtime !== undefined && number_of_seasons === undefined && (
				<>
					<p className="pt-1">•</p>
					<p className="pt-1">
						<RuntimeInString runtimeAmount={runtime} />
					</p>
				</>
			)}
			{number_of_seasons !== undefined && (
				<>
					<p className="pt-1">•</p>
					<p className="pt-1">{number_of_seasons} Seasons</p>
				</>
			)}
		</div>
	);
}

export default ReviewsComponent;
