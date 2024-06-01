import { useSection } from "../contexts/SectionContext";
import { useEffect, useState } from "react";

const posterURL: string = "https://image.tmdb.org/t/p/w500/";
const backdropURL: string = "https://image.tmdb.org/t/p/w500/";

interface MediaData {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
	release_date: string;
	runtime: number;
	backdrop_path: string;
	overview: string;
	vote_count: number;
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
					<div key={mediaData.id}>
						<h1>This is the info for: {mediaData.title}</h1>
						<p>{mediaData.overview}</p>
						<img
							src={`${posterURL}${mediaData.poster_path}`}
							alt={mediaData.title}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default Detail;
