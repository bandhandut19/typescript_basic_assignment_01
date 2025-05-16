function formatString(input: string, toUpper?: boolean): string {
  if (toUpper != true) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

const problem_1 = formatString("hello", true);
console.log(problem_1);
