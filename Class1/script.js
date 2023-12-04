
// function add(a,b) {
//     if(a+b>=10){
//         console.log("Pass");
//     }else{
//         console.log("Fail");
//     }
// }
// add(2,9)




// -------------Enter name in input and alert it with that name

// function displayName() {
//     let name = document.getElementById('input').value;
//     welcome(name)
// }
// function welcome(data) {
//     alert(data + " Welcome to our webpage");
// }



// --------------Insert Name print on Page

// function displayName() {

//     let name = document.getElementById('input').value;
//     document.getElementById('h1').innerText= "Hello "+ name;

// }


// --------------Login and print

function userLogin() {

   let u =  document.getElementById('usr').value;
   let p =  document.getElementById('pass').value;

   if (p=="abc@123") {
    document.getElementById('msg').innerText="Login Successful, Welcome "+ u;
   } else {
    document.getElementById('msg').innerText="Wrong Password, Please Enter again";
   }
}