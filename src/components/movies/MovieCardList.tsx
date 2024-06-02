import React, { useEffect, useState, useCallback } from "react";
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
	const [hasMore, setHasMore] = useState<boolean>(true);

	const fetchMovies = useCallback(() => {
		setLoading(true);
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVlNWI5YTEwOTg1NDhmZmQxZTUwZDA5ZWM4ZmM4NCIsInN1YiI6IjY2NTI3YWZmMDJmMjk0Zjc1MTI2ZmQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nGhr7cnoGYhyXq8QP2wup3cETm2J84ThjhAZPJX7Zc",
			},
		};

		fetch(
			`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
			options
		)
			.then((response) => response.json())
			.then((data) => {
				setMovies((prevMovies) => [...prevMovies, ...data.results]);
				setHasMore(data.page < data.total_pages);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [page]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

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
		<nav className="w-full h-auto p-8">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl">Recommended Movies</h2>
			</div>
			<div className="flex flex-row flex-wrap gap-4">
				{movies.map((movie) => (
					<div
						key={movie.id}
						className="w-72 h-112"
					>
						<CardComponent
							posterURL={posterURL + movie.poster_path}
							movieTitle={movie.title}
							reviewCount={movie.vote_average}
							cardId={movie.id}
							mediaType="movie"
						/>
					</div>
				))}
			</div>
			{loading && <div>Loading more movies...</div>}
			{hasMore && !loading && (
				<div className="flex justify-center mt-4">
					<button
						onClick={handleLoadMore}
						className="bg-main_color text-white py-2 px-4 rounded"
					>
						Load More
					</button>
				</div>
			)}
		</nav>
	);
};

export default MovieCardList;
