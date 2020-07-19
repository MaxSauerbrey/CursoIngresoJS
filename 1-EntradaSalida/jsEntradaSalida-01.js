/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

// comentario de linea 

function mostrar()
{
	alert ("esto funciona de maravilla");
}

/*
Tipos de alertas   

alert ("esto funciona de maravilla"); muestra un solo boton
confirm ("Desea continuar"); muestra dos botones, me devuelve true o false.
prompt ("Ingrese su nombre"); Presenta una ventana en la que puedo colocar un valor, me devuelve el valor que instroduzco.
Nos puede devolver un string (tambien puede estar vacio") o un null;


//Alumno Max Sauerbrey
//Ejercicio 1
var producto;
var importe;
var porcentajeAumento;
var precioAumento;
var preciofinal;

producto = prompt("Ingrese producto");
importe =  prompt ("Ingrese importe");
porcentajeAumento = prompt ("Ingrese porcentaje de aumento");


importe = parseInt ( importe);
porcentajeAumento= parseInt (porcentajeAumento);

precioAumento = importe * porcentajeAumento/100;

precioFinal = importe + precioAumento;




alert ( "el producto " + producto + " cuesta $ " + importe + "  sin aumento, tiene un aumento de $" + precioAumento + " %" + " y el precio final es: $ "  +   precioFinal + " ,gracias por su compra");


// Ejercicio 2 

/*
ejercicio 02:
se pide el anco y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
mostrar el siguiente mensaje.
"el terreno tiene ??? x ??? su perimetro total es de ??? y la superficie es de ???"


var anchoTerreno;
var largoTerreno;
var perimetroTerreno;
var superficieTerreno;

anchoTerreno = prompt ("Ingrese el ancho de su terreno");
largoTerreno = prompt ("Ingrese el largo de su terreno");

anchoTerreno = parseInt(anchoTerreno);
largoTerreno= parseInt(largoTerreno);

perimetroTerreno= (anchoTerreno * 2) + (largoTerreno*2);
superficieTerreno= anchoTerreno* largoTerreno;

alert("El terreno tiene " + anchoTerreno + " X" + largoTerreno + "  , su perimetro total es de " + perimetroTerreno + " y la superficie es de " + superficieTerreno); 


ejercicio 03:
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"



var importeUno;
var importeDos;
var sumaImportes;
var descuentoImportes;
var precioDescuento;
var iva;
var precioFinalIva;

importeUno = prompt("Ingrese el importe");
importeDos = prompt ("Ingrese el importe");

importeUno = parseInt (importeUno);
importeDos = parseInt (importeDos);

sumaImportes = importeUno + importeDos;

descuentoImportes= sumaImportes*0.3;

precioDescuento= sumaImportes - descuentoImportes;

iva = precioDescuento * 0.21;
precioFinalIva = precioDescuento + iva;

alert("los productos cuestan " + importeUno + " y " + importeDos + ", sumados son " + sumaImportes + " , tienen un descuento de " + descuentoImportes + " , el precio total con descuento es " + precioDescuento + " , el iva es de " + iva + " y el precio final con Iva es " + precioFinalIva);


/*
villegas
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//entrada
	//=prompt
	//importeIngresado=txtIdImporte.value;
	//importeIngresado=document.getElementById('txtIdImporte').value;

	//salida
	//alert()
	//txtIdResultado.value="el importe es:" +importeIngresado;
	//document.getElementById('txtIdResultado').value="otro importe es:" +importeIngresado;





	//IDS txtIdImporte txtIdResultado
	
/*
	var importeIngresado;
	var suma;
	var numeroUno;
	var numeroDos;
	var testeo;

	numeroUno="5";
	numeroDos=6;
	suma=5+6;
	suma=numeroUno+numeroDos;



	importeIngresado=txtIdImporte.value;
	importeIngresado=parseInt(importeIngresado);
	
	suma= importeIngresado+importeIngresado;

	testeo=parseInt(4);
	testeo=parseInt("5");
	testeo=parseInt("lalala");
	testeo=parseInt("6lalala");
	testeo=parseInt("lalala6");
	testeo=parseInt("");
	testeo=parseInt(" ");
	testeo=parseInt(variableNoExiste);


	alert(importeIngresado);

	txtIdResultado.value="el importe es:" +importeIngresado;
	document.getElementById('txtIdResultado').value="otro importe es:" +importeIngresado;


	var nombre;

	alert(dato);
	nombre=prompt("ingrese su nombre");

	alert(nombre);
	nombre="maria";
	nombre="jose";
	alert("literal");
	alert("su nombre es: "  +  nombre);
	alert("nombre");



*/