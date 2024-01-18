// ARRAY COLLECTION OF DATA

let heroes = ["SUPER MAN", "BATMAN", "SPIDER MAN", "HULK", "IRON MAN"];
console.log(heroes);
console.log(heroes[3])

// ARRAY METHODS

// PUSH METHOD (It adds value in the last)
console.log(heroes.push("Acha Man"));
console.log(heroes.length);
console.log(heroes);

// Pop Method (It removes element form the last)
console.log(heroes.pop());
console.log(heroes);

// Shift Method (It removes value from the start)
console.log(heroes.shift());
console.log(heroes);

// UNSHIFT METHOD (It adds a value in the start)
console.log(heroes.unshift("Why Man"));
console.log(heroes);


// ['Why Man', 'BATMAN', 'SPIDER MAN', 'HULK', 'IRON MAN']

// SLICE        (It targets particular elemetns. e.g. if you want 3 elements from 2 to 4, then you will give value [2,4])
// In addition to that, Slice will not give you the last value. It will show you a value before the last one.
// Example: (If I want 2nd 4th value, then I will provide [2,5]. This will remove the 5th value and will give the 4th one)

console.log(heroes.slice(2,5))