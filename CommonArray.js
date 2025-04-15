function commonArray(num, num1) {
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        if (num1.includes(num[i]) && !arr.includes(num[i])) {
            arr.push(num[i])
            
        }
        
    }
    return arr
    
}
console.log(commonArray([1,3,5,7,9], [2,3,5,7,9]));
