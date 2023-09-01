getSqrtBySequentialSelection = function(number) {
    let results = []
    for(let x = 0;x * x <= number ;x++){
        results.push(x)
    }
    corectResult = results.pop()
    console.log("корень методом последовательного подбора: " + corectResult)
}
getSqrtBySequentialSelection(25);

getSqrtByBinarySearch = function(number){
    let left = 0;
    let right = number;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(mid * mid === number){
            return mid
        }else if(mid * mid > number){
            right = mid - 1
        }else {
            left = mid + 1
        }
    }
    return "this value have no perfect square"
}

console.log(getSqrtByBinarySearch(25))


