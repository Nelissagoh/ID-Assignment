let signupbtn=document.getElementById("signupbtn")
let loginbtn=document.getElementById("loginbtn")
let namebox=document.getElementById("namebox")
let header=document.getElementById("header")

loginbtn.onclick = function(){
    namebox.style.maxHeight="0";
    header.innerHTML="Login In";
    signupbtn.classList.add("not");
    loginbtn.classList.remove("not");
}

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