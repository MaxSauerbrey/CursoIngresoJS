function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado)
	{	
		case "Cordoba":
		case "Bariloche":
			alert("Este destino se encuentra en el Sur");
			break;
								
		case "Cataratas":			
		case "Mar del plata":
			alert ("Este destino se encuentra en el Oeste ");
			break;	


	}




	

/*

 Al selecionar un destino , indicar el punto cardinal de nuestro 
 pais en donde se encuentra Norte, Sur, Este u Oeste





*/

}
//FIN DE LA FUNCIÓN