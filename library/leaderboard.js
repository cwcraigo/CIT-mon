

// --------------------------------------------------------------------------
// FUNCTION
function get_leaderboard() {

  var i = localStorage.getItem("allPetIndex");

  var allPets = JSON.parse(localStorage.getItem("allPets"));

  var pet = JSON.stringify(allPets[i]);

  var gamertag = window.prompt("Please enter your gamertag.");

	var xmlhttp;

    //Create new object.
    if (window.XMLHttpRequest){
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    //Function to print out response
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        document.getElementById("home").style.visibility='hidden';
        document.getElementById("dangerZone").style.visibility='visible';
        document.getElementById("dangerZone").innerHTML=xmlhttp.responseText;
      }
    }

    //Open object and send it.
    xmlhttp.open("POST","/library/get_leaderboard.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("pet="+pet+"&gamertag="+gamertag);

} // end get_leaderboard()
// --------------------------------------------------------------------------




