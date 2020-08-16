
function mostrar()
{
/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total.
*/
/*
//Cantidad determinada

//Declaracion de variables
var i;


//Inicializacion de las variables.
i=0;


//Inicio del while principal
while (i<3)
{





i++;  
}

//CANTIDAD INDETERMINADA

//Declaracion de variables.
var seguir;

seguir = true;

while(seguir== true)
{



    seguir= confirm ("¿Desea seguir...?")
}



*/


//Declaracion de variables
var i;
var productoIngresado;
var precioIngresado;
var unidadesIngresadas;
var marcaIngresada;
var fabricanteIngresado;
var banderaJabones;
var precioJabonMasCaro;
var unidadesJabonMasCaro;
var fabricanteJabonMasCaro;
var acumuladorJabon;
var acumuladorBarbijo;
var acumuladorAlcohol;
var precioAlcohol;
var precioJabon;
var precioBarbijo;




//Inicializacion de las variables
i=0;
banderaJabones=true;
acumuladorAlcohol=0;
acumuladorBarbijo=0;
acumuladorJabon=0;
precioAlcohol=0;
precioBarbijo=0;
precioJabon=0;

//Inicio del while principal
while (i<3)
{
productoIngresado=prompt("Ingrese su producto de prevencion");
while(productoIngresado !== "Barbijo" && productoIngresado !== "Jabon" && productoIngresado!== "Alcohol")
{
    productoIngresado=prompt("Error, reingrese su producto, Barbijo, Alcohol o Jabon");
}
console.log(productoIngresado);

precioIngresado= prompt("Ingrese el precio del producto");
precioIngresado=parseInt(precioIngresado);
while(precioIngresado<100 || precioIngresado>300)
{
    precioIngresado= prompt("Error,reingrese el precio del producto, entre 100 y 300 pesos");
    precioIngresado=parseInt(precioIngresado);
}
console.log(precioIngresado);

unidadesIngresadas= prompt("Ingrese la cantidad de unidades.")
unidadesIngresadas= parseInt(unidadesIngresadas);
while(unidadesIngresadas<1 || unidadesIngresadas>1000)
{
    unidadesIngresadas= prompt("Error, reingrese la cantidad de unidades, mayor a 0 y menor a 1000.")
    unidadesIngresadas= parseInt(unidadesIngresadas);
}
console.log(unidadesIngresadas);

marcaIngresada=prompt("Ingrese la marca");
console.log(marcaIngresada);

fabricanteIngresado= prompt("Ingrese el fabricante");
console.log(fabricanteIngresado);


if(banderaJabones==true)
{
    if(productoIngresado== "Jabon")
    {
    precioJabonMasCaro=precioIngresado;
    unidadesJabonMasCaro=unidadesIngresadas;
    fabricanteJabonMasCaro=fabricanteIngresado;
    banderaJabones=false;
    }   
}
else
{
    if(precioIngresado>precioJabonMasCaro)
    {
    precioJabonMasCaro=precioIngresado;
    unidadesJabonMasCaro=unidadesIngresadas;
    fabricanteJabonMasCaro=fabricanteIngresado
    }
}

switch(productoIngresado)
{
    case "Jabon":
    acumuladorJabon+=unidadesIngresadas;
    precioJabon+=precioIngresado;
    break;
    case "Alcohol":
    acumuladorAlcohol += unidadesIngresadas;
    precioAlcohol+= precioIngresado;
    break;
    case "Barbijo":
    acumuladorBarbijo += unidadesIngresadas;
    precioBarbijo +=precioIngresado;
    break;        
}



i++;    
}
//Fin del while principal
console.log ("La cantidad de unidades del jabon mas caro que selecciono es de " + unidadesJabonMasCaro + " y su fabricante es: " + fabricanteJabonMasCaro );
if (acumuladorJabon> acumuladorAlcohol && acumuladorJabon>acumuladorBarbijo)
{
    console.log ("El tipo de producto con mas unidades es el jabon y su promedio por compra es:" + (precioJabon/acumuladorJabon));
}
else
{
    if(acumuladorAlcohol>acumuladorBarbijo)
    {
        console.log ("El tipo de producto con mas unidades es el alcohol y su promedio por compra es:" + (precioAlcohol/acumuladorAlcohol));
    }
    else
    {
        console.log ("El tipo de producto con mas unidades son los barbijos y su promedio por compra es:" + (precioBarbijo/acumuladorBarbijo));
    }
}

console.log ("El total de unidades de barbijos es: " + acumuladorBarbijo);

/*
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total.
*/


}

