function mostrar()
{
/*  
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/

//Declaracion de variables
var seguir;
var productoIngresado;
var cantidadesBolsasIngresadas;
var precioPorBolsaIngresado;
var acumuladorBolsasTotales;
var acumuladorPreciosTotales;
var precioBolsasDescuento;
var precioTotalPorCompra;
var precioFinalSinDescuento;
var acumuladorBolsasArena;
var acumuladorBolsasCal;
var acumuladorBolsaCemento;
var acumuladorNombreCemento;
var acumuladorNombreArena;
var acumuladorNombreCal;
var acumuladorPrecioArena;
var acumuladorPrecioCemento;
var acumuladorPrecioCal;

//Asignacion de variables
seguir = true;
acumuladorBolsasTotales=0;
acumuladorPreciosTotales=0;
precioFinalSinDescuento=0;
acumuladorBolsasArena=0;
acumuladorBolsasCal=0;
acumuladorBolsaCemento=0;

//Comienzo del while principal
while(seguir==true)
{

productoIngresado= prompt( "¿Desea ingresar Arena, Cal, o Cemento?");
while(productoIngresado !== "Arena" && productoIngresado !== "Cal" && productoIngresado !== "Cemento")
{
  productoIngresado= prompt( "Error. Reingresar Arena, Cal, o Cemento");
}  
console.log(productoIngresado);

cantidadesBolsasIngresadas= prompt("¿Cuantas bolsas desea ingresar?");
cantidadesBolsasIngresadas= parseInt (cantidadesBolsasIngresadas);
console.log(cantidadesBolsasIngresadas);
acumuladorBolsasTotales += cantidadesBolsasIngresadas;


precioPorBolsaIngresado= prompt("Ingrese el precio elegido.");
precioPorBolsaIngresado= parseInt(precioPorBolsaIngresado);
while (precioPorBolsaIngresado<1)
{
  precioPorBolsaIngresado= prompt("Error. Reingrese un precio mayor a 0.");
  precioPorBolsaIngresado= parseInt(precioPorBolsaIngresado);
}
console.log(precioPorBolsaIngresado);
acumuladorPreciosTotales += precioPorBolsaIngresado;

precioTotalPorCompra= precioPorBolsaIngresado*cantidadesBolsasIngresadas;
precioFinalSinDescuento += precioTotalPorCompra;

switch(productoIngresado)
{
  case "Arena":
  acumuladorBolsasArena+=cantidadesBolsasIngresadas;
  acumuladorPrecioArena+=precioPorBolsaIngresado*cantidadesBolsasIngresadas;
  acumuladorNombreArena= productoIngresado;

  break;

  case "Cal":
  acumuladorBolsasCal+=cantidadesBolsasIngresadas;
  acumuladorPrecioCal+=precioPorBolsaIngresado*cantidadesBolsasIngresadas;
  acumuladorNombreCal= productoIngresado; 
  break;

  case "Cemento":
    acumuladorBolsaCemento+=cantidadesBolsasIngresadas;
    acumuladorPrecioCemento+=precioPorBolsaIngresado*cantidadesBolsasIngresadas;
    acumuladorNombreCemento= productoIngresado;
  break;
}


seguir = confirm ("¿Desea ingresar otro producto?");
}
//Termino del while principal

console.log ("El importe total a pagar sin descuento es: " + (precioFinalSinDescuento));

if(acumuladorBolsasTotales>10 && acumuladorBolsasTotales<31)
{
  precioBolsasDescuento= precioFinalSinDescuento- (precioFinalSinDescuento*0.15);
  console.log("el importe total a pagar con descuento es de: " +precioBolsasDescuento);
}
else
{
if(acumuladorBolsasTotales>30)
{
precioBolsasDescuento= precioFinalSinDescuento- (precioFinalSinDescuento*0.25);
console.log("el importe total a pagar con descuento es de: " +precioBolsasDescuento);
}
}

if (acumuladorBolsasArena>acumuladorBolsasCal && acumuladorBolsasArena>acumuladorBolsaCemento)
{
  console.log ("El tipo con mas cantidad de bolsas es " + acumuladorNombreArena);
}
else
{
  if(acumuladorBolsasCal>acumuladorBolsaCemento)
  {
    console.log ("El tipo con mas cantidad de bolsas es " + acumuladorNombreCal);
  } 
  else
  {
    console.log ("El tipo con mas cantidad de bolsas es " + acumuladorNombreCemento);
  }
}

if(acumuladorPrecioArena>acumuladorPrecioCal && acumuladorPrecioArena>acumuladorPrecioCemento)
{
  console.log( "El tipo mas caro es " + acumuladorNombreArena);
}
else 
{
  if(acumuladorPrecioCal>acumuladorPrecioCemento)
  {
  console.log( "El tipo mas caro es " + acumuladorNombreCal);
  }
  else
  {
    console.log( "El tipo mas caro es " + acumuladorNombreCemento);
  }
}


/*
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/




}
