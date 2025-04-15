function EvenOrOdd(num){

    for (let i = 0; i < num.length; i++) {
        // console.log(num[i]);
        
        if (num[i] % 2 === 0) {
            console.log(`${num[i]} is an even number`);
            
            
        }else{
            console.log(`${num[i]} is an odd number`);
            
        }
        
        
        
    }
    

}
EvenOrOdd([2, 4, 3, 5, 6, 7, 9])