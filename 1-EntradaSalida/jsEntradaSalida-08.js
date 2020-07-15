/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	var numeroUno;
	var numeroDos;
	var modulo;
	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	modulo= numeroUno%numeroDos;

	alert ("El resto de la division es " + modulo);
}


// Numeros aritmeticos : +, -, *, /, y operador modulo 

// 7 / 2 = 3 resto 1