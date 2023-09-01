let getFactorial = function(n){
    let result = 1
    for(let i = 1;i <= n;i++){
        result *= i
    }
    console.log(n + '! =',result)
    
}

getFactorial(4)
getFactorial(5)