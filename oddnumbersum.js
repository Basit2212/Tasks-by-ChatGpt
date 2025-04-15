function sumofOdd(array){
    let val = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i] % 2 !== 0) {
        val += array[i]

        
       }
       
        
    }
    return val

}
console.log(sumofOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
