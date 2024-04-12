//Find a given numver is prime or not...

function isPrime(num) {
    let count = 0;
    if (num == 2) return true
    if (num % 2 == 0) return false;
    for (let fact = 3; fact * fact <= num; fact += 2) {
        count++;
        if (num % fact == 0) {
            return [count, false];
        }
    }
    return [count, true];
}
console.log(isPrime(101));
console.log(isPrime(102));