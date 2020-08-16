/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	flag =0;
	respuesta=true;
	



	while(respuesta==true)
	{
	
		
		
		numeroIngresado = prompt("Bienvenido. Ingrese un numero, por favor.");
		numeroIngresado = parseInt (numeroIngresado);

		// if(flag==0)
		// {
		// 	numeroMaximo = numeroIngresado;
		// 	numeroMinimo = numeroIngresado;
		// 	flag=1;
		// }
		// else
		// {

		// if (numeroIngresado>numeroMaximo)
		// {
		// 	numeroMaximo=numeroIngresado;
		// }
		
		// else 
		// {
		// 	if(numeroIngresado<numeroMinimo)
		// 	{
		// 		numeroMinimo=numeroIngresado;
		// 	}
		// }
		// }

		if( flag==0 || numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if(flag ==0 || numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
			flag=1;	
		}

		respuesta= confirm ("Desea continuar?");

	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}
//FIN DE LA FUNCIÓN