// Your code here
export function isPalidrome(word) {
    const initialWord = word.split("").join("");
    const result = word.split("").reverse().join("");
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error("Word must be a string");
    }
    else if (initialWord === result) {
        return true;
    } else {
        return false;
    }
}