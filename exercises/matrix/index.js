// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
const results = [];

for(let i = 0; i< n; i++){
    results.push([]);
}

let counter = 1;
let startColumn = 0;
let endColumn = n - 1;
while (startColumn <= endColumn && startRow <= endRow){
    //Top row
    for(let i = startColumn; i <= endColumn; i++){
        results[startRow][i] = counter;
        counter++;
    }
    startRow++;

    //Right column
    for(let i = startRow; i <= endRow; i++ ){
        results[i][startColumn] = counter;
        counter++
    }
    startColumn--;

    //button row
    for(let i = endColumn; i >= startColumn; i--){
        results[endRow][i] = counter;
        counter++;
    }
    endRow--;

    //start column
    for(let i = endRow; i>= startColumn; i--){
        results[i][endColumn] = counter;
        counter++;
    }
    startColumn++;
}
}

// 提示
// Create empty array of arrays called 'results'
// Create a counter variable,starting at 1
// As long as(start column <= end column) AND (start row <= end row)
//     Loop from start column to end column
//         At resultes[start_row][i] assign counter variable
//         Increment start now
//     Increment start row
//     Loop from start row to end row
//         At results[i][end_column] assign variable
//         Increment counter
//     Decrement end row
//     ...repeat for other two sides
module.exports = matrix;
