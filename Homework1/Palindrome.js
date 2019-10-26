/* Create a function that will take a String value in parameters and return message
that will say is that string a Palindrome or not. */

const phrase = "race car";
const phrase1 = "A man, a plan, a canal. Panama";
const phrase2 = "lemon";

const toRemove = /[\W]/g;

function isPalinrome(str) {
    let origStr = str.toLowerCase().replace(toRemove, "");
    let reverseStr = origStr.split("").reverse().join("");

    return origStr === reverseStr;
}

console.log(phrase);
console.log("Is this phrase a palindrome?", isPalinrome(phrase) ? "yes" : "no");

console.log(phrase1);
console.log("Is this phrase a palindrome?", isPalinrome(phrase1) ? "yes" : "no");

console.log(phrase2);
console.log("Is this phrase a palindrome?", isPalinrome(phrase2) ? "yes" : "no");