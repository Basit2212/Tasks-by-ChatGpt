function adjacentSum(array) {
    let number = []
    for (let i = 0; i < array.length -1; i++) {
        number.push(array[i] + array[i + 1])



    }
    return number

}
console.log(adjacentSum([1, 2, 3, 4, 5]));
