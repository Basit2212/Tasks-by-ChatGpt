function findSmallest(array){
    let smallest = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]
            
        }
        
        
    }
    return smallest

}
console.log(findSmallest([20, 10, 2, 49, 50]));
