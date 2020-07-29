function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var estadiaBase;
	var precioAumento;
	estacionIngresada =txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	 

	estadiaBase=15000;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
						
				switch(estacionIngresada)
				{
					case "Invierno":
					precioAumento = estadiaBase + (estadiaBase*0.2);
					alert (precioAumento);
					break;

					case "Verano":
					precioAumento = estadiaBase - (estadiaBase*0.2);
					alert (precioAumento);
					break;	

					default:
					precioAumento = estadiaBase + (estadiaBase*0.1);
					alert (precioAumento);
					break;	

			
				}

				break;

		case "Cataratas":
						
						 switch (estacionIngresada)
						 {
							case "Invierno": 
							precioAumento = estadiaBase - (estadiaBase*0.1);
							alert (precioAumento);
							break;

							case "Verano": 
							precioAumento = estadiaBase + (estadiaBase*0.1);
							alert (precioAumento);
							break;

							default:
							precioAumento = estadiaBase + (estadiaBase *0.1);
							alert(precioAumento);
							break;				 
						 }
								 
				break;		 	
		 case "Mar del plata":
						
						switch (estacionIngresada)
							{
							case "Invierno":
								precioAumento= estadiaBase - (estadiaBase *0.2)
								alert (precioAumento);
								break;
							case "Verano":
								precioAumento = estadiaBase + (estadiaBase*0.2)
								alert (precioAumento);
								break;
							default:		
								precioAumento = estadiaBase + (estadiaBase*0.1)
								alert (precioAumento);
								break;
							 }	
				break;			 	
							

		// or default
				case "Cordoba":	
							
						switch (estacionIngresada)
							{
							case "Invierno": 
								precioAumento = estadiaBase - (estadiaBase* 0.1)
								alert (precioAumento);
								break;
							case "Verano":
								precioAumento = estadiaBase + (estadiaBase*0.1)
								alert (precioAumento);
								break;	
							default:
								alert(estadiaBase)
								break;		


							} 

						}
		}


/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y
localidad para vacacionar para poder calcular el precio final 

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Crdoba tiene el precio sin descuento
*/
//FIN DE LA FUNCIÓN