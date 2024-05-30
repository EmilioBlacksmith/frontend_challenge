import { useSection } from "../contexts/SectionContext";

const Home = () => {
	const { currentSection } = useSection();

	return <div>{currentSection === "home" && <h1>Welcome</h1>}</div>;
};

export default Home;
