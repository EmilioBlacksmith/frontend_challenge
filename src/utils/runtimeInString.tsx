import { runtime } from "./runtime";

interface RuntimeProps {
	runtimeAmount: number;
}

const RuntimeInString = ({ runtimeAmount }: RuntimeProps) => {
	const runtimeInString = runtime(runtimeAmount);

	return <div>{runtimeInString}</div>;
};

export default RuntimeInString;
