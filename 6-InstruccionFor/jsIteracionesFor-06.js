function mostrar()
{	
	var numero;
	numero = prompt ("Por favor, ingrese un numero");
	numero = parseInt (numero);
	var contadorPos;
	contadorPos=0;

	for (var i=1; numero>i; i++)
	{
		if(i%2==0)
		{
			console.log(i);
			contadorPos++;
		}
	}

console.log( "La cantidad de numeros pares son " + contadorPos);

	/*
	
	Enunciado:
	al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
	y mostrar la cantidad de numeros pares encontrados.

	*/


}//FIN DE LA FUNCIÓN