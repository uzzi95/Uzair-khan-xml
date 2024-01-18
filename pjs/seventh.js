let grade = prompt("Enter Your Grade");
let per = parseInt(prompt("Enter your perc"))

// TURNARY OPERATION
// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "Pass" : "Fail";
// console.log(result);

let result = per === 90 && grade == "A" || per === 80 && grade == "B" ? "PASS" : "FAIL";
console.log(result);