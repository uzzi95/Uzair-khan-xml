// // LOOPS

// for(let i=0; i<=10; i++){
//     console.log("PJS❤" ,i);
// }


// //  STRINGS INTERPOLATION
// for(let i=0; i<=10; i++){
//     console.log(`The value of i is 😉 ${i}`);
// }

//  TABLE
// for(let i=1; i<=10; i++){
//     console.log(`${5} x ${i} = ${5*i}`);
// }

// let num = prompt( "Enter Your Number");
// for(let i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i} `)
// }

// // WHILE LOOP

// let myNum = 70;
// while(myNum<=78){
//     console.log("This is while loop" , myNum);
//     myNum++;
// }

// // DO WHILE LOOP

// let z = 44;
// do{
//     console.log("This is a do while loop" , z);
//     z++;
// }while (z<=50);

// let gameNum = 95;
// let userNum = prompt("Enter Your Number");
// while(userNum != gameNum){
//     userNum = prompt("You Guess The Wrong Number : Guess Again 😒");
// }

// swal("You Win The GAME 💋!")

// FOR IN LOOP

let obj = {
    name : "Daniyal" ,
    age : 31 ,
    grade : "C",
    city : "LODHRAN",
    number : 090078601
}

for(let n in obj){
    console.log(n , obj[n])
}

let num = prompt("Enter Your Number");
for(let i=0; i<=num; i++){
    if(i%2==0){
        console.log("Your number is even")
    }else{
        console.log("Your number is odd")
    }
}