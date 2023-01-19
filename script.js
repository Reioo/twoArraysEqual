/*
Get two arrays.
Arrange elements from small to big
Check if each element of arrays are equal
If elements aren't equal, return false, else return true.
*/
function sortArray(arr) {
    arr.sort(function (a, b)  {return a - b});
        return arr;
}

function check(A,B,N){
    for (let i = 0; i < N; i++) {
        console.log('Unsorted: ' + A[i]);
    }
    sortArray(A);
    for (let i = 0; i < N; i++) {
        console.log('Sorted: ' + A[i]);
    }
}
    
N = 5;
let A = [1,2,5,4,0];
let B = [2,4,5,0,1];
check(A, B, N);