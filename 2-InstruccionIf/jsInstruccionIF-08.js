//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
//pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' 

function mostrar()
{	

	//Declaración.
	var edad; 
	var elEstadoCivil; 

	//Inicializacion.
	edad = txtIdEdad.value;
	elEstadoCivil= estadoCivil.value;

	//Parsear.
	edad = parseInt ( edad);

	if ( edad>18 && elEstadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN