function countingVowels(string){
    let lowerCase = string.toLowerCase()
    let vowels = "aeiou";
    let countedVowels = 0;
    for (let i = 0; i < lowerCase.length; i++) {
       
        if (vowels.includes(lowerCase[i])) {
            countedVowels++
            
            

            
            
        }

              
        
    }
    return countedVowels
    

  
    
    
}
console.log(countingVowels("Basit"));
