

// --------------------------------------------------------------------------
// FUNCTION display pets in statsTable
function displayPet(i) {

		// document.getElementById("nameAtt").innerHTML = allPets[i].nickName;
		document.getElementById("specAtt").innerHTML = allPets[i].spec;
		document.getElementById("strAtt").innerHTML = allPets[i].str;
		document.getElementById("lvlAtt").innerHTML = 'Level: '+allPets[i].level;
		document.getElementById("intAtt").innerHTML = allPets[i].intel;
		document.getElementById("expAtt").innerHTML = allPets[i].exp;
		document.getElementById("vitAtt").innerHTML = allPets[i].vital;
		document.getElementById("manaAtt").innerHTML = allPets[i].mana;
		document.getElementById("coinCount").innerHTML = 'x'+allPets[i].coin;
		document.getElementById("petImage").src = allPets[i].neutralURL;

} // end displayAllPets()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// FUNCTION
function petSelection(j) {

	var i = localStorage.getItem("allPetIndex");

	// DECREMENTATION
	if (j == 0) {
		if (i == 0) {
			i = allPets.length - 1;
		} else {
			i--;
		}
	}
	// INCREMENTATION
	else {
		if (i == allPets.length - 1) {
			i = 0;
		} else {
			i++;
		}
	}

	// Update global Index for
	localStorage.setItem("allPetIndex", i);

	// Dislay Current Pet in statsTable
	displayPet(i);

} // end petSelection()
// --------------------------------------------------------------------------

	// document.getElementById("petImage").innerHTML = allPets[i].neutralURL;
		// document.getElementById("petImage").innerHTML =
		// "<img src='images/neutral/"+allPets[i].spec+".png' alt='Pet Picture'
		// 		id='petImg' style='margin: auto;'>";

		 // document.getElementById("petImage").setAttribute("src", allPets[i].neutralURL);
		// var petImage = document.getElementById("petImage");
		// var srcUpdate = petImage.src;
		// srcUpdate = allPets[i].neutralURL;