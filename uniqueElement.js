function uniqueElement(array) { 
    let obj = {};
    let unique = []
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++

            
        }else{
            obj[array[i]] = 1
        }
      
        
    }
    for (const key in obj) {
        if (obj[key] === 1) {
           unique.push(Number(key))
            
        }
    }
    return unique
    
}
console.log(uniqueElement([1, 1, 2, 3, 3, 3, 4, 5, 6, 6]));
