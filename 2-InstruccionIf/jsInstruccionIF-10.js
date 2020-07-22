function mostrar()
{
// 	//Genero el número RANDOM entre 1 y 10 
// 	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
// "EXCELENTE" para notas igual a 9 o 10,
// "APROBÓ" para notas mayores a 4,
// "Vamos, la proxima se puede" para notas menores a 4 
	
	//Declaración de variables 
	var numeroAleatorio;


	//Asignacion de variables
	numeroAleatorio = Math.floor(Math.random() * 10) + 1;

	

	if (numeroAleatorio>8)
	{
		alert( numeroAleatorio + "EXCELENTE");
	}
	else
	{
		if (numeroAleatorio>3)
		{
		alert ( numeroAleatorio + "APROBÓ");	
		}

		else
		{
			alert(numeroAleatorio + "Vamos, la proxima se puede")
		}
	}
	

}//FIN DE LA FUNCIÓN