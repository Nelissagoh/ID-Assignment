
$(document).ready(function () {
  const apikey = "63dfc7033bc6b255ed0c46b9";

  //get form values
  let logindata={
      "submit": false,
      "email": null,
      "password":null
  };

  //Create our submit form listener
  $("#submitbtn").on("click",function(e){

      //prevent default action of the button 
      e.preventDefault();

      //retrieve form data
      let email=$("#e").val();
      let password=$("#p").val();

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

        //check if the email and password entered is the same as what we store in our DB
        $.ajax(settings).done(function(response){
          for(var i=0;i<response.length;i++){
              if(response[i].email==email && response[i].password==password){
                  logindata['submit']=true
              }
          }

          if(logindata['submit']=true){
              logindata['email']=email;
              logindata['password']=password;
              console.log("Welcome back");
              window.location.href="game.html"
              
          }

          

          
        });

      });
    });
      
