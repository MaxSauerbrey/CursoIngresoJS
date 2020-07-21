function mostrar()
{
	//Genero el número RANDOM entre 1 y 10. 
	//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.

	var numeroMin;
	var numeroMax; 	


	numeroMin=0; 
	numeroMax=11;
	
	

	alert (Math.floor(Math.random() * (numeroMax - numeroMin) + numeroMin )); 

	


}//FIN DE LA FUNCIÓN