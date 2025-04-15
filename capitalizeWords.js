function capitalizeWords(string){
    let newString = string.split(" ")
    for (let i = 0; i < newString.length; i++) {
        if (newString[i]) {
           newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1)
        }
        
       
        
    }
    return newString.join(" ")
}
console.log(capitalizeWords("my name is basit"));
