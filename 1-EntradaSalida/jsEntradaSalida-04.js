/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	

	
	
	var edad;
	var nombre;
	var seguir;


	seguir=true;
	
	
	
	while (seguir==true)
	{
		var sexo;	
		sexo= prompt ("Ingrese su sexo")

		var altura;
		
		altura= promt("Ingrese su altura")
		//console.log(altura);
		edad= prompt("Ingrese su edad")
		//console.log(edad);
		nombre= prompt("Ingrese su nombre")
		//console.log(nombre);


// var marca;
//  var fabricante;

//  marca = prompt ("Ingrese la marca");
//  fabricante = prompt ("Ingrese el fabricante");

//  console.log (marca);
//  console.log (fabricante);






		seguir= confirm ("Desea seguir reingresando espectadores");
	}

	

}

