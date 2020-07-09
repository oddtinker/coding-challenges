import spinWords from "./spinWords";

describe("Reverses character order in words that are longer than 4 characters", () => {
    it("Hey fellow warriors", () => {
        let result = spinWords("Hey fellow warriors");
        expect(result).toEqual("Hey wollef sroirraw");
    });
})