function printReverse(arr) {
    // var result = []
    // for(i=0; i<arr.length;i++) {
    //     result.unshift(arr[i]);
    // }
    // console.log(result);

    //Colt Solution
    for(var i=arr.length; i>=0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1, 2, 3, 4]);
printReverse(['a','b','c'])

function isUniform(arr) {
    for(i=0; i<arr.length-1;i++) {
        if(arr[i] !== arr[i+1]){
            console.log('false')
            return false
        }
    }
    console.log('true')
    return true

    //Colt Solution
    // var first = arr[0]
    // for(var i=0; i<arr.length; i++) {
    //     if(arr[i] !== first) {
    //         return false
    //     }
    // }
    // return true
}
isUniform([1,1,1,1,1,1]);
isUniform(['a','a','a']);
isUniform([1,2,1,1]);

function sumArray(arr) {
    // var result = 0
    // for(i; i<arr.length;i++) {
    //     result += arr[i];
    // }
    // console.log(result);

    //Colt Solution
    var total = 0
    arr.forEach(function(element) {
        total += element;
    })
    console.log(total);
    return total;
}
sumArray([1,2,3]);
sumArray([2, 2, 2, 2, 2, 2]);

function maxArray(arr) {
    var max = Math.max(...arr);
    console.log(max);

    //Colt Solution
    // var max = arr[0]
    // for(var i=1; i<arr.length; i++) {
    //     if(arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    // return max;
}
maxArray([2, 3, 1, 6, 3, 10, 31]);
