function exponention(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i]**i
        
        
        
    }
    return newArray

}
console.log(exponention([1, 2, 3, 4]));


