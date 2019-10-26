/* Create a function that will take a String value as first parameter,
Number value as second and String value as third.
First parameter should be a sentence or set of sentences,
second parameter should be a number of letter in each word in the sentence that should be replaced by the third parameter.
That function should return updated sentence. */

const phrase = "I'm a very cool automation tester"
const num = 3;
const replaceWith = 'abc';

function replace(str, num, strRe) {
    let str1 = str.split(" ");

    str1.forEach((word, index) => {
        let chars = word.split("");
        chars[num-1] = strRe;
        str1[index] = chars.join("");
    })

    return str1.join(" ");
}

console.log(phrase);
console.log(replace(phrase, num, replaceWith));