function wordFrequency(string){
    let wordCount = {}
    let word = string.split(" ")
    for (let i = 0; i < word.length; i++) {
        if(wordCount[word[i]]){
            wordCount[word[i]]++

        }else{
            wordCount[word[i]] = 1
        }
        
    }
    return wordCount
}
console.log(wordFrequency("My name is Basit"));
