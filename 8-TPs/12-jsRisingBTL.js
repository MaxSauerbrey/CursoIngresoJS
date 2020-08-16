/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada
 e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	 var edadIngresada;
	 edadIngresada = parseInt (edadIngresada);
	 edadIngresada = prompt ("Ingrese su edad (18 y 90 años inclusive)"); 
	 
	while ((edadIngresada<18 || edadIngresada>90))
	{
		edadIngresada = parseInt (edadIngresada);
	 	edadIngresada = prompt ("ERORR!!! Por favor, reingrese su edad.");
	} 
	
	txtIdEdad.value= edadIngresada;

	var sexoIngresado;
	 sexoIngresado = prompt ("Ingrese su sexo, m o f");
	{
	while (!(sexoIngresado == "m" || sexoIngresado == "f"))
	{
		sexoIngresado = prompt ("ERROR!!! Ingrese nuevamente su sexo.");
	}
	txtIdSexo.value = sexoIngresado;

	var estadoCivilIngresado;
	estadoCivilIngresado =	parseInt(estadoCivilIngresado);
	estadoCivilIngresado = prompt ("Ingrese su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos. ")

	}
	while (estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado =	parseInt(estadoCivilIngresado);
		estadoCivilIngresado = prompt ("ERROR! Por favor reingrese su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos. ")

	}
		switch(estadoCivilIngresado)
		{
		
			case "1":
				estadoCivilIngresado= "soltero";
				break;
			case "2":
				estadoCivilIngresado ="casados";
				break;
			case "3":
				estadoCivilIngresado = "divorciado";
				break;
			default:
				estadoCivilIngresado = "viudo";
				break;			
		}
		txtIdEstadoCivil.value = estadoCivilIngresado;

	var sueldoBruto;
	sueldoBruto = parseInt (sueldoBruto);
	sueldoBruto = prompt("Ingrese su sueldo bruto");	

	while (!(sueldoBruto>8000)) 
	{
		sueldoBruto = parseInt (sueldoBruto);
	 	sueldoBruto = prompt("Error! Reingrese su sueldo bruto, debe ser mayor a 8000");
	 
	}	

	txtIdSueldo.value = sueldoBruto;

	var numeroLegajo;
	numeroLegajo= parseInt (numeroLegajo);
	numeroLegajo = prompt ("Ingrese su numero de legajo");

	while (!(numeroLegajo >999 && numeroLegajo<10000))
	{
		numeroLegajo= parseInt (numeroLegajo);
	 	numeroLegajo = prompt ("Error!! Reingrese su numero de legajo");
	}
	txtIdLegajo.value = numeroLegajo;

	var nacionalidad;
	nacionalidad = prompt ("Ingrese su nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while (!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N"))
	{
		var nacionalidad;
		nacionalidad = prompt ("Error!! Reingrese su nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}
	
	switch(nacionalidad)
	{
		case "A":
			nacionalidad = "Argentino";
			break;
		case "E":
			nacionalidad = "Extranjero";
			break;
		default:
			nacionalidad = "Nacionalizados";
			break;	
	}


	txtIdNacionalidad.value = nacionalidad;
	

}
	/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada
 e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

