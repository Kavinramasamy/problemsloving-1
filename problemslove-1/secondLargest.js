//Write a program for find second largest number in a array....

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Minimum two numbers required";
    }

    arr.sort(function (a, b) {
        return a - b
    })
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] != arr[arr.length - 1]) {
            return "The second largest number is" + arr[i];
        }

    }
    return "there is no seecond largest number.."
}

let arr = [12, 34, 45, 67, 89, 90]
console.log(findSecondLargest(arr));