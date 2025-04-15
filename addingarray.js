function addArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        
    }
    return sum


}
console.log(addArray([1, 2, 3, 4, 5]));
