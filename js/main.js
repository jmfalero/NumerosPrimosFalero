let numero = parseInt(prompt("Ingrese el numero que desea saber si es Primo" ))
let esPrimo = 0
for (let x = 1; x <= numero ; x++) 
    {
		if (numero % x == 0) 
            { 
                esPrimo=esPrimo+1;
             /*si el resto de la division entre el numero 2 y un numero anterior al ingresado es 0
            deja de ser un numero pirmo */
            /*el bucle deberia sumar la cantidad de veces que da 0 el resto de la division*/
            }
    }  
if (esPrimo == 2)
    {
        alert ("es un numero Primo")
        /* Si es divisible por 1 y por si mismo solamente, el contador tiene q estar en 2 */
    }
else if (esPrimo > 2 )
    {
        alert ("No es un numero Primo")
    }

	
