import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardComponent from "../card/CardComponent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const posterURL: string = "https://image.tmdb.org/t/p/w500/";

interface Movie {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
}

const TopRatedMovieCards = () => {
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
			"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
		<nav className="w-full h-112 p-8">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl">Top Rated Movies</h2>
				<a
					href="/"
					className="text-main_color"
				>
					Explore more...
				</a>
			</div>
			<Swiper
				spaceBetween={30}
				slidesPerView={6}
				scrollbar={{ draggable: true }}
				mousewheel={{ forceToAxis: true }}
				className="h-full"
			>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<CardComponent
							posterURL={posterURL + movie.poster_path}
							movieTitle={movie.title}
							reviewCount={movie.vote_average}
							movieId={movie.id}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</nav>
	);
};

export default TopRatedMovieCards;
