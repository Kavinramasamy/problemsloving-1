// Find a larget number in a array...

function largest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]
    }
    return max;
}
let arr = [100, 137, 75, 5, 43]
console.log("The largest number of arr is " + largest(arr));