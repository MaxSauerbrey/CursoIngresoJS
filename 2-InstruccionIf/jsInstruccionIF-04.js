function mostrar()
{
	//tomo la edad  
	 
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad>13 && edad<=17)
	{
		alert("La edad seleccionada corresponde a un adolescente");
	}
		else
		{
			alert ("La edad seleccionada no corresponde a un adolescente");
		}
	
	
/*
if (edad>12)
{
	if(edad<18)
	{
		alert ("Es mayor de edad");
	}
}




Conjuncion (&&)
1	2	T     ---> Donde 0 es falso y 1 es verdadero
0	0	0

0	1	0	

1	1	0	


Disyuncion (||)
1	2	T

0	0	0	

0	1	1	

1	0	1

1	1	1	


*/
}