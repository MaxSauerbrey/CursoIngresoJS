function mostrar()
{
	var edad; 

	edad = txtIdEdad.value;
	edad = parseInt(edad);


	

	 if(edad<13 || edad>17)
	 {
		alert("La edad ingresada no pertenece a un adolescente");
	 }



	 /* if(edad>12 && edad<18)
	 {

	 }
	else
	{
		alert ("Usted no es adolescente");
	}

	Esta mal porque estoy utilizando un if que no aprovecho
	
	Esta tercera se podria usar 

	if !(edad>13 && edad<18)
	*/



	//tomo la edad  
	//En este caso no puedo usar &&, ya que
	// una de las dos siempre va a ser falso
	// if(edad<12 && edad>18) ejemplo 8, es menor que 12 pero no mayor que 18
	// por eso debo usar ||, ya que necesito que una de las dos se cumpla
}//FIN DE LA FUNCIÓN