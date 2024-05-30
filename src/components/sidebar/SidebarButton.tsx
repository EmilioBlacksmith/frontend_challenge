import React from "react";

interface SidebarButtonProps {
	onClick: () => void;
	label: string;
    selected: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onClick, label, selected }) => {
	return (
		<button
			className={`w-full h-8 text-3xl ${selected ? 'text-main_color' : 'text-white'}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default SidebarButton;
