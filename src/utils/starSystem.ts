export function starSystem(reviewCount: number): string {
	const starRating = (reviewCount * 5) / 10;
	const fullStars = Math.floor(starRating);
	const hasHalfStar = starRating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	const stars =
		"  ".repeat(fullStars) +
		(hasHalfStar ? "  " : "") +
		"  ".repeat(emptyStars);
	return stars;
}
