
function mostrar()
{
	/*	
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra 
*/


var contador; 
var alcoholBarato;
var flag;
var cantidadBarato;
var fabricanteBarato;
var cantidadTotalJabon;
var cantidadTotalBarbijo;
var cantidadTotalAlcohol;
var contadorJabon;
var contadorBarbijo;
var contadorAlcohol;
var promedioJabon;
var promedioBarbijo;
var promedioAlcohol;
var productos;

flag==0;
contador=0;
cantidadTotalJabon=0;
cantidadTotalBarbijo=0;
cantidadTotalAlcohol=0;
contadorJabon=0;
contadorBarbijo=0;
contadorAlcohol=0;



while ( contador<2)
{
   
   productos= prompt( "Ingrese el producto que desea cargar, barbijo, jabón o alcohol");

while (!(productos== "barbijo" || productos== "jabon" || productos == "alcohol"))	
   {
	   
	   productos= prompt("Error, ingrese nuevamente");
   }	

   console.log (productos);

   var precio;
   precio= prompt("Ingrese el precio de su producto");
   precio = parseInt (precio);

while (isNaN(precio) || precio<100 || precio>300)
   {
	precio= prompt("Error, reingrese el precio de su producto");
	precio= parseInt(precio);
   }

   console.log (precio);

   var cantidad;
   cantidad= prompt("Ingrese la cantidad que quiere ingresar");
   cantidad= parseInt(cantidad);

 while (isNaN(precio) || cantidad<1 || cantidad>1000)
 {
	
	cantidad= prompt("Error,reingrese la cantidad que quiere ingresar");
	cantidad= parseInt(cantidad);
 }  
 console.log ( cantidad);

 var marca;
 var fabricante;

 marca = prompt ("Ingrese la marca");
 fabricante = prompt ("Ingrese el fabricante");

 console.log (marca);
 console.log (fabricante);




 
 
switch(productos)
{
	case "alcohol":

			if (flag=0 || alcoholBarato>precio)
			{
			alcoholBarato=precio;
			cantidadBarato= cantidad;
	
			fabricanteBarato=fabricante;
			flag=1
			}

			
			
			cantidadTotalAlcohol+=cantidad
			contadorAlcohol++;
	break;
	case "jabon":
				
				cantidadTotalJabon += cantidad;
			
			contadorJabon++;	
	break;
	case "barbijo":
		
		
			cantidadTotalBarbijo+= cantidad;
		
		contadorBarbijo++;
		break;

}	
// else
// {
// 	if(precio<alcoholBarato)
//  {
// 	alcoholBarato=precio;
	
//  }	
// }




contador++;
}





console.log("El precio del alcohol mas barato es : " + alcoholBarato + " $, la cantidad de unidades son " + cantidadBarato + " unidades, y el fabricante es " + fabricanteBarato  ); 
console.log ("Las unidades totales de jabon son " + cantidadTotalJabon + " unidades");

promedioBarbijo = (cantidadTotalBarbijo/contadorBarbijo);
promedioJabon = (cantidadTotalJabon/contadorBarbijo);
promedioAlcohol = (cantidadTotalAlcohol/contadorAlcohol);

// if(cantidadTotalAlcohol>cantidadTotalJabon && cantidadTotalAlcohol>cantidadTotalBarbijo)
// {
// 	cantidadTotalAlcohol= console.log ("Alcohol");
// console.log ("El promedio es de " + promedioAlcohol);
// }
// else 
// {
// 	if(cantidadTotalJabon>cantidadTotalBarbijo && cantidadTotalJabon>cantidadTotalAlcohol)
// 	{
// 	cantidadTotalJabon="Jabon";	
// 	console.log ("El tipo con mas unidades es " + cantidadTotalJabon + " y el promedio es de " + promedioJabon) ;
// 	}

// 	else
// 	{
// 		if(cantidadTotalBarbijo>cantidadTotalAlcohol && cantidadTotalBarbijo>cantidadTotalJabon)
// 		{
// 		cantidadTotalBarbijo="Barbijo";
// 		console.log ("El tipo con mas unidades es " + cantidadTotalBarbijo + " y el promedio es de " + promedioBarbijo );	
// 		}
// 	} 
// }

}



/*	
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra 
c) Cuántas unidades de jabones hay en total 
*/




