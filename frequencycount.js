function frequencyCount(array){
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++
            
        } else {
            obj[array[i]] = 1
            
        }

        
        
        
    }
    return obj
}
console.log(frequencyCount([1, 1, 2, 3, 3, 4, 4, 5]));
