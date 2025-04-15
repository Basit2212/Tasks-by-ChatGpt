function greaterThanFive(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            arr.push(array[i])
            
        }
        
    }
    return arr
    
}
console.log(greaterThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9]));
