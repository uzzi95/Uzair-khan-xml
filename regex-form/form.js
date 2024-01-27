// function validation(){
//     let username = document.getElementById('username').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let number = document.getElementById('number').value;
    
//     let userCheck = /^[0-9a-zA-Z]+$/ ; ///^[A-Za-z]+$/
//     let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let passwordCheck = /^[0-9a-zA-Z]+$/;
//     let numberCheck =  /^[0-9]+$/;

//     if(userCheck.test(username)){
//         document.getElementById('usererror').innerHTML = "";
//     }
//     else{
//         document.getElementById('usererror').innerHTML = "Invalid Username";
//         return false;
//     }

//     if(emailCheck.test(email)){
//         document.getElementById('emailerror').innerHTML = "";
//     }
//     else{
//         document.getElementById('emailerror').innerHTML = "Invalid Email";
//         return false;
//     }

//     if(passwordCheck.test(password)){
//         document.getElementById('passworderror').innerHTML = "";
//     }
//     else{
//         document.getElementById('passworderror').innerHTML = "Invalid Password";
//         return false;
//     }

//     if(numberCheck.test(number)){
//         document.getElementById('numbererror').innerHTML = "";
//     }
//     else{
//         document.getElementById('numbererror').innerHTML = "Invalid Number";
//         return false;
//     }

//     if(userCheck.test(username)  &&  emailcheck.test(email)  && passwordCheck.test(password)  && numberCheck.test(number)){

//         FileSystemWritableFileStream({

//             title: "Contact Form",
//             text:  "Your Form Has Been Submitted! ✅.",
//             timer: 5000
//         });
//         return false;
//     }
//     else{
//         alert("Invalid");
//         return false;

//     }
// }
function validation(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let number = document.getElementById('number').value;


    let userCheck = /^[0-9a-zA-Z]+$/;
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordCheck = /^[0-9a-zA-Z]+$/;
    let numberCheck = /^[0-9]+$/;


    if(userCheck.test(username)){
        document.getElementById('usererror').innerHTML = "";
    }
    else{
        document.getElementById('usererror').innerHTML = "Invalid Username"
        return false;           
    }


    if(emailCheck.test(email)){
        document.getElementById('emailerror').innerHTML = "";
    }
    else{
        document.getElementById('emailerror').innerHTML = "Invalid email"
        return false;           
    }


    if(passwordCheck.test(password)){
        document.getElementById('passworderror').innerHTML = "";
    }
    else{
        document.getElementById('passworderror').innerHTML = "Invalid password"
        return false;           
    }


    if(numberCheck.test(number)){
        document.getElementById('numbererror').innerHTML = "";
    }
    else{
        document.getElementById('numbererror').innerHTML = "Invalid Number"
        return false;           
    }


    if(userCheck.test(username) && emailCheck.test(email) && passwordCheck.test(password) && numberCheck.test(number) ){
        swal({
            title: "Contact Form",
            text: "Form Has Been Submitted",
            timer: 5000
          });
          return false;
    }
    else{
        alert("Invalid Form");
        return false;
    }
}