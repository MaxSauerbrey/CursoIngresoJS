/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	numero = parseInt ( numero);
	numero = prompt ("Ingrese un numero entre 0 y 9");

	while(numero<0 || numero>10)
	{
		numero = parseInt (numero);
		numero = prompt ("Error, ingrese nuevamente un numero entre 0 y 9");
	
	}

	 txtIdNumero.value= numero ; 
}



//FIN DE LA FUNCIÓN