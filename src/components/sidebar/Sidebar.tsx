import React from "react";
import SidebarButton from "./SidebarButton";

const Sidebar: React.FC = () => {
	const handleClick = () => {
		console.log("Button Clicked");
	};

	return (
		<nav className="h-full w-20 outline outline-1 outline-gray">
			<SidebarButton
				onClick={handleClick}
				label=""
			/>
		</nav>
	);
};

export default Sidebar;
