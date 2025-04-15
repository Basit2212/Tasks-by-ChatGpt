function vowelCounter(string){
    let lowerCase = string.toLowerCase();
    let vowelCount = 0;
    let vowels = "aeiou"
    for (let i = 0; i < lowerCase.length; i++) {
        if (vowels.includes(lowerCase[i])) {
            vowelCount++;
        }
        
        
    }
    return vowelCount

    

    

}
console.log(vowelCounter("I am Basit"));

