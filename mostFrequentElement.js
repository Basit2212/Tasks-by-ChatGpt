function mostFrequentElement(array) {
    let obj = {};
    let maxCount = 0;
    let mostFrequent= null
    for (let i = 0; i < array.length; i++) {
        if(obj[array[i]]){
            obj[array[i]]++
        }
        else{
            obj[array[i]] = 1
        }
    }
    for (const key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key]
            mostFrequent = key
            
            
        }
    }
    return mostFrequent
}
console.log(mostFrequentElement([1, 2, 3, 4, 4, 5, 6,]));
