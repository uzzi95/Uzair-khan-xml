let promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("This is a promise");
    },2000)
})

let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("This is promise 2")
    },2000)
})

promiseTwo.then(function(user){
    console.log(user);
})

let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name: "Daniyal" , email: "Daniyal@gmail.com"})
    },4000)
})
promiseThree.then(function(myText){
    // console.log(myText);
    return myText.email;            //Return is used to get the simgle value from the object
}).then(function(userValue){
    console.log(userValue);
})


// REJECT Condition

let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name: "Hamza" , email: "Hamza@gmail.com"})
        }
        else{
            reject("ERROR : WRONG")
        }
    },6000)
})

promiseFour.then(function(apple){
    return apple.email
}).then(function(mango){
    console.log(mango);
}).catch(function(error){                   //Catch is used for reject & return is used for resolve
    console.log(error);
})
.finally(function(){
    console.log("The promise has been resolved or rejected");
})

// ASYNC CONDITION

let promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name: "Ahsan" , email: "Ahsan@gmail.com"})
        }
        else{
            reject("ASYNC")
        }
    }, 2000)
})

async function consumedpromiseFive(){
    try{
        let res = await promiseFive
        console.log(res);
    }
    catch(error){
            console.log(error);
        }
}
consumedpromiseFive()


// ASYNC CONDITION 2    (Bringing someone eleses data to ours)

async function usersData(){
    try{
        let data = await fetch ('https://jsonplaceholder.typicode.com/users');  //Fetch is used to get data from outsource
        let myData = await data.json()      //Await is used to wait for print until data is fectched
        console.log(myData)
        document.write(JSON.stringify(myData))      //JSON.stringify is used to get JSON data in same form 
    }
    catch(error){
        console.log(error);
    }
}
usersData()