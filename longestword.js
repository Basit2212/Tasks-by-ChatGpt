function longestWord(array){
    let newArray = array.split(" ")
    let longestWord = ""
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length > longestWord.length) {
            longestWord = newArray[i]
            
        }
        
        
    }
    return longestWord
    
}
console.log(longestWord("I am learning something"));
