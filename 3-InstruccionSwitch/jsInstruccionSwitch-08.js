function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			alert ("En este destino hace FRIO.");
			break;		
		default: 
			alert ("En este destino hace CALOR.");
			break;			
	}



}



//FIN DE LA FUNCIÓN