function sum(num){
    let total = 0
    for (let i = 0; i < num.length; i++) {
       if (num[i] % 2 === 0) {
        total += num[i]
        
        
        
       }
       
        
    }
    return total;
}
console.log(sum([1,2,3,4,5,6,7,8]));
