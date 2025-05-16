function formatString(input: string, toUpper?: boolean): string {
  if (toUpper != true) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

const problem_1 = formatString("hello", true);
console.log(problem_1);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const problem_2 = filterByRating(books);
console.log(problem_2);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = [];

  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

const problem_3 = concatenateArrays(["a", "b"], ["c"]);

console.log(problem_3);
