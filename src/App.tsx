import Sidebar from "./components/sidebar/Sidebar";
import { SectionProvider } from "./contexts/SectionContext";
import Home from "./views/Home";
import Movies from "./views/Movies";
import TVShows from "./views/TVShows";
import Search from "./views/Search";

function App() {
	return (
		<SectionProvider>
			<main className="bg-black w-screen h-screen text-white flex">
				<Sidebar />
				<Home />
				<Movies />
				<TVShows />
				<Search />
			</main>
		</SectionProvider>
	);
}

export default App;
