function secondLargest(array){
    let largest = null;
    let secondLarge = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLarge = largest;
            largest = array[i]
            
        }else if(array[i] > secondLarge && array[i] < largest){
            secondLarge = array[i]


        }
        
        
    }
    return secondLarge

}
console.log(secondLargest([10, 20 , 30, 5, 9]));
