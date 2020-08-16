function mostrar()
{
//   Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),

// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo con mas cantidad de bolsas.
// f) El tipo mas caro 


var seguir;
var producto;
var cantidad;
var precio;
var cantidadArena;
var cantidadCal;
var cantidadCemento;
var cantidadTotal;
var precioArena;
var precioCal;
var precioCemento;
var precioTotal;
var precioDescuento;

cantidadArena=0;
cantidadCal=0;
cantidadCemento=0;




seguir= true;

while(seguir == true)
{
  producto= prompt ("Ingrese su producto");
  while(!(producto == "Arena" || producto== "Cal" || producto == "Cemento" ))
  {
    producto= prompt ("Error. Reingrese su producto, Arena, Cal o Cemento");
  }
  console.log (producto);

  cantidad= prompt("Ingrese la cantidad");
  cantidad = parseInt(cantidad);
  while (cantidad<1 || isNaN(cantidad))
  {
    cantidad= prompt("Error. Reingrese la cantidad, al menos 1 unidad.");
    cantidad = parseInt(cantidad); 
  }
  console.log (cantidad);

  precio= prompt ("Ingrese un precio valido");
  precio= parseInt(precio);
  while(precio <1 || isNaN(precio))
  {
    precio= prompt ("Error. Reingrese un precio valido, mayor a 0.");
    precio= parseInt(precio);
      
  }

console.log(precio);


  // switch(producto)
  // {
  //   case "Arena":

  //     {
  //     cantidadArena= cantidadArena + cantidad;
  //     precioArena= precioArena+ precio * cantidadArena;
  //     break;
  //     }
      
  //    case "Cal":
  //      {
  //      cantidadCal = cantidadCal + cantidad;
  //      precioCal = precioCal + precio *cantidadCal;
  //      break;
  //     }
  //   case "Cemento":
  //     {
  //     cantidadCemento=cantidadCemento+cantidad;
  //     precioCemento= precioCemento+ precio *cantidadCemento;
  //     break;   
  //     }
  
     
  //     console.log (cantidadTotal);
    
  switch(producto)
  {
    case "Arena":
      cantidadArena += cantidad;
      precioArena += precio * cantidadArena;
      //contadorArena++;
      break;

    case "Cal":
      cantidadCal += cantidad;
      precioCal += precio* cantidadCal;
      //contadorCal++;
      break;

    case "Cemento":
      cantidadCemento += cantidad;
      precioCemento += precio * cantidadCemento;
      //contadorCemento++;
      break;
  }


    cantidadTotal= cantidadArena+cantidadCemento+cantidadCal;
    precioTotal= precioArena+precioCemento+precioCal;


     

    seguir= confirm ("¿Desea seguir ingresando productos?");

  }



  alert ("precio Total=" + precioTotal );  
     



}



// if (cantidadTotal>10)
// {
//   precioDescuento= precioTotal + (precioTotal*0.15);
// }
// else 
// {
//   if(cantidadTotal>30)
//   {
//     precioTotal= precioTotal + (precioTotal*0.25);
//   }
// }




//   Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),

// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo con mas cantidad de bolsas.
// f) El tipo mas caro 


{/* <h2></br>Realizar el algoritmo que permita ingresar los datos de una 
compra de productos de la construccion,
 hasta que el cliente quiera:
<br> Tipo validad("arena";"cal";"cemento") 
<br> Cantidad de bolsas,
<br> Precio por bolsa (más de cero ),
<br> al terminar la compra el cliente accede a un descuento segun las bolsas en total
<br> Si compro más de 10 bolsas en total tenes 15% de 
descuento sobre el total a pagar.
<br> Si compro más de 30 bolsas en total tenes 25% 
de descuento sobre el total a pagar.	
<br>a)
El importe total a pagar , bruto sin descuento y...
<br>b)
el importe total a pagar con descuento(solo si corresponde)
<br>d)
Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
<br>f)
El tipo mas caro*function mostrar()
{
  var tipo;//validad("arena";"cal";"cemento") 
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta;
  var acumuladorDeBolsas;
  var precioBrutoTotal;
  var precioBrutoProducto;
  var porcentaje;
  var descuento;
  var precioConDescuento;
  var acumuladorCal;
  var acumuladorCemento;
  var acumuladorArena;
  var tipoConMasUnidades;
  var banderaDelPrimerProducto;
  var tipoMasCaro;
  var tipoMasCaroPrecio;


  banderaDelPrimerProducto="es el primero";
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;

  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  respuesta="s";
  while(respuesta=="s")
  {

  	tipo=prompt("ingrese tipo");
  	while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
  	{
  		tipo=prompt("error, ingrese tipo");
  	}
  	cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
  	cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	while(cantidadDeBolsas<1)
  	{
  		cantidadDeBolsas=prompt("error ,ingrese cantidad de bolsas");
  		cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	}



  	precioPorBolsa=prompt("ingrese cantidad de bolsas");
  	precioPorBolsa=parseInt(precioPorBolsa);
  	while(precioPorBolsa<1)
  	{
  		precioPorBolsa=prompt("error ,ingrese cantidad de bolsas");
  		precioPorBolsa=parseInt(precioPorBolsa);
  	}

  	acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
  	precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
  	precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

  	if(banderaDelPrimerProducto=="es el primero")
  	{
  		banderaDelPrimerProducto="ya paso";
  		tipoMasCaro=tipo;
  		tipoMasCaroPrecio=precioPorBolsa;
  	}else
  	{
  		if(precioPorBolsa>tipoMasCaroPrecio)
  		{
  			tipoMasCaro=tipo;
  			tipoMasCaroPrecio=precioPorBolsa;
  		}
  	}





  	switch(tipo)
  	{
  		case "arena":
  			acumuladorArena=acumuladorArena+cantidadDeBolsas;
  			break;
  		case "cal":
  			acumuladorCal=acumuladorCal+cantidadDeBolsas;
  			break;
  		case "cemento":
  			acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
  			break;
  	}








  	respuesta=prompt("seguir ?")
  }//termine

  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
  	//arena
  	tipoConMasUnidades="arena";
  }else
  {
  	if(acumuladorCal>acumuladorCemento)
  	{
  		tipoConMasUnidades="cal";
  	}else
  	{
  		tipoConMasUnidades="cemento";
  	}
  }




  if(acumuladorDeBolsas>30)
  {
  	porcentaje=25;

  }else
  {
  	if(acumuladorDeBolsas>10)
  	{
  		porcentaje=15;
  	}else
  	{
  		porcentaje=0;
  	}
  }





  if(porcentaje!=0)
  {
  	descuento=precioBrutoTotal*porcentaje/100;
  	precioConDescuento=precioBrutoTotal-descuento;
 	console.log("pagar con descuento: "+precioConDescuento);		
  }

 // El importe total a pagar , bruto sin descuento
 console.log("bruto sin descuento: "+precioBrutoTotal);
 console.log("el tipo mas comprado es: "+tipoConMasUnidades);
 console.log("el tipo mas caro  es: "+tipoMasCaro);

 

} */}

