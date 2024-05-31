import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const backdropURL: string = "https://image.tmdb.org/t/p/original/";

interface Movie {
	id: number;
	title: string;
	overview: string;
	backdrop_path: string;
}

const MoviesList = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVlNWI5YTEwOTg1NDhmZmQxZTUwZDA5ZWM4ZmM4NCIsInN1YiI6IjY2NTI3YWZmMDJmMjk0Zjc1MTI2ZmQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nGhr7cnoGYhyXq8QP2wup3cETm2J84ThjhAZPJX7Zc",
			},
		};

		fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			options
		)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="w-full h-96 bg-black">
			<Swiper
				slidesPerView={1}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				grabCursor={true}
				autoplay={{ delay: 5000 }}
				className="h-full"
			>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<div
							className="w-full h-full bg-cover bg-center"
							style={{
								backgroundImage: `url(${backdropURL + movie.backdrop_path})`,
							}}
						>
							<div className="w-4/6 absolute inset-0 from-black bg-gradient-to-r via-black backdrop-filter flex flex-col justify-center text-white p-4">
								<h1 className="text-3xl font-bold w-1/3">{movie.title}</h1>
								<p className="mt-2 text-center w-1/3">{movie.overview}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MoviesList;
