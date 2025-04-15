function oddNumber(number){
    let newNum = []
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            newNum.push(number[i])
            
        }
        
        
    }
    return newNum


}
console.log(oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
