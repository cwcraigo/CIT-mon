var allPets;

// --------------------------------------------------------------------------
// THIS FUNCTION RUNS WHEN THE PAGE HAS LOADED
function init() {

	document.getElementById("tableDiv").style.display='none';
	document.getElementById("home").style.display='block';

	// localStorage.setItem('allPets', null);
	allPets  = new Array();
	localStorage.setItem('allPets',null);
	// set allPetIndex for viewing pets
	localStorage.setItem('allPetIndex',0);

	if (isEmpty( JSON.parse(localStorage.getItem("allPets")) ) ) {

		initAllPets("Robinsauron",3,8,7,12,0,7,150);
		initAllPets("Armstrango",10,5,10,5,1,5,100);
		initAllPets("Sompooliwag",5,5,10,10,2,1,10);
		initAllPets("McLaughchee",5 ,10,5 ,10,3,32,10000);
		initAllPets("Barneezle",5,10,5,10,4,50,20000);
		initAllPets("Erix",9,5,10,6,5,41,6000);
		initAllPets("Olavedon",8,7,8,7,6,33,700);
		initAllPets("Godfreeboo",7,7,9,7,7,15,3000);
		initAllPets("Jacksune",3,9,5,13,8,10,500);
		initAllPets("Rigbeast",8,10,6,6,9,40,8000);
		initAllPets("Barzoolet",3,10,8,9,10,30,4000);

	} else {

		allPets = JSON.parse(localStorage.getItem("allPets"));

		for (var i=0;i<allPets.length;i++) {

			allPets[i] = new Pet(allPets[i]);

		} // end loop
	} // end if
	displayPet(5);
} // end init()
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// PET CONSTRUCTOR
// PASS IN PROPERTY VALUES THAT ARE UNIQUE TO EACH PET
function Pet(associativeArray){
// alert('Pet '+JSON.stringify(associativeArray));
	for(var atttribute in associativeArray){
		this[atttribute] = associativeArray[atttribute];
	}

	this.nextLvl 		= this.level 	* 20;
	this.phyAttack 	= this.str 		* 1.5;
	this.magAttack 	= this.intel 	* 1.5;
	this.phyDef		 	= this.vital 	* 2;
	this.magDef 		= this.mana 	* 2;

	this.incrementLevel = function(){
		return this.level++;
	}
}
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// FUNCTION TO
function initAllPets(species,strength,inteligence,vitality,petmana,index,level,gold) {
	// var allPets  = new Array();
	var petStats = new Array();

	petStats = {
		"spec"			: species,
		"nickName"    	: "",
		"str"				: strength,
		"intel"			: inteligence,
		"vital"			: vitality,
		"mana"			: petmana,
		"level"			: level,
		"exp"				: 0,
		"coin"			: gold,
		"HP"				: 1,
		"MP"				: 1,
		"currFloor" 	: 1,
		"currRoom"	   : 1,
		"maxFloor"	   : 1,
		"maxRoom"	 	: 1,
		"bossKey"		: 0,
		"mood"			: "happy",
		"happyURL"	   : "",
		"sadURL"		   : "",
		"neutralURL"   : "images/neutral/"+species+".png",
		"activeFlag"   : 0,
		"index"			: index};

	if(index != 0) {
		allPets = JSON.parse(localStorage.getItem("allPets"));
	}

	allPets.push( new Pet(petStats));

	localStorage.setItem('allPets', JSON.stringify(allPets));

} // end initAllPets()
// --------------------------------------------------------------------------


