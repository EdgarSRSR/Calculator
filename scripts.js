/**- crear una variable que almacene los numeros de la calculadora, esto puede ser una concatenacion de strings que se transforman despues en numeros
  y cuando se hace click en algun boton de operaciones esta variable lo envia a otra variable que es la que se introducira a la funcionde la operacion.
  una alternativa a la concatenacion puede ser una Array.
- crear funciones para cada operacion.
- crear una funcion para que cuando se haga click en = se manden los numeros en las variables como parametros s la funcion de la operacion adecuada y se borren las variables necesarias.
- reciclar variables de numeros borrando los valores al darse click en los botones de operaciones
- crear un array con valores de operaciones podria ser una solucion.

 Se van dando click en la calculadore y los numeros van siendo agregados a un array a traves de un push()
 los operadores tambien se agregan al array.
 Al apretarse =, se da por concluido el array y se crea un nuevo array consistente de los valores del anterior pero esta vez separado a traves de los operadores.
 de esta manera va a haber numeros y operadores.
 este nuevo array es procesado en un for loop.
 el primer valor numerico se asigna a una variable
 se hacen if de acuerdo con los operadores, ejemplo if array[i] == '+' y adentro de los if se hacen las operaciones necesarias
 al final se regresa el resultado.
**/

