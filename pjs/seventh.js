// let grade = prompt("Enter Your Grade");
// let per = parseInt(prompt("Enter your perc"))

// TURNARY OPERATION
// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "Pass" : "Fail";
// console.log(result);

// let result = per === 90 && grade == "A" || per === 80 && grade == "B" ? "PASS" : "FAIL";
// console.log(result);

let grade = prompt("ENTER YOUR GRADE");
console.log(grade);
console.log(typeof(grade));

let per =parseInt (prompt("Enter Your per"));
console.log(typeof(per));
console.log(per);

// TURNARY OPERATIONS

let result = grade === "A" && per === 90 || grade === "B"  && per === 80 || grade === "C" && per === 70 ? "PASS" : "FAIL";
console.log(result);