/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{

var i;
var nombreIngresado;
var temperaturaIngresada;
var sexoIngresado;
var edadIngresada;
var contadorHombres;
var contadorMujeres;
var edadPromedio;
var edadTotal;
var nombreMujerMasTemperatura;
var temperaturaMujerMas;
var banderaMujerMasTemperatura;


i=0;
contadorHombres=0;
contadorMujeres=0;
edadPromedio=0;
banderaMujerMasTemperatura= true;


while (i<2)
{

nombreIngresado=prompt("Ingrese su nombre");
console.log(nombreIngresado);

temperaturaIngresada= prompt ("Ingrese su temperatura");
temperaturaIngresada= parseInt (temperaturaIngresada);
while(isNaN(temperaturaIngresada))
{
	temperaturaIngresada= prompt ("Error, solo ingrese numeros");
	temperaturaIngresada= parseInt (temperaturaIngresada);
}
console.log(temperaturaIngresada);

sexoIngresado= prompt("Ingrese su sexo");
console.log(sexoIngresado);

edadIngresada= prompt("Ingrese su edad");
edadIngresada= parseInt(edadIngresada);
while( isNaN(edadIngresada))
{
	edadIngresada= prompt("Error, solo ingrese numeros");
	edadIngresada= parseInt(edadIngresada);
}
console.log(edadIngresada);

edadPromedio+= edadIngresada;

switch(sexoIngresado)
{
	case "Masculino":
	contadorHombres++;
	break;

	case "Femenino":
	contadorMujeres++;
	break;
}

if(banderaMujerMasTemperatura==true || sexoIngresado== "Femenino")
{
	temperaturaMujerMas= temperaturaIngresada;
	nombreMujerMasTemperatura= nombreIngresado;
	banderaMujerMasTemperatura=false;
}
else
{
if(temperaturaIngresada>temperaturaMujerMas)
{
	temperaturaMujerMas= temperaturaIngresada;
	nombreMujerMasTemperatura= nombreIngresado;
}
}


i++;	
}
//Fin del while


console.log("La cantidad de hombres es: " +contadorHombres);
console.log ("La cantidad de mujeres es: " + contadorMujeres);
console.log ("La edad promedio total es: " + (edadPromedio/i));
console.log ("La mujer con mayor temperatura es: " + nombreMujerMasTemperatura);







}
// var seguir;
// var razaIngresada;
// var pesoIngresado;
// var temperaturaIngresada;
// var edadIngresada;
// var peligroExtincion;
// var contadorEdad;
// var acumuladorEdad;
// var promedioEdad;
// var animalMasPesado;
// var razaMasPesado;
// var banderaMasPesado;
// var banderaTemperatura;
// var temperaturaMaxima;




// seguir=true;
// contadorEdad=0;
// acumuladorEdad=0;
// banderaMasPesado=true;
// banderaTemperatura=true;

// while(seguir==true)
// {
// razaIngresada= prompt ("Ingrese la raza");
// console.log(razaIngresada);

// pesoIngresado= prompt ("Ingrese el peso");
// pesoIngresado= parseInt (pesoIngresado);
// console.log (pesoIngresado);

// temperaturaIngresada= prompt("Ingrese su temperatura");
// temperaturaIngresada= parseInt(temperaturaIngresada);
// console.log (temperaturaIngresada);

// edadIngresada= prompt("Ingrese la edad");
// edadIngresada=parseInt (edadIngresada);
// acumuladorEdad += edadIngresada;
// contadorEdad++; 
// console.log (edadIngresada);

// peligroExtincion = confirm ("¿Esta en peligro de extincion?");
// console.log(peligroExtincion);

// if (banderaMasPesado==true)
// {
// 	animalMasPesado=pesoIngresado;
// 	razaMasPesado=razaIngresada;
// 	banderaMasPesado=false;
// }
// else
// {
// 	if(pesoIngresado>animalMasPesado)
// 	{
// 		animalMasPesado=pesoIngresado;
// 		razaMasPesado=razaIngresada;
// 	}
// }

// switch(peligroExtincion)
// {
// 	case true:
// 		if (banderaTemperatura==true)
// 		{
// 			temperaturaMaxima=temperaturaIngresada;
// 			banderaTemperatura=false;
// 		}
// 		else
// 		{
// 			if(temperaturaIngresada>temperaturaMaxima)
// 			{
// 				temperaturaMaxima=temperaturaIngresada;
// 			}
// 		}

// }

// seguir= confirm ("¿Desea ingresar otro animal?");
// }
// //Fin While

// promedioEdad= acumuladorEdad/contadorEdad;

// console.log ("El promedio de edad total es de " + promedioEdad);
// console.log ("La raza mas pesada es del " + razaMasPesado);
// console.log ("La temperatura maxima ingresada de los animales en extincion es : " + temperaturaMaxima);


// }
	
/*
Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()	

*/








	

// Enunciado  a)”bandera a full”
// de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
// sexo
// altura
// edad
// nombre
// se debe informar:

// 1-el nombre de la más alta de las mujeres
// 2-el nombre del  más viejo de los hombres 
// 3-el nombre del primer adolescente ingresado,
// (solo mostrar si y sólo si  hay  algún adolescente)
// NOTA:pedir datos por "prompt()" y mostrar por console.log()
//FIN DE LA FUNCIÓN


	
// var edad;
// var nombre;
// var seguir;
// var altura;
// var sexo;
// var alturaMujerMasAlta;
// var banderaAlturaMujerMasAlta;	
// var nombreMujerMasAlta;
// var banderaHombreMasViejo;
// var edadHombreMasViejo;
// var nombreHombreMasViejo;
// var banderaPrimerAdolescente;
// var nombrePrimerAdolescente;


// seguir=true;
// banderaAlturaMujerMasAlta = true;
// alturaMujerMasAlta=0;	
// edadHombreMasViejo=0;
// banderaAlturaMujerMasAlta= true;
// banderaPrimerAdolescente=true;

// while (seguir==true)
// {
	
// 	sexo= prompt ("Ingrese su sexo");
// 	while (sexo != "Masculino"&& sexo != "Femenino")
// 	{
// 		sexo= prompt ("Reingrese su sexo");
// 	}
// 	console.log(sexo);

// 	altura= prompt("Ingrese su altura");
// 	altura= parseInt(altura);
// 	console.log(altura);

// 	edad= prompt("Ingrese su edad");
// 	edad= parseInt(edad);
// 	console.log(edad);

// 	nombre= prompt("Ingrese su nombre")
// 	console.log(nombre);


// 	switch(sexo)
// 	{
// 		case "Femenino":
		
// 		if(banderaAlturaMujerMasAlta==true)
// 		{
// 			alturaMujerMasAlta=altura;
// 			nombreMujerMasAlta= nombre;
// 			banderaAlturaMujerMasAlta=false;
// 		}
// 		else
		 
// 		{
// 			if(altura>alturaMujerMasAlta)
// 			{
// 				alturaMujerMasAlta=altura;
// 				nombreMujerMasAlta=nombre;
// 			}
// 		}
// 		break;

// 		case "Masculino":
// 			if(banderaHombreMasViejo==true)
// 			{
// 				edadHombreMasViejo=edad;
// 				nombreHombreMasViejo=nombre;
// 				banderaHombreMasViejo=false;
// 			}
// 			else
// 			{
// 				if(edad>edadHombreMasViejo)
// 				{
// 					edadHombreMasViejo=edad;
// 					nombreHombreMasViejo=nombre;
// 				}
// 			}

// 	}

// 	if(edad>12 && edad<19)
// 	{
// 		if(banderaPrimerAdolescente==true)
// 		{
// 			nombrePrimerAdolescente=nombre;
// 			banderaPrimerAdolescente=false;
// 		}
// 	}
		
	

	
	
// 	seguir= confirm ("Desea seguir reingresando espectadores");
// }
// console.log ("El nombre de la mujer mas alta es " + nombreMujerMasAlta);
// console.log ("El nombre de el hombre mas viejo es " + nombreHombreMasViejo);
// console.log ("El nombre del primer adolescente ingresado " + nombrePrimerAdolescente);

//Fin del while.



	// Enunciado b)”sin banderas”
	// 	Se debe ingresar 10:
	// 	nombre
	// 	edad(0 y 115)
	// 	altura(30 y 230)
	// 	sexo
	// 	Dinero(puede ser positivo o negativo, pero debe ser un número)
	// 	CantidadDeHijos(0 y 10)
	// 	despues de validar todos los datos,
	// 	se debe informar:
		
	// 	1- nombre de la persona con edad más vieja
	// 	2- promedio de altura de las mujeres
	// 	3- nombre de la mujer más joven
	// 	NOTA:pedir datos por "prompt()" y mostrar por console.log(),
	// 	verificar que los datos  exitan antes de mostrarlos


// var datosIngresados;	
// var nombreIngresado;
// var edadIngresada;
// var alturaIngresada;
// var sexoIngresado;
// var dineroIngresado;
// var cantidadDeHijos;
// var edadPersonaMasVieja;
// var nombrePersonaMasVieja;
// var contadorAlturaMujeres;
// var acumuladorAlturaMujeres;
// var promedioAlturaMujeres;
// var edadMujerMasJoven;
// var nombreMujerMasJoven;

// datosIngresados=0;
// contadorAlturaMujeres=0;
// acumuladorAlturaMujeres=0;

// //edadPersonaMasVieja=0;



// while (datosIngresados<5)
// {

// 	nombreIngresado= prompt("Ingrese su nombre");
// 	//console.log(nombreIngresado);

// 	edadIngresada= prompt("Ingrese su edad");
// 	edadIngresada= parseInt(edadIngresada);
	
// 	while(edadIngresada<0 || edadIngresada>115)
// 	{
// 		edadIngresada= prompt("Error. Reingrese una edad entre 0 y 115");
// 		edadIngresada= parseInt(edadIngresada);
// 	}
// 	//console.log(edadIngresada);

// 	alturaIngresada= prompt("Ingrese su altura");
// 	alturaIngresada= parseInt(alturaIngresada);
// 	while (alturaIngresada<30 || alturaIngresada>230)
// 	{
// 		alturaIngresada= prompt("Error. Reingrese su altura entre 30 y 230");
// 		alturaIngresada= parseInt(alturaIngresada);		
// 	}
	
// 	//console.log (alturaIngresada);

// 	sexoIngresado= prompt("Ingrese su sexo. Femenino o Masculino.");
// 	//console.log(sexoIngresado);

// 	dineroIngresado= prompt("Ingrese el monto de deuda o prestamo");
// 	dineroIngresado= parseInt(dineroIngresado);
// 	while (dineroIngresado == 0)
// 	{
// 		dineroIngresado= prompt("Reingrese el monto de deuda o prestamo, no puede ser 0");
// 		dineroIngresado= parseInt(dineroIngresado);		
// 	}
// 	//console.log (dineroIngresado);

// 	cantidadDeHijos= prompt("Ingrese la cantidad de hijos");
// 	cantidadDeHijos= parseInt(cantidadDeHijos);
// 	while( cantidadDeHijos<0 || cantidadDeHijos>10)
// 	{
// 		cantidadDeHijos= prompt("Error. Reingrese la cantidad de hijos, entre 0 y 10");
// 		cantidadDeHijos= parseInt(cantidadDeHijos);
// 	}
// 	//console.log( cantidadDeHijos);



// 	if (datosIngresados== 0)
// 	{
// 		edadPersonaMasVieja = edadIngresada;
// 		nombrePersonaMasVieja = nombreIngresado; 
// 	}
// 	else 
// 	{
// 		if(edadIngresada>edadPersonaMasVieja)
// 		{
// 		edadPersonaMasVieja = edadIngresada;
// 		nombrePersonaMasVieja = nombreIngresado;
// 		}
// 	}

// 	switch(sexoIngresado)
// 	{
// 	case "Femenino": 
// 	acumuladorAlturaMujeres= acumuladorAlturaMujeres+alturaIngresada;
// 	contadorAlturaMujeres++;	
// 	break;
// 	}
	
// 	if(datosIngresados == 0 && sexoIngresado =="Femenino")
// 	{
// 		edadMujerMasJoven=edadIngresada;
// 		nombreMujerMasJoven=nombreIngresado;
// 	}
// 	else
// 	{
// 		if(edadIngresada<edadMujerMasJoven)
// 		{
// 		edadMujerMasJoven=edadIngresada;
// 		nombreMujerMasJoven=nombreIngresado;
// 		}
// 	}


	
// datosIngresados++;
// }
// //final del while




// promedioAlturaMujeres=acumuladorAlturaMujeres/contadorAlturaMujeres;


// console.log ("El nombre de la persona con edad más vieja es: " + nombrePersonaMasVieja );
// console.log ("El promedio de altura de las mujeres es: " + promedioAlturaMujeres);
// console.log ("El nombre de la mujer más joven es: " + nombreMujerMasJoven);
	
