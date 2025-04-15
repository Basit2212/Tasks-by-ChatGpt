function longestWord(string) {
    let word = string.split(" ")
    let longest = ""
    let longestWord = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longestWord) {
            longest = word[i]
            longestWord = word[i].length
            
        }
        
        
    }
    return longest
}
console.log(longestWord("I love eating biryani"));

