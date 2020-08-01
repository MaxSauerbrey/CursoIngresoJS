/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt(" ERROR!Ingrese nuevamente su número de clave.");
	}

	alert ("INGRESO CORRECTO");




}//FIN DE LA FUNCIÓN
