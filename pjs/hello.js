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

//FOURTH PROMISE
let promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ name: "CAMEL", password: "123456" })
        } else {
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }

    }, 4000)
})
promiseFour
    .then(function(userData) {
        returnuserData.name
    })
    .then(function(myData) {
        console.log(myData);
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log("FINALLY!")
    })

let promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({ car: "VW", color: "white" })
        } else {
            reject("ERROR : THIS CAR IS NO LONGER EXIST IN STOCK!")
        }

    }, 2000)
})
async function ConsumedPromiseFive() {
    try {

        let response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}


ConsumedPromiseFive()