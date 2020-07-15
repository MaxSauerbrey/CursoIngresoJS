/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var total; 
	

	importe = txtIdImporte.value;
	importe = parseInt( importe);

	resultado= importe * 0.25;

	// resultado = sueldo + (sueldo * 25/100)
	total= importe - resultado;

	
	alert( "El porcentaje de descuento aplicado es del " + resultado + "%");
	txtIdResultado.value= total;


}
// 0.9

// 0.75