//write the function to find a nth fibonacci number using iteration...

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;

    for (let i = 0; i < num; i++) {
        sum = num1 + num2
        num1 = num2;
        num2 = sum;
    }
    return num2;

}
console.log("The 5th number is" + fibonacci(5));
console.log("The 8th number is" + fibonacci(8));