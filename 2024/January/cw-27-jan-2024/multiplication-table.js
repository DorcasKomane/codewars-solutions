// Your task, is to create N×N multiplication table, of size 
// provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// ARRAYS FUNDAMENTALS

multiplicationTable = function(size) {
    const array = [];
    let row = [];

    for(let i = 0; i < size; i++){
        array[i] = [];
        for(let j = 0; j < size; j++){
            array[i][j] = (i + 1) * (j + 1);
        }
    } 

    return array;
}

console.log(multiplicationTable(3));
