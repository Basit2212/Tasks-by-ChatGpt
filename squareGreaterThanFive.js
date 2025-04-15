function squaresOfFive(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            newArray.push(array[i] ** 2)
            
        }
    }
    return newArray
    
}
console.log(squaresOfFive([1, 2, 3, 4, 5, 7, 8, 9]));
