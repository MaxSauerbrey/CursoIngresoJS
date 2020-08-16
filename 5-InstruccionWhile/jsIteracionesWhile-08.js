/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= true;
	var flag;
	flag=0;

	//var multiplicacionNegativosFinal;
	//multiplicacionNegativosFinal=1;

	
	while(respuesta== true)
	{
		numeroIngresado= prompt ("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);		
		

		if (numeroIngresado>-1)
		{
			//alert("Positivo");
			sumaPositivos= sumaPositivos + numeroIngresado;
		}
		else
		{
			flag=1
			multiplicacionNegativos= multiplicacionNegativos*numeroIngresado;
			//alert ("Negativo");
			// multiplicacionNegativos= 1 * numeroIngresado;
			// multiplicacionNegativosFinal *= multiplicacionNegativos;  		
		}

		respuesta= confirm ("¿Desea agregar otro numero?");

	}
		
	if (flag ==0)
	{
	multiplicacionNegativos= 0;
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value= multiplicacionNegativos;

}

//FIN DE LA FUNCIÓN