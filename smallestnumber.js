function smallestNumber(array){
    let smallNumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallNumber) {
            smallNumber = array[i]
            
            
            
        }
      
    }
    return smallNumber
    

}
console.log(smallestNumber([10, 1, 20, 9, 30]));
