function countMultiplesOf(array, array2) {
    let newArr = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % array2 === 0) {
            newArr++
            
        }
        
    }
    return newArr
    
}
console.log(countMultiplesOf([1, 2, 3, 4, 5, 6], 2));
