import ReviewsComponent from "../components/detail/ReviewsComponent";
import { useSection } from "../contexts/SectionContext";
import { useEffect, useState } from "react";

const posterURL: string = "https://image.tmdb.org/t/p/w500/";
const backdropURL: string = "https://image.tmdb.org/t/p/w500/";

interface MediaData {
	id: number;
	title: string;
	name: string;
	poster_path: string;
	vote_average: number;
	release_date: string;
	runtime: number;
	backdrop_path: string;
	overview: string;
	vote_count: number;
	number_of_seasons: number;
	first_air_date: string;
}

const Detail = () => {
	const { currentSection, selectedMediaId, selectedMediaType } = useSection();
	const [mediaData, setMediaData] = useState<MediaData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (selectedMediaId === null) return;

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVlNWI5YTEwOTg1NDhmZmQxZTUwZDA5ZWM4ZmM4NCIsInN1YiI6IjY2NTI3YWZmMDJmMjk0Zjc1MTI2ZmQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nGhr7cnoGYhyXq8QP2wup3cETm2J84ThjhAZPJX7Zc",
			},
		};

		setLoading(true);

		fetch(
			`https://api.themoviedb.org/3/${selectedMediaType}/${selectedMediaId}?language=en-US`,
			options
		)
			.then((response) => response.json())
			.then((data) => {
				setMediaData(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [selectedMediaId, selectedMediaType]);

	if (currentSection === "detail" && loading) {
		return <div>Loading...</div>;
	}

	if (currentSection === "detail" && error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			{currentSection === "detail" && mediaData && (
				<div className="w-full h-full p-1">
					<div
						className="w-full h-full bg-cover z-0 absolute top-0 left-0 blur"
						style={{
							backgroundImage: `url(${backdropURL + mediaData.backdrop_path})`,
							opacity: 0.1,
						}}
					></div>
					<div
						className="z-10 w-full h-full absolute top-0 left-0 pl-32 p-4 flex "
						key={mediaData.id}
					>
						<div className="flex w-1/3 h-full flex-col items-center justify-center p-4">
							<h1 className="text-5xl text-center">
								{mediaData.title || mediaData.name}
							</h1>
							<img
								src={`${posterURL}${mediaData.poster_path}`}
								alt={mediaData.title || mediaData.name}
							/>
						</div>
						<div className="flex w-2/3 h-full flex-col justify-center p-4 gap-4">
							<ReviewsComponent
								vote_average={mediaData.vote_average}
								vote_count={mediaData.vote_count}
								release_date={mediaData.release_date}
								runtime={mediaData.runtime}
								number_of_seasons={mediaData.number_of_seasons}
								first_air_date={mediaData.first_air_date}
							/>
							<h2 className="text-xl font-black">OVERVIEW</h2>
							{mediaData.overview}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Detail;
