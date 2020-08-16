/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var flag;
	var diferencia;

	//asignaciones
	respuesta=true;
	sumaPositivos=0;
	sumaNegativos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorPares=0;
	contadorCeros=0;
	flag=0;
	diferencia= (sumaPositivos-sumaNegativos);


	//Condicionales
	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado= parseInt (numeroIngresado);
		
	if (numeroIngresado<0)
	{
		sumaNegativos += numeroIngresado;
		contadorNegativos++;
		flag=1;
	}
	else
	{
		if(numeroIngresado>-1)
		{
			sumaPositivos+= numeroIngresado;
			contadorPositivos++;	
		}
		if(numeroIngresado== 0)
		{
			contadorCeros++;

		}
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}
	}	

	
		respuesta=confirm("Desea ingresar otro numero?");
	}//fin del while
	if (flag==1)
	{
		contadorNegativos *= (-1);
	}

	console.log("la suma de los numeros positivos es : " + sumaPositivos);
	console.log("la suma de los numeros negativos es : "+sumaNegativos);
	console.log("la cantidad de numeros positivos sumados son: " + contadorPositivos);
	console.log("la cantidad de numeros negativos sumados son: " + contadorNegativos);
	console.log("La cantidad de 0 ingresados es " + contadorCeros);
	console.log("La cantidad de numeros pares ingresados es " + contadorPares);
	console.log("El promedio de los numeros positivos es: " + sumaPositivos/contadorPositivos);
	console.log("El promedio de los numeros negativos es: " + sumaNegativos/contadorNegativos);
	console.log("La diferencia entre numeros positivos y numeros negativos es " + diferencia);
}//FIN DE LA FUNCIÓN