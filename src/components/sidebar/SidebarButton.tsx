import { useSection } from "../../contexts/SectionContext";

interface SidebarButtonProps {
	onClick: () => void;
	label: string;
	tag: string;
}

const SidebarButton = ({ onClick, label, tag }: SidebarButtonProps) => {
	const { currentSection } = useSection();
	const isSelected = currentSection.toLowerCase() === tag.toLowerCase();

	return (
		<button
			className={`w-full h-8 align-middle text-3xl -ml-1 ${
				isSelected ? "text-main_color" : ""
			}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default SidebarButton;
