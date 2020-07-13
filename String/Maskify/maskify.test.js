import maskify from './maskify';

describe("Masks digits in a string representing a credit card number", () => {
    it("works for standard credit cards", () => {
        let result = maskify("5512103073210694");
        expect(result).toEqual("5###########0694");
    });
    it("works for non-standard cards", () => {
        let result = maskify("64607935616");
        expect(result).toEqual("6######5616");
    });
    it("ignores short strings", () => {
        let result = maskify("54321");
        expect(result).toEqual("54321");
    });
    it("ignores dashes", () => {
        let result = maskify("4556-3646-0793-5616");
        expect(result).toEqual("4###-####-####-5616");
    });
    it("ignores chars", () => {
        let result = maskify("ABCD-EFGH-IJKLM-NOPQ");
        expect(result).toEqual("ABCD-EFGH-IJKLM-NOPQ");
    });
    it("ignores random strings", () => {
        let result = maskify("Skippy");
        expect(result).toEqual("Skippy");
    });
    it("handles empty strings", () => {
        let result = maskify("");
        expect(result).toEqual("");
    });
});