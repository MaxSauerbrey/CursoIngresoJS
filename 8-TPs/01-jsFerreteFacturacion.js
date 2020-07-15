/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   //Declaracion de variables
    var cinta;
    var lapicera;
    var marcador;
    var resultado; 

    // 
    cinta = txtIdPrecioUno.value;
    lapicera = txtIdPrecioDos.value;
    marcador = txtIdPrecioTres.value; 

    //Parsear
    cinta = parseInt (cinta);
    lapicera = parseInt (lapicera);
    marcador = parseInt (marcador);
    
    resultado= cinta + lapicera + marcador; 

    alert ("El resultado de la suma es " + resultado);

    

}
function Promedio () 
{
    var cinta;
    var lapicera;
    var marcador;
    var resultado; 
    var promedio;

    // 
    cinta = txtIdPrecioUno.value;
    lapicera = txtIdPrecioDos.value;
    marcador = txtIdPrecioTres.value; 

    //Parsear
    cinta = parseInt (cinta);
    lapicera = parseInt (lapicera);
    marcador = parseInt (marcador);

    resultado = cinta + lapicera + marcador;
    promedioProductos = resultado / 3; 
    
    alert("El promedio de productos es " + promedioProductos);
}
function PrecioFinal () 
{
    var cinta;
    var lapicera;
    var marcador;
    var resultado; 
    var resultadoIva;

    // 
    cinta = txtIdPrecioUno.value;
    lapicera = txtIdPrecioDos.value;
    marcador = txtIdPrecioTres.value; 

    //Parsear
    cinta = parseInt (cinta);
    lapicera = parseInt (lapicera);
    marcador = parseInt (marcador);

    resultado = cinta + lapicera + marcador;
 
    resultadoIva = resultado + (resultado * 0.21);
    alert("El precio total con IVA incluido " + resultadoIva);
}