// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//my solution:
function arrayPlusArray(arr1, arr2) {

    let arr1Sum = 0;
    let arr2Sum = 0;

    arr1.forEach(num => {
        arr1Sum += num;
    });
    arr2.forEach(num => {
        arr2Sum += num;
    });

    return arr1Sum + arr2Sum; 
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

