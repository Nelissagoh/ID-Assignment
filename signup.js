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
    
        //Create our AJAX settings.
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
      //disable our button or show loading bar
      "beforeSend": function(){
        $("#submitbtn").prop( "disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#form").trigger("reset");
      }
    };
    

    //send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      console.log("Account created successfully");

      const player =
      document.querySelector('lottie-player');
      player.load('https://assets8.lottiefiles.com/packages/lf20_WY43rg.json');
      window.location.href="game.html";
      
    });
    
      })
    
    });