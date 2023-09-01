function digitSum(y){
    if(isNaN(y)){
        alert("It works only with numbers :)")
        return
    }
    arr = Array.from(String(y))
    let arrayLength = arr.length - 1
    let result = 0
    for(i = 0;i <= arrayLength;i++){
        result += Number(arr[i])    
    }
    alert(result)
}
y = prompt("insert a number")
digitSum(y)