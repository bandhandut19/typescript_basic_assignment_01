"use strict";
function formatString(input, toUpper) {
    if (toUpper != true) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
const problem_1 = formatString("hello", true);
console.log(problem_1);
