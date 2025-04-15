function indexofNegative(array){
    let newNum = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return i
            
            
        }
    
            
        
        
    }
    return newNum

}
console.log(indexofNegative([1, -2, 3, 4, 5]));
console.log(indexofNegative([1, 2, 3, 4, 5]));

