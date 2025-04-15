function sumOfPositive(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i]
        
    }
            
}
    return sum
}
console.log(sumOfPositive([1, -3, -5, 5, 6]));


