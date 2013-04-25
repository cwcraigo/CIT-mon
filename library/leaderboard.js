

// --------------------------------------------------------------------------
// FUNCTION
function get_leaderboard() {

  // GET INDEX OF CURRENT PET
  var i = localStorage.getItem("allPetIndex");

  // GET ALL PETS FROM LOCAL STORAGE
  var allPets = JSON.parse(localStorage.getItem("allPets"));

  // STRINGIFY CURRENT PET ARRAY
  var pet = JSON.stringify(allPets[i]);

  // GET PLAYERS GAMERTAG
  var gamertag = window.prompt("Please enter your gamertag.");

  // CREATE NEW WORKER
  var worker = new Worker('library/leaderboard_worker.js');

  // ----------------------------------------------------------------
  // EVENT LISTENER WHEN WORKER POSTS MESSAGE ON ITSELF
  worker.addEventListener('message', function(e){

    // GET ARRAY FROM WORKER
    var leaderboard_array = JSON.parse(e.data);

    // CHANGE VISIBILITY OF HTML DIVS
    document.getElementById("home").style.display='none';
    document.getElementById("tableDiv").style.display='block';

    // -----------------------------------------------
    // GET TABLE OBJECT
    document.getElementById("leaderboardTable").innerHTML = '';
    var lboardtable = document.getElementById("leaderboardTable");

    // CREATE AND APPEND TABLE ROW
    var aRow = document.createElement('TR');
    lboardtable.appendChild(aRow);

    // LOOP THROUGH ARRAY TO DISPLAY TABLE HEADINGS
    for(var pet in leaderboard_array[0]){

      // CREATE AND APPEND TABLE HEADINGS
      var aCell = document.createElement('TH');
      aCell.setAttribute("class","leaderHead");
      aRow.appendChild(aCell);
      aCell.innerText = pet;

    } // END TABLE HEADING LOOP

    // -----------------------------------------------
    // LOOP THROUGH ARRAY TO DISPLAY TABLE CONTENT
    for(var i=0; i<leaderboard_array.length; i++){

      // GET INDIVIDUAL ARRAY
      var stats = leaderboard_array[i];

      // CREATE AND APPEND TABLE ROW
      var aRow = document.createElement('TR');
      lboardtable.appendChild(aRow);

      // LOOP THROUGH INDIVIDUAL ARRAY TO DISPLAY STATS
      for(var key in stats){
        var aCell = document.createElement('TD');
        aCell.setAttribute("class","leaderData");
        aRow.appendChild(aCell);
        aCell.innerHTML = stats[key];

      } // END STATS LOOP

    } // END TABLE CONTENT LOOP

  },false);

  // -----------------------------------------------------------------
  // ACTIVATE WORKER / SEND WORKER DATA WHEN FUNCTION IS CALLED
  worker.postMessage({"cmd":"view", "pet": pet, "gamertag": gamertag});

} // end get_leaderboard()
// --------------------------------------------------------------------------










	// var xmlhttp;
 //  xmlhttp=new XMLHttpRequest();

    // //Create new object.
    // if (window.XMLHttpRequest){
    //   // code for IE7+, Firefox, Chrome, Opera, Safari
          // xmlhttp=new XMLHttpRequest();
    // } else {
    //   // code for IE6, IE5
    //   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // }

    //Function to print out response
    // xmlhttp.onreadystatechange=function() {
    //   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    //     // in event listner
    //     document.getElementById("home").style.visibility='hidden';
    //     document.getElementById("leaderboard").style.visibility='visible';
    //     document.getElementById("leaderboard").innerHTML=xmlhttp.responseText;
    //   }
    // }

    //Open object and send it.
    // inside worker
// xmlhttp.open("POST","/library/get_leaderboard.php",true); // set to false
// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.send("pet="+pet+"&gamertag="+gamertag);
    // send back string



