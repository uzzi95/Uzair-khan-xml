// DOM ----> DOCUMENT OBJECT MODEL
// let elem = document.getElementById('second');
//console.log(elem);

//elem.innerHTML = "AN APPLE A DAY"
// elem.textContent = "AN APPLE A DAY";
// elem.style.backgroundColor = "orange";
// elem.style.textAlign = "center";
// elem.classList.add('world');
// elem.className = "Hello";
// elem.classList.remove('Hello');


// elem.classList.add("Wow");
// elem.classList.add("great");
// elem.classList.add("yes");
// elem.classList.remove('yes');

// let obj = document.getElementsByClassName('container');

// obj[0].innerHTML = "HELLO WORLD";
// obj[0].style.backgroundColor = "pink";
// obj[0].style.textAlign = "center";
// obj[0].style.color = "navy";
// obj[0].style.fontWeight = "italic";
// obj[0].style.fontSize = "40px";

// obj[0].classList.add('wow');
// obj[0].classList.add('now');
// obj[0].classList.add('how');

// let newElem = document.createElement('p');

// obj[0].appendChild(newElem);

// newElem.innerHTML = "hello";
// newElem.style.backgroundColor = "yellow";
// newElem.style.textAlign = "center";
// newElem.style.color = "green";
// newElem.style.fontWeight = "bold";
// newElem.style.fontSize = "30px";


// let para = document.createElement('h3');
// newElem.appendChild(para);

// let newBtn = document.createElement('button');

// obj[0].appendChild(newBtn);

// newBtn.innerHTML = "Submit";
// newBtn.style.padding ="20px 24px ";
// newBtn.className = "btn btn-dark ";
// newBtn.style.fontsize = "24px"





// EVENTS
// newBtn.addEventListener('click' , toggleBtn);
// function toggleBtn(){
//     console.log("You clicked on me!")
//     newBtn.innerHTML = "Wow";
// }

// Practice
let elem = document.getElementsByClassName('container');

elem[0].innerHTML = "HELLO WORLD";
elem[0].style.backgroundColor = "orange";
elem[0].style.textAlign = "center";
elem[0].style.color = "green";
elem[0].style.fontWeight = "bold";
elem[0].style.fontSize = "40px";
elem[0].style.height ="400px";
elem[0].style.border = "dotted";
let newBtn = document.createElement('button');


elem[0].appendChild(newBtn);

newBtn.innerHTML = "Submit";
newBtn.style.padding ="20px 24px ";
newBtn.className = "btn btn-dark mt-5";
newBtn.style.fontsize = "24px"
newBtn.style.display = "block";
newBtn.style.margin = "0px auto";
newBtn.style.letterSpacing = "14px"

// Event Listner

// newBtn.addEventListener('click' , pencil)
//     function pencil(){
//         console.log("The Button Is Clicked!")
//         newBtn.innerHTML ="Button Clicked!"
//     }


//     let max = document.createElement('h4');

//     elem[0].appendChild(max);
//     max.innerHTML = "APTECH";


let newInp = document.createElement('input');
newInp.className = "form-control mt-3";
elem[0].appendChild(newInp);

newInp.addEventListener('keyup' , myfunc);
function myfunc(){
    console.log("FUNCTION IMPLEMENT ON INPUT FIELD")
}

elem[0].appendChild(newBtn);

newBtn.innerHTML = "Submit";
newBtn.style.padding ="20px 24px ";
newBtn.className = "btn btn-dark mt-5";
newBtn.style.fontsize = "24px"
newBtn.style.display = "block";
newBtn.style.margin = "0px auto";
newBtn.style.letterSpacing = "14px"

// Event Listner

newBtn.addEventListener('click' , pencil)
    function pencil(){
        console.log("The Button Is Clicked!")
        newBtn.innerHTML ="Button Clicked!"
        newInp.value = " "
    }




