// SPLICE

let fruits = ["apple", "mango", "orange", "pineapple", "Kiwi", "Cherry"]

console.log(fruits);

// SPLICE

// (In first index, it will target which element you want to select)
// (In second index, its asks you whether you want to delete the value of your first index or not)
// (0 means you don't want to delete the value, 1 means you want to delete the value)
// (If you a are giving more than one value i.e. [2 or 3],it will remove 2 more values after that element)
// (In third index, you are are adding elements before the first index)

console.log(fruits.splice(3, 0, "Banana", "Grapes"))
console.log(fruits)