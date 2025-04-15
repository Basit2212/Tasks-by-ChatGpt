function findLargest(array){
    let largest = -Infinity
    for (let i = 0; i < array.length; i++) {
       if (array[i] > largest) {
        largest = array[i]
        
       }
        
    }
    return largest
}
console.log(findLargest([1, 20, 300, 5]));
