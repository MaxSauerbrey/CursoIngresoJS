/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	sexo = prompt ("Ingrese su sexo. Escriba M para masculino y F para femenino");
	sexo = sexo.toUpperCase();
		
	while (sexo != "M" && sexo!= "F")
	{
		sexo = prompt ("Error! Ingrese su sexo nuevamente");
		sexo = sexo.toUpperCase();
	}

	txtIdSexo.value = sexo; 

}//FIN DE LA FUNCIÓN