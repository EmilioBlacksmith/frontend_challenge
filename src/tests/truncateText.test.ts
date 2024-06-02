import { truncateText } from "../utils/truncateText";

test("should return original text if it contains less words than maxWords", () => {
	const text = "Lorem ipsum dolor sit amet";
	const maxWords = 6;
	expect(truncateText(text, maxWords)).toBe(text);
});

test("should truncate text if it contains more words than maxWords", () => {
	const text = "Lorem ipsum dolor sit amet";
	const maxWords = 3;
	expect(truncateText(text, maxWords)).toBe("Lorem ipsum dolor...");
});

test("should handle text with multiple spaces between words", () => {
	const text = "Lorem  ipsum    dolor   sit   amet";
	const maxWords = 4;
	expect(truncateText(text, maxWords)).toBe("Lorem ipsum dolor sit...");
});

test("should handle empty text", () => {
	const text = "";
	const maxWords = 5;
	expect(truncateText(text, maxWords)).toBe("");
});

test("should handle maxWords equal to zero", () => {
	const text = "Lorem ipsum dolor sit amet";
	const maxWords = 0;
	expect(truncateText(text, maxWords)).toBe("");
});

test("should handle maxWords greater than the total number of words in text", () => {
	const text = "Lorem ipsum dolor sit amet";
	const maxWords = 10;
	expect(truncateText(text, maxWords)).toBe("Lorem ipsum dolor sit amet");
});

test("should handle text with leading and trailing spaces", () => {
	const text = "  Lorem ipsum dolor sit amet  ";
	const maxWords = 4;
	expect(truncateText(text, maxWords)).toBe("Lorem ipsum dolor sit...");
});

test("should handle text containing only spaces", () => {
	const text = "       ";
	const maxWords = 3;
	expect(truncateText(text, maxWords)).toBe("");
});

test("should handle maxWords being negative", () => {
	const text = "Lorem ipsum dolor sit amet";
	const maxWords = -5;
	expect(truncateText(text, maxWords)).toBe("");
});

test("should handle text containing non-alphabetic characters", () => {
	const text = "Lorem ipsum 123 dolor sit amet";
	const maxWords = 5;
	expect(truncateText(text, maxWords)).toBe("Lorem ipsum 123 dolor sit...");
});
