function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		/*
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Tiene 31 dias");
		break;
		*/
		case "Febrero":
			alert("Tiene 29 dias.");
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert ("Tiene 30 dias");
			break;
		
		default: 
			alert ("Tiene 31 dias");
			break;
	}




}
	/*
		al seleccionar un mes informar.
		si tiene 28 días.
		si tiene 30 días.
		si tiene 31 días. 



	*/



//FIN DE LA FUNCIÓN