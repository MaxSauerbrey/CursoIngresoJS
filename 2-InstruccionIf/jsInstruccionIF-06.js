function mostrar()
{
	// Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
	// o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
	// Max Sauerbrey. 
	//tomo la edad  

	//Declaracion de variable.
	var edad;

	//Inicializacion.
	edad= txtIdEdad.value;

	//Parsear.
	edad= parseInt(edad);

	//
	if (edad>17)
	{
		alert ("Usted es una persona mayor.");
	}

	else
	{
		if(edad>12)
		{
			alert("Usted es una adolescente");
		}
	
		else
		{
			alert("Usted es un niño");
		}	

	}


	/*

	*/
}