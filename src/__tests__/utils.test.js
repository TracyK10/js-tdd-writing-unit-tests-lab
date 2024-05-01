// Your tests here
import { isPalidrome } from "../utils";

describe("isPalindrome", () => {
    it("return true is word is a Palindrome", () => {
        const word = "racecar";
        const result = isPalidrome(word);
        expect(isPalidrome("racecar")).toBe(true);
    })

    it("returns false is word is not a Palindrome", () => {
        const word = "car"
        const result = isPalidrome(word);
        expect(isPalidrome(word)).toBe(false);
    })

    it("returns true is word is a mixture of uppercase and lowercase letters", () => {
        const word = "MoM"
        const result = isPalidrome(word);
        expect(isPalidrome(word)).toBe(true);
    })

    it("returns an error if word is an empty string", () => {
        const word = ""
        
        expect(isPalidrome(word)).toBe(false);
    })

    it("throws an error is word is a non-alphabetic character", () => {
        const word = "123"
        
        expect(() => isPalidrome(word)).toThrow("Word must be a string");
    })
})