/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    var temperaturaFahrenheit; 
    var temperaturaCelcius;
    
    temperaturaFahrenheit = txtIdTemperatura.value;
    temperaturaFahrenheit = parseInt (temperaturaFahrenheit);

    temperaturaCelcius= (temperaturaFahrenheit - 32) * 5/9;

    alert( temperaturaFahrenheit + " Fahrenheit son " + temperaturaCelcius + " grados Celcius");





}

function CentigradosFahrenheit () 
{
    var temperaturaCelcius;
    var temperaturaFahrenheit;

    temperaturaCelcius= txtIdTemperatura.value;
    temperaturaCelcius= parseInt(temperaturaCelcius);

    temperaturaFahrenheit= (temperaturaCelcius * 9/5) + 32;

    alert (temperaturaCelcius + " grados Celcius son " + temperaturaFahrenheit + " Fahrenheit ");



}
