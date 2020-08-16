/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
var clave;

clave= prompt ("Ingrese su contraseña");

while (clave!== "utn750")
	{

	clave = prompt ("Contraseña incorrecta. Por favor, ingrese nuevamente su clave");

	}

alert ("Bienvenido a su usuario");



}

//FIN DE LA FUNCIÓN
// var claveIngresada;
// claveIngresada = prompt("ingrese el número clave.");

// while (claveIngresada != "utn750")
// {
// 	claveIngresada = prompt(" ERROR!Ingrese nuevamente su número de clave.");
// }

// alert ("INGRESO CORRECTO");



