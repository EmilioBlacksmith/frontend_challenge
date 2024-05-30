interface SidebarButtonProps {
	onClick: () => void;
	label: string;
	selected: boolean;
}

const SidebarButton = ({ onClick, label, selected }: SidebarButtonProps) => {
	return (
		<button
			className={`w-full h-8 align-middle text-3xl -ml-1 ${
				selected ? "text-main_color" : ""
			}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default SidebarButton;
