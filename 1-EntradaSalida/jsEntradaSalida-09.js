/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	//declaracion de variables
	var sueldo;
	var resultado;
	var total;

	//
	sueldo = txtIdSueldo.value;
	//Parsear
	sueldo = parseInt(sueldo);
	//asignacion de varibles
	resultado = sueldo * (0.1);
 	total = sueldo + resultado;

	// resultado = sueldo + sueldo *0.1; es lo mismo pero en una linea;
	//				sueldo +(sueldo * 10/100);

	// mensaje de descuento
	alert("El porcentaje de aumento aplicado es del " + resultado + "%");


	// mostrar resultado
	txtIdResultado.value = total;


	// alert ("El aumento es " + total);
}
// resultado = sueldo * 0,1;

	// total= sueldo + resultado; 



