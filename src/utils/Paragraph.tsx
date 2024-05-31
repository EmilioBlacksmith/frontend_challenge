import { truncateText } from "./truncateText";

interface ParagraphProps {
	text: string;
	maxWords: number;
}

const Paragraph = ({ text, maxWords }: ParagraphProps) => {
	const truncatedText = truncateText(text, maxWords);
	return <p className="w-1/3">{truncatedText}</p>;
};

export default Paragraph;
