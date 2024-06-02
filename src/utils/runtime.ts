export function runtime(runtimeAmount: number): string {
	const hours = Math.floor(runtimeAmount / 60);
	const minutes = runtimeAmount % 60;
	return `${hours} hours and ${minutes} minutes`;
}
