export function runtime(runtimeAmount: number): string {
	const sign = runtimeAmount < 0 ? "-" : "";
	const absoluteAmount = Math.abs(runtimeAmount);
	const hours = Math.floor(absoluteAmount / 60);
	const minutes = absoluteAmount % 60;
	return `${sign}${hours} hours and ${minutes} minutes`;
}
