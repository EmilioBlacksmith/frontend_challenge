import { starSystem } from "../utils/starSystem";

describe("starSystem function", () => {
	it("should return star rating string", () => {
		expect(starSystem(10)).toBe("          ");
		expect(starSystem(7.5)).toBe("          ");
	});
	it("should give empty stars rating if 0", () => {
		expect(starSystem(0)).toBe("          ");
	});
});
