function mostrar()
{

	/*

	Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados


	*/

	var numero;
	numero = prompt ("Ingrese un numero");
	numero = parseInt (numero);
	var contadorDivisores;
	contadorDivisores=0;

	for (var i =1; numero>i; i++)
	{
		if(numero%i==0)
		{
			console.log (i);
			contadorDivisores++;
		}
	}

	console.log ("La cantidad de divisores para " + numero + " es de " + contadorDivisores);
}//FIN DE LA FUNCIÓN