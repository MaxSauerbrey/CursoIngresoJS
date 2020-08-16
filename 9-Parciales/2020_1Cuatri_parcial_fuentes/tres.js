function mostrar()
{
/*	
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

//Declaracion de variables
var nombreIngresado;
var edadIngresada;
var sexoIngresado;
var estadoCivilIngresado;
var temperaturaCorporalIngresada;
var seguir;
var personaMasTemperatura;
var nombrePersonaMasTemperatura;
var banderaTemperatura;
var contadorMayoresViudos;
var contadorHombreSoltero;
var contadorHombreViudo;
var contadorTerceraEdadTemperaturaAlta;
var acumuladorHombresSolteros;

//Asignaciones
seguir = true;
banderaTemperatura = true;
contadorMayoresViudos=0;
contadorHombreSoltero=0;
contadorHombreViudo=0;
contadorTerceraEdadTemperaturaAlta=0;
acumuladorHombresSolteros=0;

// Condicionales 
//While principal
while (seguir== true)
{

nombreIngresado= prompt("Ingrese el nombre.");
console.log (nombreIngresado);

edadIngresada= prompt("Ingrese la edad.");
edadIngresada= parseInt(edadIngresada);
console.log(edadIngresada);

sexoIngresado = prompt ("Ingrese el sexo");
while(sexoIngresado !=="Masculino" && sexoIngresado !=="Femenino")
{
	sexoIngresado = prompt ("Error. Reingrese el sexo. Masculino o Femenino");
}
console.log (sexoIngresado);

estadoCivilIngresado= prompt ("Ingrese el estado civil.");
while (estadoCivilIngresado !== "Soltero" && estadoCivilIngresado !== "Casado" && estadoCivilIngresado !== "Viudo")
{
	estadoCivilIngresado= prompt ("Error. Reingrese el estado civil. Soltero, Casado o Viudo");
}
console.log (estadoCivilIngresado);

temperaturaCorporalIngresada= prompt("Ingrese la temperatura corporal");
temperaturaCorporalIngresada= parseInt(temperaturaCorporalIngresada);
console.log (temperaturaCorporalIngresada);

//If a)
if (banderaTemperatura== true)
{
personaMasTemperatura= temperaturaCorporalIngresada;
nombrePersonaMasTemperatura=nombreIngresado;
banderaTemperatura = false;
}
else
{
	if(temperaturaCorporalIngresada > personaMasTemperatura)
	{
	personaMasTemperatura= temperaturaCorporalIngresada;
	nombrePersonaMasTemperatura=nombreIngresado;
	}
}

//switch b)

switch(estadoCivilIngresado)
{
	case "Viudo":
		if (edadIngresada>17 && edadIngresada<61)		
		{
			contadorMayoresViudos++;	
		}
}

//switch c)
switch(estadoCivilIngresado)
{
	case "Soltero": 
		if(sexoIngresado== "Masculino")
		{
			acumuladorHombresSolteros+= edadIngresada;
			contadorHombreSoltero++;
		}
		break;
	case "Viudo":
		if(sexoIngresado=="Masculino")
		{
			contadorHombreViudo++;
		}
		break;
}

if (edadIngresada>60)
{
	if(temperaturaCorporalIngresada>38)
	{
		contadorTerceraEdadTemperaturaAlta++;
	}
}

seguir= confirm("¿Desea ingresar a otro pasajero?");
}
//Fin del while principal

alert ("El nombre de la persona con mas temperatura es: " + nombrePersonaMasTemperatura);
alert ("La cantidad de mayores de edad viudos son: " + contadorMayoresViudos);
alert ("La cantidad de hombres que hay solteros o viudos son: " + (contadorHombreSoltero+contadorHombreViudo))
alert ("La cantidad de personas de la tercera edad que tiene mas de 38 de temperatura es: " + contadorTerceraEdadTemperaturaAlta);
alert ("El promedio de edad entre los hombres solteros es: " + (acumuladorHombresSolteros/contadorHombreSoltero));





/*
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
}
