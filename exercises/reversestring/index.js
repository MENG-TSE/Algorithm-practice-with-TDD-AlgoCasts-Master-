// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    // for( var i = 0 ; i<str.length; i++){

    // }

    for(let character of str) {
        reversed = charaters + reversed;
    }

    return reversed;
}

module.exports = reverse;

//法一
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
//法一(簡寫)
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');