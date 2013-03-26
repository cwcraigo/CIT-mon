// --------------------------------------------------------------------------
// FUNCTION
function testing() {
  alert(JSON.stringify(allPets));
} // end storePetArray()
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// FUNCTION TO STORE ARRAY OF PET OBJECTS
function storePetArray(allPets) {
  localStorage.setItem('allPets', JSON.stringify(allPets));
} // end storePetArray()
// --------------------------------------------------------------------------




// --------------------------------------------------------------------------
// FUNCTION TO RETRIEVE ARRAY OF PET OBJECTS
function retrievePetArray() {
	return JSON.parse(localStorage.getItem('allPets'));
} // end retrievePetArray()
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// FUNCTION TO STORE AND RETRIEVE ARRAY OF PET OBJECTS
function refreshPetLib(allPets) {
	var allPets = new Array();
	storePetArray(allPets);
	allPets = retrievePetArray();
	return allPets;
} // end refreshPetLib()
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// FUNCTION RETURNS FALSE IF PARAM CONTAINS PROPERTIES
function isEmpty(obj) {
	// for each property in the object
  for(var prop in obj) {
  	// if object has a property then return false
    if(obj.hasOwnProperty(prop)) {
    	return false;
    }
  }
  // return true if loop doesn't find a property
  return true;
} // end isNotEmpty()
// --------------------------------------------------------------------------






