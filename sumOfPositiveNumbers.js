function sumOfPositiveNumbers(array) {
    let num = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            num+= array[i]
            
        }
        
    }
    return num
}
console.log(sumOfPositiveNumbers([1, -3, 4, -2, -5]));
