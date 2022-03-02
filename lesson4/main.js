//The challenge is to iterate over numerosArray and print in console each one, but using recursive functions. Below is the challenge with a for cycle
const numerosArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1238712847, 7, 2, 5];
let numero = 0;

// for (let index = 0; index < numerosArray.length; index++) {
//     console.log(index, numerosArray[index]);
// }
//Here is the challenge with a recursive function

function recursiva(arrayParameter) {
    if (arrayParameter.length != 0) {
        console.log(arrayParameter[0]);
        arrayParameter.shift();
        recursiva(arrayParameter);
    } else {
         return "fin"
     }
};

recursiva(numerosArray);