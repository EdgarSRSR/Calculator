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

// call the container of the display
const container = document.querySelector("#container");

// array for containing the numbers and operators
const operation = [];

// string for containing the numbers and operators from the array into a string
var operations = ' ';

// select the buttons in the calculator
const buttons = document.querySelectorAll('button');

// we use the forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    // pushes the id of the button into the operation array
    operation.push(button.id);
    // turning the operation array into string and showing it on the display
    container.textContent = operation.join('');
    console.log(operation);
  });
});

// code for delete button
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', function(){
  operation.length = 0;
  container.textContent = '';
});

// code for equal button
const equal = document.querySelector('.equal');
equal.addEventListener('click', function(){

  // string that made from the operation array with numbers and operators
  let operationString = operation.join('');
  // creates an array with only the numbers, this allows for getting double numbers
  let operationNumbers = splitMulti(operationString, ['-','+','%','x']);
  let operationOperators = splitMulti(operationString, ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);  
  console.log("String of the number and operators: " + operationString);
  console.log("Array of only the numbers: ");
  console.log(operationNumbers)
  console.log("Array of only operators:");
  console.log(operationOperators);
  // erases the operation array and the display
  operation.length = 0;
  container.textContent = '';
  //  calls for the operate function to do the math
  let solution = operate(operationNumbers, operationOperators)
  console.log(solution);
  container.textContent = solution;
});

// to splice by operand
function splitMulti(str, tokens){
  var tempChar = tokens[0]; // We can use the first token as a temporary join character
  for(var i = 1; i < tokens.length; i++){
      str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}

// code for cancel button
const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', function(){
  operation.pop();
  operation.pop();
  container.textContent = operation.join('');
  console.log(operation);
});

// takes an operator and 2 numbers and call one of the operator functions
function operate(digits,operators){

  for(let i of operators){
      if(i == null){
        operators.splice(i,1);
        continue
      }else if(i === '+'){
        return add(parseInt(digits[0]), parseInt(digits[1]));
      } else if(i === '-'){
        return substract(parseInt(digits[0]), parseInt(digits[1]));
      } else if(i === 'x'){
        return multiply(parseInt(digits[0]), parseInt(digits[1]));
      } else if(i === '%'){
        return divide(parseInt(digits[0]), parseInt(digits[1]));
      } 
   }

}


//operate(['2','2'],['','+',''])

// operator functions:

function add(a,b){
  return a + b;
}

function substract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){

  if(b === 0){
    return "ERROR"
  }
  return Math.round(((a/b) + Number.EPSILON) * 100) / 100;

}