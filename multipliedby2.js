function productOfTwo(array){
    let newNum = []
    for (let i = 0; i < array.length; i++) {
        
            newNum.push(array[i] * 2)
        
       
        
    }
    return newNum

}
console.log(productOfTwo([1, 2, 3, 4]));
