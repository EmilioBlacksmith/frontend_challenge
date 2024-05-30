interface SidebarButtonProps {
	onClick: () => void;
	label: string;
	selected: boolean;
}

const SidebarButton = ({ onClick, label, selected }: SidebarButtonProps) => {
	return (
		<button
			className={`w-full h-8 text-3xl ${
				selected ? "text-main_color" : "text-white"
			}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default SidebarButton;
