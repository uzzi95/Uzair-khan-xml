// //SET INTERVAL
// setInterval(function() {
//     document.write("WOW!")
// }, 2000)

// //SET TIMEOUT
// setTimeout(function() {
//     console.log("WAH BHAI!")
// }, 3000)


//PROMISE
let promiseOne = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("THIS IS FIRST PROMISE!")
        }, 2000)
    })
    // SECOND PROMISE
let promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            name: "Henry",
            email: "Henry@gmail.com"
        })
    }, 3000)
})

promiseTwo.then(function(user) {
    console.log(user);
})

// THIRD PROMISE
let promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            username: "Mike",
            password: "12345"
        })
    }, 4000)
})

promiseThree.then(function(myUser) {
    return myUser.password;
}).then(function(abc) {
    console.log(abc)
})