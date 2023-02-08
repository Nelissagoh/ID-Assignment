
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Add the variable for all the element where we have added the id
let signupbtn=document.getElementById("signupbtn")
let loginbtn=document.getElementById("loginbtn")
let namebox=document.getElementById("namebox")
let header=document.getElementById("header")
let submitbtn=document.getElementById("submitbtn")



//click btn function for login btn
loginbtn.onclick = function(){
    namebox.style.maxHeight="0"; //hide name field
    header.innerHTML="Login In"; //change title when the login btn is press
    //login in btn will change color when it is being press
    signupbtn.classList.add("not");
    loginbtn.classList.remove("not");
}
//click btn function for signup btn
signupbtn.onclick = function(){
    namebox.style.maxHeight="60px";
    header.innerHTML="Sign Up";
    signupbtn.classList.remove("not");
    loginbtn.classList.add("not");
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

