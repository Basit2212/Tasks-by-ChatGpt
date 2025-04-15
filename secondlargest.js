function secondLarge(number){
    let largest = null;
    let secondLargest = null;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > largest) {
            secondLargest = largest
            largest = number[i]
            
        }else if(number[i] > secondLargest && number[i] < largest){
            secondLargest = number[i]
        }


    }
    return secondLargest

}
console.log(secondLarge([1, 2, 3, 5, 6, 7]));
