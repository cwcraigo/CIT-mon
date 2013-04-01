


// --------------------------------------------------------------------------
// SEPERATE THREAD OF JS WORDER
self.addEventListener('message', function(e) {

	// SET LOCAL DATA OBJECT
	var data = e.data;

	// DECLARE NEW AJAX OBJECT
	var ajaxObject = new XMLHttpRequest();

	// SWITCH COMMANDS POSTED TO WORKER
	switch(data.cmd) {
		// IF COMMAND IS VIEW
		case 'view':
			// SEND TO PHP SERVER THE DATA POSTED TO WORKER
			ajaxObject.open("POST","/library/get_leaderboard.php",false);
			ajaxObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxObject.send("pet="+data.pet+"&gamertag="+data.gamertag);

			// CHECK AJAX RESPONSE
			if (ajaxObject.readyState==4 && ajaxObject.status==200) {
				// POST STRING RETURNED FROM PHP SERVER
				self.postMessage(ajaxObject.responseText);
			}
			break;
		default:
	}; // END SWITCH


},false); // end self.addEventListener()
// --------------------------------------------------------------------------


