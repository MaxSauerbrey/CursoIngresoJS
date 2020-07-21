//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
// mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 

function mostrar()

{	
	//Declaración.
	var edad; 
	var elEstadoCivil;

	//Inicializacion.
	edad = txtIdEdad.value; 
	elEstadoCivil = estadoCivil.value;

	//Parsear.
	edad= parseInt (edad);

	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert ("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN