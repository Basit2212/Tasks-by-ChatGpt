function largestNumber(arr){
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
    
        if(arr[i] > largest ){
            console.log(`${arr[i]} is the biggest number`);
            largest = arr[i]
            

        }
        
        
    }
    return largest; 
    
    
 
  
}
console.log(largestNumber([4, 60, 29, 8, 10]));
