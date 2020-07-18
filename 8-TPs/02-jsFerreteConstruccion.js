/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    //Declaracion de variables
    var largo;
    var ancho;
    var resultado;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //Parsear
    largo = parseInt (largo);
    ancho = parseInt (ancho);

    resultado = (largo*2 + ancho*2) * 3;
    alert("La cantidad de metros de alambre necesario es " + resultado);

    
}
function Circulo () 
{
    var radio;
    var resultado;

    radio = txtIdRadio.value;

    //Parsear 
    radio = parseInt(radio);

    resultado = (2 * Math.PI * radio) *3 ;

    alert("La cantidad de metros de alambre necesario es " + resultado);

    
    
}
function Materiales () 
{
	//Declaracion de variables
    var largoTerreno;
    var anchoTerreno;
    var medidaTerreno;
    var bolsaCemento;
    var bolsaCal;
    

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    //Parsear
    largoTerreno = parseInt (largoTerreno);
    anchoTerreno = parseInt (anchoTerreno);

    medidaTerreno= largoTerreno * anchoTerreno;
    bolsaCemento = medidaTerreno *2;
    bolsaCal = medidaTerreno *3 ;
    


    alert("Se necesitaran " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal");

}