import { runtime } from "../utils/runtime";

describe("runtime function", () => {
	test("should return formatted runtime string for 2 hours and 30 minutes", () => {
		const runtimeAmount = 150;
		expect(runtime(runtimeAmount)).toBe("2 hours and 30 minutes");
	});

	test("should return formatted runtime string for 1 hour and 15 minutes", () => {
		const runtimeAmount = 75;
		expect(runtime(runtimeAmount)).toBe("1 hours and 15 minutes");
	});

	test("should return formatted runtime string for 0 hours and 45 minutes", () => {
		const runtimeAmount = 45;
		expect(runtime(runtimeAmount)).toBe("0 hours and 45 minutes");
	});

	test("should return formatted runtime string for 1 hour and 0 minutes", () => {
		const runtimeAmount = 60;
		expect(runtime(runtimeAmount)).toBe("1 hours and 0 minutes");
	});

	test("should return formatted runtime string for 0 hours and 0 minutes", () => {
		const runtimeAmount = 0;
		expect(runtime(runtimeAmount)).toBe("0 hours and 0 minutes");
	});

	test("should return formatted runtime string for large runtime amount", () => {
		const runtimeAmount = 732;
		expect(runtime(runtimeAmount)).toBe("12 hours and 12 minutes");
	});

	test("should return formatted runtime string for negative runtime amount", () => {
		const runtimeAmount = -90;
		expect(runtime(runtimeAmount)).toBe("-1 hours and 30 minutes");
	});
});
