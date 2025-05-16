"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
const problem_2 = filterByRating(books);
console.log(problem_2);
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}
const problem_3 = concatenateArrays(["a", "b"], ["c"]);
console.log(problem_3);
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
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
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
const problem_5 = processValue(20);
console.log(problem_5);
function getMostExpensiveProduct(products) {
    if (products.length != 0) {
        let mostExpensiveProduct = products[0];
        products.forEach((product) => product.price > mostExpensiveProduct.price
            ? (mostExpensiveProduct = product)
            : "");
        return mostExpensiveProduct;
    }
    else {
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
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Sunday ? "Weekend" : "Weekday";
}
const problem_7 = getDayType(Day.Tuesday);
console.log(problem_7);
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 0) {
            return Promise.reject(new Error("Negative number not allowed"));
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    });
}
squareAsync(3).then(console.log);
