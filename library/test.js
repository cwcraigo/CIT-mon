function petSelection(j)
{
	var i = localStorage.getItem("allPetIndex");

	// DECREMENTATION
	if (j == 0)
	{
		if (i == 0)
		{
			i = allPets.length - 1;
		}
		else
		{
			i--;
		}
	}
	// INCREMENTATION
	else
	{
		if (i == allPets.length - 1)
		{
			i = 0;

		}
		else
		{
			i++;
		}
	}

	// Update global Index for 
	localStorage.setItem("allPetIndex", i);
	// Dislay Current Pet in statsTable
	displayPet(i);

}


<button onclick="petSelection(0)"> decrement
<button onclick="petSelection(1)"> increment