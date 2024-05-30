import React from "react";

interface SidebarButtonProps {
	onClick: () => void;
	label: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onClick, label }) => {
	return (
		<button
			className="w-full h-8 text-main_color text-3xl"
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default SidebarButton;
