// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    // if (n < 0){
    //     return parseInt(reversed) * -1 ;
    // }
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;


//const myNumber
//  .toString , Math.sign(4000) => 1 ,  Math.sign(-14) => -1 ,  parseInt(myNumber.toString()) 3個提示

// me error
// function reverseInt(n) {
//     let reversed = '';
//     let n = n.toString();
//     for(let character of n){
//         reversed = character + reversed;
//     }
//     reversed = parseInt(reversed);
//     return reversed;
// }