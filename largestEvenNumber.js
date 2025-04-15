function largestEvenNumber(array){
    let large = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] > large) {
            large = array[i]
        
            
            
            
        }
        
        
        
    }
    if (large === -1) {
        console.log("No even number found");
        
        
    }
    else {
        console.log(`${large} is the largest even number`);
        
    }
    
    return large

}
console.log(largestEvenNumber([1, 3, 5, 6, 7, 8, 10]));
console.log(largestEvenNumber([1, 3, 5, 7, 9]));

