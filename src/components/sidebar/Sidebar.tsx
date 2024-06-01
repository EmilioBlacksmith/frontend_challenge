import SidebarButton from "./SidebarButton";
import { useSection } from "../../contexts/SectionContext";

export default function Sidebar() {
	const { setCurrentSection } = useSection();

	const handleSectionChange = (section: string) => {
		setCurrentSection(section);
	};

	return (
		<nav className="h-full w-20 outline bg-black outline-dark_gray flex flex-col justify-evenly z-50">
			<SidebarButton
				label=""
				onClick={() => handleSectionChange("home")}
				tag="home"
			/>
			<SidebarButton
				label="󰿎"
				onClick={() => handleSectionChange("movies")}
				tag="movies"
			/>
			<SidebarButton
				label="󰟴"
				onClick={() => handleSectionChange("tvShows")}
				tag="tvShows"
			/>
			<SidebarButton
				label=""
				onClick={() => handleSectionChange("search")}
				tag="search"
			/>
		</nav>
	);
}
