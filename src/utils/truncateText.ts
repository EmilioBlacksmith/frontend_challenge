export function truncateText(text: string, maxWords: number): string {
	text = text.trim();
	if (!text || maxWords <= 0) {
		return "";
	}
	const words = text.match(/\S+/g) || [];
	if (words.length <= maxWords) {
		return text;
	}
	
	return words.slice(0, maxWords).join(" ") + "...";
}
