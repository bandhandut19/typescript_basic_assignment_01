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

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Allion");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

const problem_5 = processValue(20);
console.log(problem_5);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length != 0) {
    let mostExpensiveProduct: Product = products[0];
    products.forEach((product) =>
      product.price > mostExpensiveProduct.price
        ? (mostExpensiveProduct = product)
        : ""
    );
    return mostExpensiveProduct;
  } else {
    return null;
  }
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
const problem_6 = getMostExpensiveProduct(products);
console.log(problem_6);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Sunday ? "Weekend" : "Weekday";
}
const problem_7 = getDayType(Day.Tuesday);
console.log(problem_7);

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Negative number not allowed"));
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
squareAsync(3).then(console.log);
