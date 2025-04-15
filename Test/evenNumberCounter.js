function evenNumCount(array) {
    let evenNum = 0
    for (let i = 0; i < array.length; i++) {
       if (array[i] %2 === 0) {
        evenNum ++;
    
       }
        
    }

    return evenNum
}
console.log(evenNumCount([1, 2, 3, 4, 5, 6, 7, 8]));
