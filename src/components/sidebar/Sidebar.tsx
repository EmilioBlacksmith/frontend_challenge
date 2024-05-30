import React, { useState } from "react";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
	const [selectedButton, setSelectedButton] = useState<number | null>(0);

	const handleClick = (buttonIndex: number) => {
		setSelectedButton(buttonIndex);
		console.log("Button Clicked");
	};

	return (
		<nav className="h-full w-20 outline outline-1 outline-gray flex flex-col justify-evenly">
			<SidebarButton
				onClick={() => handleClick(0)}
				label=""
				selected={selectedButton === 0}
			/>
			<SidebarButton
				onClick={() => handleClick(1)}
				label="󰿎"
				selected={selectedButton === 1}
			/>
			<SidebarButton
				onClick={() => handleClick(2)}
				label="󰟴"
				selected={selectedButton === 2}
			/>
			<SidebarButton
				onClick={() => handleClick(3)}
				label=""
				selected={selectedButton === 3}
			/>
		</nav>
	);
}
