import Sidebar from "./components/sidebar/Sidebar";
import { SectionProvider } from "./contexts/SectionContext";
import Home from "./views/Home";
import Movies from "./views/Movies";
import TVShows from "./views/TVShows";
import Search from "./views/Search";
import Detail from "./views/Detail";

function App() {
	return (
		<SectionProvider>
			<main className="bg-dark_gray h-screen text-white flex">
				<Sidebar />
				<div className="w-full h-full flex-1 overflow-x-hidden ">
					<Home />
					<Movies />
					<TVShows />
					<Search />
					<Detail />
				</div>
			</main>
		</SectionProvider>
	);
}

export default App;
