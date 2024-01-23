// DOM ----> DOCUMENT OBJECT MODEL
let elem = document.getElementById('second');
//console.log(elem);

//elem.innerHTML = "AN APPLE A DAY"
elem.textContent = "AN APPLE A DAY";
elem.style.backgroundColor = "orange";
elem.style.textAlign = "center";
elem.classList.add('world');
elem.className = "Hello";
elem.classList.remove('Hello');


elem.classList.add("Wow");
elem.classList.add("great");
elem.classList.add("yes");
elem.classList.remove('yes');

let obj = document.getElementsByClassName('container');

obj[0].innerHTML = "HELLO WORLD";
obj[0].style.backgroundColor = "pink";
obj[0].style.textAlign = "center";
obj[0].style.color = "navy";
obj[0].style.fontWeight = "italic";
obj[0].style.fontSize = "40px";

obj[0].classList.add('wow');
obj[0].classList.add('now');
obj[0].classList.add('how');

let newElem = document.createElement('p');

obj[0].appendChild(newElem);

newElem.innerHTML = "hello";
newElem.style.backgroundColor = "yellow";
newElem.style.textAlign = "center";
newElem.style.color = "green";
newElem.style.fontWeight = "bold";
newElem.style.fontSize = "30px";


let para = document.createElement('h3');
newElem.appendChild(para);

let newBtn = document.createElement('button');

obj[0].appendChild(newBtn);

newBtn.innerHTML = "Submit";
newBtn.style.padding ="20px 24px ";
newBtn.className = "btn btn-dark";
newBtn.style.fontsize = "24px"




// EVENTS
newBtn.addEventListener('click' , toggleBtn);
function toggleBtn(){
    console.log("You clicked on me!")
    newBtn.innerHTML = "Wow";
}


