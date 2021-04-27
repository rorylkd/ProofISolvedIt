const maths = require('./maths.js');


const operation = process.argv[2];
const numOne = process.argv[3];
const numTwo = process.argv[4];

switch(operation){
    case ('sum'): 
    var output = maths.sum(Number(numOne), Number(numTwo));
    console.log(output);
    break;
    case ('difference'):
    var output = maths.difference(Number(numOne), Number(numTwo));
        console.log(output);
    break;
    case ('product'):
    var output = maths.product(Number(numOne), Number(numTwo));
        console.log(output);
    break;
    case ('quotient'):
    var output = maths.quotient(Number(numOne), Number(numTwo));
        console.log(output);
    break;
    default:
    console.log('Choose an expression!')
}
