import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Paragraph from "../../utils/Paragraph";
import StarRating from "../../utils/StarRating";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const backdropURL: string = "https://image.tmdb.org/t/p/original/";

interface Movie {
	id: number;
	title: string;
	overview: string;
	backdrop_path: string;
	vote_average: number;
	vote_count: number;
	release_date: string;
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
		<div className="w-full h-128 bg-black">
			<Swiper
				slidesPerView={1}
				scrollbar={{ draggable: true }}
				grabCursor={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
				className="h-full"
			>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<div className="w-full h-full flex">
							<div
								className="w-2/3 h-full ml-auto bg-cover bg-center"
								style={{
									backgroundImage: `url(${backdropURL + movie.backdrop_path})`,
								}}
							></div>
							<div className="w-full absolute inset-0 from-black bg-gradient-to-r via-black backdrop-filter flex flex-col justify-center items-start pl-20 text-white p-4 gap-3">
								<h1 className="text-5xl w-2/3">{movie.title}</h1>
								<div className="flex gap-8 text-gray text-lg w-2/3">
									<StarRating reviewCount={movie.vote_average} />
									<p className="pt-1">•</p>
									<p className="pt-1">{movie.vote_count} Reviews</p>
									<p className="pt-1">•</p>
									<p className="pt-1">{movie.release_date.split("-")[0]}</p>
								</div>
								<Paragraph
									text={movie.overview}
									maxWords={35}
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MoviesList;
