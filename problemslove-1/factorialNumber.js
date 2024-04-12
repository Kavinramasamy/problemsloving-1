// write the function to calculate a factorial number using iteration....

const factfunc = function factorialNum(num) {
    var fact = 1;
    var i = 1;

    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
console.log(factfunc(5));
console.log(factfunc(8));
