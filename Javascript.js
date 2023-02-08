
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

$(document).ready(function () {

const apikey = "63dfc7033bc6b255ed0c46b9";

  //[STEP 1]: Create our submit form listener
  $("#submitbtn").on("click", function (e) {
    console.log("Submitted");

    //prevent default action of the button 
    e.preventDefault()

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let username = $("#n").val();
    let email = $("#e").val();
    let password = $("#p").val();

  //Get all documents from the username collection
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://registration-e380.restdb.io/rest/username",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": apikey,
    "cache-control": "no-cache"
  },
}

    //get form values when user clicks on submit
    //Adapted from restdb api
    let data = {
      "username": username,
      "email": email,
      "password": password
    };

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://registration-e380.restdb.io/rest/username",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": apikey,
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(data),
  "beforeSend": function(){
    $("#submitbtn").prop( "disabled", true);
    $("#add-contact-form").trigger("reset");
  }
};

$.ajax(settings).done(function (response) {
  console.log("Account created successfully");
  window.location.href='../html/index.html';
});

  })

});




var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}