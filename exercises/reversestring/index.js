// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return  str.split('').reduce((reversed, character) =>  character + reversed, '');
}

module.exports = reverse;

//法一
    //function reverse(str){
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    //}

//法一(簡寫)
    //function reverse(str){
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');
    // }



    //法二
    // function reverse(str) {
    //     let reversed = '';
                        //------>不建議的方法
                            //     for( var i = 0 ; i<str.length; i++){
                            
                            //     }
                        //<-------end
    //     for(let character of str) {
    //         reversed = charaters + reversed;
    //     }
    //     return reversed;
    // }