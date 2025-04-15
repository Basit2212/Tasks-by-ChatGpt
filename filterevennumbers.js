function filterEvenNumber(array) {
    let evenNumbers = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
            
            
        }
        
        
        
    }
    return evenNumbers
    
}
console.log(filterEvenNumber([1, 2, 3, 4, 5, 6, 7, 9, 10 ,68]));
