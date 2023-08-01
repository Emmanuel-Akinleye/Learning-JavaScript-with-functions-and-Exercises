export const add = (number) => {
    return number + 7;
}
console.log(add(7))

export const multiply = (number1, number2) => {
    return number1 * number2;
}
console.log(multiply(7,7))

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const lastLetter = (string) => {
    return string.charAt(string.length - 1);
}
const test = capitalize("emmanuel");
console.log(test)

console.log(lastLetter("Emmanuel"));