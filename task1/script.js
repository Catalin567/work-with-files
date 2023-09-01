myFunction = function(a,b){
    if (a > b){
        [a,b] = [b,a]
    }

    let interval = [];
    for(a += 1;a < b;a++){
        interval.push(a);
    }

    let sumEvenNumbers = 0
    let EvenNumbers = []
    for(let i = 0;i < interval.length;i++){
        if(interval[i] % 2 === 0){
            sumEvenNumbers += interval[i]
            EvenNumbers.push(interval[i])
        }
    }
    console.log("The sum of even numbers is: " + sumEvenNumbers)
    console.log("The amount of even numbers is: " + EvenNumbers.length)
}

myFunction(1,5)
