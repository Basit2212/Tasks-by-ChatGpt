function primeNumber(value){
    if(value <= 1) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i ===0) {
            return false
            
        }
        
        
    }
    return true

}
console.log(primeNumber(6));
