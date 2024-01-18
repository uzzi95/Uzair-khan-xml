
let usrname = prompt("Enter your Name");

let math = parseInt(prompt("Enter your Maths Marks"));

let urdu = parseInt(prompt("Enter your Urdu Marks"));

let english = parseInt(prompt("Enter your English Marks"));

let Phycics = parseInt(prompt("Enter your Physics Marks"));

let Computer = parseInt(prompt("Enter your Computer Marks"));

let obtainedMarks = math+urdu+english+Phycics+Computer;

let per = obtainedMarks/500*100;

console.log(per);

if(per >=90 && per<=100){
    console.log("Your Grade is A+1")

}
else if(per >=80 && per<=90){
    console.log("Your Grade is A+")
}
else if(per >=70 && per<=80 ){
    console.log("Your Grade is A")
}
else if(per>=60 && per<=70){
    console.log("Your Grade is B")
}
else if(per >=50 && per<=60){
    console.log("Your Grade Is C")
}
else if(per >=40 && per<=50){
    console.log("Your Grade Is D")
}
else{
    console.log("Fail");
}
