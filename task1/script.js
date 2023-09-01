function isPrime(num){
    let notPrime = false
    let prime = true
    if(num % 2 === 0 || num % 3 === 0 || num & 5 === 0){
        console.log(notPrime)
    }else{
        console.log(prime)
    }
}

isPrime(11)