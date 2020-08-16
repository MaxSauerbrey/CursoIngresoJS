/*
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	//txtIdSuma.value;
	//txtIdPromedio;
	while (contador<5)
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador= acumulador + numeroIngresado;
		contador++;
	}
	
	acumulador= parseInt(acumulador);
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN

/*

var numeroIngresado;
var contador;
var suma; 
var promedio;

contador=0; // 1era parte aseguro el ingreso
suma=0;
while (contado<3)//2da parte aseguro el ingreso;
{
	numeroIngresado= prompt ("Ingrese numero");
	numeroIngresado= parseInt (numeroIngresado);
	suma= suma+ numeroIngresado;
	contador= contador++;//3era modifico el valor para salir 
}
//CONTADOR =3 
console.log ("salio del while con" + contador);
promedio = suma/contador;

*/

/*
var clave;
clave= prompt ("ingrese clave");
while( clave != "clavesecreta")
{
	clave= prompt ("ingrese clave");
}
alert ("Bienvenido");


*/

/*
var clave;
clave= prompt ("ingrese clave");
while( clave != "clavesecreta")
{
	clave= prompt ("ingrese clave");
}
alert ("Bienvenido");
*/
/*
var contador;
var edad;
var sexo;
var temperatura;
contador=0;

while (contador<10)
{
	edad=prompt ("Ingrese edad");
	edad=
}


*/