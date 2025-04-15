function sumDivisibleByFive(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            sum+= array[i]
            
        }
        
        
    }
    return sum

    
}
console.log(sumDivisibleByFive([1,3,5,9,10,15,16]));
