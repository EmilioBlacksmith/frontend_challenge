import { useEffect, useState } from "react";
import CardComponent from "../card/CardComponent";

const posterURL: string = "https://image.tmdb.org/t/p/w500/";

interface Movie {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
}

const MovieCardList = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);
	const [page, setPage] = useState<number>(1);

	const fetchMovies = async (pageNumber: number) => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`,
				{
					method: "GET",
					headers: {
						accept: "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVlNWI5YTEwOTg1NDhmZmQxZTUwZDA5ZWM4ZmM4NCIsInN1YiI6IjY2NTI3YWZmMDJmMjk0Zjc1MTI2ZmQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nGhr7cnoGYhyXq8QP2wup3cETm2J84ThjhAZPJX7Zc",
					},
				}
			);
			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}
			const data: { results: Movie[] } = await response.json();
			setMovies((prevMovies) => {
				const uniqueMovies = data.results.filter(
					(newMovie) =>
						!prevMovies.some(
							(existingMovie) => existingMovie.id === newMovie.id
						)
				);
				return [...prevMovies, ...uniqueMovies];
			});
			setLoading(false);
		} catch (err) {
			setError(err as Error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMovies(page);
	}, [page]);

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	if (loading && movies.length === 0) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<nav className="w-full h-auto p-8 gap-6 flex flex-col">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl">Recommended Movies</h2>
			</div>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{movies.map((movie) => (
					<CardComponent
						key={movie.id}
						posterURL={posterURL + movie.poster_path}
						showTitle={movie.title}
						reviewCount={movie.vote_average}
						cardId={movie.id}
						mediaType="movie"
					/>
				))}
			</div>
			{loading && <div>Loading more movies...</div>}
			<button
				className="self-start w-64 h-12 rounded-md bg-main_color hover:scale-105 transition ease-in"
				onClick={handleLoadMore}
			>
				Load More...
			</button>
		</nav>
	);
};

export default MovieCardList;
